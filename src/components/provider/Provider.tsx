import React, { memo, useMemo } from 'react';
import { PortalProvider } from '@gorhom/portal';
import Animated, { useSharedValue } from 'react-native-reanimated';
import { InternalContext } from '../../context/internal';

// Components
import { Backdrop } from '../backdrop';

// Utils
import { HoldMenuProviderProps } from './types';
import { StateProps, Action } from './reducer';
import { CONTEXT_MENU_STATE } from '../../constants';
import { MenuInternalProps } from '../menu/types';
import Menu from '../menu';
export interface Store {
  state: StateProps;
  dispatch?: React.Dispatch<Action>;
}

export let AnimatedIcon: any;

const ProviderComponent = ({
  children,
  theme,
  iconComponent,
}: HoldMenuProviderProps) => {
  if (iconComponent)
    AnimatedIcon = Animated.createAnimatedComponent(iconComponent);

  const state = useSharedValue<CONTEXT_MENU_STATE>(
    CONTEXT_MENU_STATE.UNDETERMINED
  );
  const menuProps = useSharedValue<MenuInternalProps>({
    itemHeight: 0,
    itemWidth: 0,
    itemX: 0,
    itemY: 0,
    items: [],
    anchorPosition: 'top-center',
    menuHeight: 0,
    transformValue: 0,
    actionParams: {},
  });

  const internalContextVariables = useMemo(
    () => ({
      state,
      theme,
      menuProps,
    }),
    [state, theme, menuProps]
  );

  return (
    <InternalContext.Provider value={internalContextVariables}>
      <PortalProvider>
        {children}
        <Backdrop />
        <Menu />
      </PortalProvider>
    </InternalContext.Provider>
  );
};

const Provider = memo(ProviderComponent);

export default Provider;

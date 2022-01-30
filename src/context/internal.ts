import { createContext } from 'react';
import type Animated from 'react-native-reanimated';
import type { CONTEXT_MENU_STATE } from '../constants';
import { MenuInternalProps } from '../components/menu/types';
import { ViewStyle } from 'react-native';

export type ThemeType = {
  type: 'light' | 'dark';
  ViewStyle: Animated.SharedValue<ViewStyle | null>;
};

export type InternalContextType = {
  state: Animated.SharedValue<CONTEXT_MENU_STATE>;
  theme: ThemeType;
  menuProps: Animated.SharedValue<MenuInternalProps>;
};

// @ts-ignore
export const InternalContext = createContext<InternalContextType>();

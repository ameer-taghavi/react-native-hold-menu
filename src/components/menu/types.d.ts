import { TextStyle, ViewStyle } from 'react-native';
import { TransformOriginAnchorPosition } from '../../utils/calculations';

export type MenuItemProps = {
  text: string;
  icon?: Node;
  onPress?: (arg?: string | number) => void;
  isTitle?: boolean;
  isDestructive?: boolean;
  withSeparator?: boolean;
  textStyle?: TextStyle;
  style?: ViewStyle;
};

export type MenuListProps = {
  items: MenuItemProps[];
};

export type MenuInternalProps = {
  items: MenuItemProps[];
  itemHeight: number;
  itemWidth: number;
  itemY: number;
  itemX: number;
  anchorPosition: TransformOriginAnchorPosition;
  menuHeight: number;
  transformValue: number;
  actionParams: {
    [name: string]: (string | number)[];
  };
};

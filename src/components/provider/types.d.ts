import { ThemeType } from './../../context/internal';
export interface HoldMenuProviderProps {
  /**
   * Theme of hold menu. Effects to backdrop and context menu styles. Optional.
   * @type "light" | "dark"
   * @default "light"
   * @examples
   * theme="light"
   */
  theme: ThemeType;
  iconComponent?: any;
  children: React.ReactElement | React.ReactElement[];
}

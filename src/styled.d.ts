import 'styled-components';
import { themeColors } from './styles/theme';

type ITheme = typeof themeColors;

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}

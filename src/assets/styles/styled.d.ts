import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    colors: {
      primary: string;
      secondary: string;
      success: string;
      danger: string;
      warning: string;
      info: string;
      light: string;
      dark: string;
      background: string;
      text: string;
    };
    fonts: {
      primary: string;
      secondary: string;
    };
    fontSizes: {
      small: string;
      normal: string;
      medium: string;
      large: string;
      xLarge: string;
      xxLarge: string;
    };
    borderRadius: {
      small: string;
      medium: string;
      large: string;
      circle: string;
    };
    boxShadow: {
      small: string;
      medium: string;
      large: string;
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}

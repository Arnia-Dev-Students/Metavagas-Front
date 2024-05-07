import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    colors: {
      preto: string;
      amarelo: string;
      roxo: string;
      cinza2: string;
      roxoMedio: string;
      cinza1: string;
      iris: string;
      branco: string;
      cinza3: string;
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

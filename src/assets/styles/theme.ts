import { DefaultTheme } from "styled-components";

export const light: DefaultTheme = {
  name: "Default",
  colors: {
    preto: "#1A1033",
    amarelo: "#FBB04D",
    roxo: "#6950A1",
    cinza2: "#4A4A68",
    roxoMedio: "#B2A1D9",
    cinza1: "#A6A8AB",
    iris: "#5D5FEF",
    branco: "#FFFFFF",
    cinza3: "#8C8CA1",
  },
  fonts: {
    primary: "Poppins",
    secondary: "",
  },
  fontSizes: {
    small: "12px",
    normal: "14px",
    medium: "16px",
    large: "18px",
    xLarge: "32px",
    xxLarge: "48px",
  },
  borderRadius: {
    small: "4px",
    medium: "8px",
    large: "12px",
    circle: "50%",
  },
  boxShadow: {
    small: "",
    medium: "",
    large: "",
  },
  breakpoints: {
    xs: "0px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
};


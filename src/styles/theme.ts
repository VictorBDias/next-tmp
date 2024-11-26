import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
    };
    typography: {
      sizes: {
        small: string;
        regular: string;
        large: string;
      };
      weights: {
        regular: number;
        bold: number;
      };
    };
    spacings: {
      small: string;
      regular: string;
      large: string;
    };
  }
}

export const theme: DefaultTheme = {
  colors: {
    primary: "#3498db",
    secondary: "#2ecc71",
    background: "#f5f5f5",
    text: "#333333",
  },
  typography: {
    sizes: {
      small: "12px",
      regular: "16px",
      large: "24px",
    },
    weights: {
      regular: 400,
      bold: 700,
    },
  },
  spacings: {
    small: "8px",
    regular: "16px",
    large: "24px",
  },
};

export type Theme = typeof theme;

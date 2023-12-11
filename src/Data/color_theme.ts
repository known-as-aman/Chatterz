export type themesColor = "blue" | "red";

export type subThemes = {
  white?: string;
  black?: string;
  primary: string;
  primaryHover: string;
  dark: string;
  darkHover: string;
};

type themesObj = { blue: subThemes; red: subThemes };

export const themes: themesObj = {
  blue: {
    white: "#ffffff",
    black: "#000000",
    primary: "#5145e7",
    primaryHover: "#3d34c0",
    dark: "#2119b3",
    darkHover: "#151070",
  },
  red: {
    white: "#ffffff",
    black: "#000000",
    primary: "#ff1a1a",
    primaryHover: "#b30000",
    dark: "#cc0000",
    darkHover: "#4d0000",
  },
};
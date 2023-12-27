export type themesColor = "blue" | "red";

export type subThemes = {
  white?: string;
  black?: string;
  primary: string;
  primaryHover: string;
  primaryDark: string;
  primaryDarkHover: string;
  screen: string;
  icon: string;
  iconHover: string;
  primaryFont: string;
  secondaryFont: string,
  primaryBorder: string;
};

export type themesObj = { blue: subThemes; red: subThemes };

export const themes: themesObj = {
  blue: {
    white: "#ffffff",
    black: "#000000",
    primary: "#283669",
    primaryHover: "#1b295e",
    primaryDark: "#1b295e",
    primaryDarkHover: "#101b3c",
    screen: "#0f172a",
    icon: "#283669",
    iconHover: "#1b295e",
    primaryFont: "#ffffff",
    secondaryFont: "#283669",
    primaryBorder: "#ffffff",
  },
  red: {
    white: "#ffffff",
    black: "#000000",
    primary: "#ff1a1a",
    primaryHover: "#b30000",
    primaryDark: "#b30000",
    primaryDarkHover: "#660000",
    screen: "#1a0000",
    icon: "#b30000",
    iconHover: "#1b295e",
    primaryFont: "#ffffff",
    secondaryFont: "#ff1a1a",
    primaryBorder: "#ffffff",
  },
};
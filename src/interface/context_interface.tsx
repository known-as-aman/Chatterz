import { themesColor } from "../Data/color_theme";

export interface context_i {
  themeName: themesColor;
  theme: any;
  themeSelector: any;
  imageData: Array<string>;
  setImageData: any;
  imageOpen: boolean;
  setImageOpen: any;
}

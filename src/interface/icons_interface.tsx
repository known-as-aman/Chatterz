type svgIconsName =
  | "magnify_glass"
  | "three_dot_menu"
  | "send_paper_plane"
  | "document_plus"
  | "emoji_happy";

export interface svgIcons_i {
  name: svgIconsName;
  strokeWidth?: number;
  classes?: string;
}

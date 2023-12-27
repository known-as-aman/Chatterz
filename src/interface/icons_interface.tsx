type svgIconsName =
  | "magnify_glass"
  | "three_dot_menu"
  | "send_paper_plane"
  | "document_plus"
  | "emoji_happy"
  | "plus"
  | "cross"
  | "greater_than"
  | "lesser_than"
  | "bell"
  | "left_arrow"
  | "menu";

export interface svgIcons_i {
  name: svgIconsName;
  strokeWidth?: number;
  classes?: string;
}

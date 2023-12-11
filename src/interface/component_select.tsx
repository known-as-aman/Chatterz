export type componentInputBox_i = "loginSimple" | "more";

export interface inputTypeInterface_i {
  compType: componentInputBox_i;
  type?: string;
  value: string;
  textWeight?: number;
  textSize?: number;
  onChange?: any;
  logicOnChange?: any;
  placeholder?: string;
  extraClass?: string;
  icon?: any;
}

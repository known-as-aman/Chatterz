export type componentInputBox_i = "loginSimple";

export interface inputTypeInterface_i {
  compType: componentInputBox_i;
  type?: string;
  value: string;
  textWeight?: number;
  textSize?: number;
  textColor?:string;
  onChange?: any;
  logicOnChange?: any;
  placeholder?: string;
  extraClass?: string;
  inputExtraClass?: string;
  icon?: any;
}

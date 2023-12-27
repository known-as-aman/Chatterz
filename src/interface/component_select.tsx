export type componentInputBox_i = "loginSimple";

export interface inputTypeInterface_i {
  compType: componentInputBox_i;
  type?: string;
  value: string;
  textWeight?: number;
  textSize?: number;
  textColor?: string;
  onChange?: any;
  logicOnChange?: any;
  placeholder?: string;
  extraClass?: string;
  inputExtraClass?: string;
  icon?: any;
}

// type componentMessage_i = "text" | "image" | "multiple_image";
type componentMessage_i = string;

export interface messageInterface_i {
  compType: componentMessage_i;
  text: string;
  fileUrl: Array<string>
}

export type componentFile_i = ""|"profile"|"image"|"multiple_image";

export interface fileInterface_i{
  fileType:componentFile_i
  fileData: Array<any>
}

export interface notificationInterface_i{
  setOpen:any,
  data:Array<any>
  setData:any
}

export interface iconNavInterface_i{
  setNotificationOpen:any
  notificationCount:number
  setThemeOpen:any
}
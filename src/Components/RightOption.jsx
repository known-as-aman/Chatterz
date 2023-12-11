import React, { useContext, useMemo, useState } from "react";
import ProContext from "../context/mainContext";

const RightOption = (props) => {
  const context = useContext(ProContext);

  const [colorTheme, setColorTheme] = useState(context.currentTheme);

  useMemo(() => {
    setColorTheme(context.currentTheme);
  }, [context.currentTheme]);

  return (
    <ul className="p-1.5 z-[100] relative">
      <li
        className={`list-none px-2 py-1 cursor-pointer ${colorTheme.rightOptionHover} rounded-md whitespace-nowrap text-slate-50`}
        onClick={() => {
          props.setReplyStatus(true);
          props.setContextMenuStatus(false);
          props.replyInitialHandler(props.data);
        }}
      >
        Reply
      </li>
      <li
        className={`list-none px-2 py-1 cursor-pointer ${colorTheme.rightOptionHover} rounded-md whitespace-nowrap text-slate-50`}
        onClick={() => {
          navigator.clipboard.writeText(props.data.msgText);
          props.setContextMenuStatus(false);
        }}
      >
        Copy
      </li>
      <li
        className={`list-none px-2 py-1 cursor-pointer ${colorTheme.rightOptionHover} rounded-md whitespace-nowrap text-slate-50`}
        onClick={() => {
          props.setDeleteMsg(true);
          props.setContextMenuStatus(false);
          props.setDeleteMsgId(props.data._id);
        }}
      >
        Delete
      </li>
      <li
        className={`list-none px-2 py-1 cursor-pointer ${colorTheme.rightOptionHover} rounded-md whitespace-nowrap text-slate-50`}
        onClick={() => {
          props.setContextMenuStatus(false);
          props.setDeleteMultipleMsgStatus(true);
        }}
      >
        Delete Multiple
      </li>
      <li
        className={`list-none px-2 py-1 cursor-pointer ${colorTheme.rightOptionHover} rounded-md whitespace-nowrap text-slate-50`}
        onClick={() => {
          props.setSimpleModalDetailMsg(true);
          props.setMsgDetailValue(props.data);
          props.setContextMenuStatus(false);
        }}
      >
        Details
      </li>
    </ul>
  );
};

export default RightOption;

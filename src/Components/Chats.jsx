import { useState, useMemo, useContext } from "react";
import RightOption from "./RightOption";

import ProContext from "../context/mainContext";

import { BiChevronDown } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { ImReply } from "react-icons/im";

const Chats = (props) => {
  const context = useContext(ProContext);
  const [contextMenuStatus, setContextMenuStatus] = useState(false);

  const [colorTheme, setColorTheme] = useState(context.currentTheme);

  useMemo(() => {
    setColorTheme(context.currentTheme);
  }, [context.currentTheme]);

  const selectType = () => {
    if (props.data.msgSent === false) {
      return "failedMessage";
    } else if (
      props.data.fileStatus === true &&
      props.data.msgReplied === true
    ) {
      return "fileMessageReplied";
    } else if (
      props.data.fileStatus === true &&
      props.data.msgReplied === false
    ) {
      return "fileMessage";
    } else if (props.data.msgReplied === true) {
      return "repliedMessage";
    } else {
      return "message";
    }
  };

  const selectSide = (type) => {
    switch (type) {
      case "message": {
        return (
          <span
            className={`relative max-w-[75%] px-2 py-1 rounded-md my-2 z-10 flex items-center ${
              props.side === "left"
                ? `mr-auto ${colorTheme.leftChatBackground} ${colorTheme.leftChatText}`
                : `ml-auto ${colorTheme.rightChatBackground} ${colorTheme.rightChatText}`
            }`}
          >
            {contextMenuStatus && (
              <div
                className={`absolute z-[100] ${colorTheme.main} rounded-md bottom-full ${
                  props.side === "left" ? "left-full" : "right-full"
                }`}
              >
                <RightOption
                  data={props.data}
                  setDeleteMsgId={props.setDeleteMsgId}
                  replyInitialHandler={props.replyInitialHandler}
                  setContextMenuStatus={setContextMenuStatus}
                  setDeleteMsg={props.setDeleteMsg}
                  deleteMsg={props.deleteMsg}
                  setReplyStatus={props.setReplyStatus}
                  setMsgDetailValue={props.setMsgDetailValue}
                  setSimpleModalDetailMsg={props.setSimpleModalDetailMsg}
                  setDeleteMultipleMsgStatus={props.setDeleteMultipleMsgStatus}
                />
              </div>
            )}

            {props.data.msgSent === false && (
              <AiOutlineExclamationCircle
                className="mr-1 cursor-pointer text-red-600"
                onClick={() => setContextMenuStatus(true)}
              />
            )}
            {props.data.msgText}
            <div className="w-5 h-full flex justify-center items-center">
              {props.deleteMultipleMsgStatus === true ? (
                <input
                  type="checkbox"
                  className="cursor-pointer ml-0.5"
                  onChange={(e) => {
                    e.target.checked === true
                      ? props.setDeleteMsgIdArray([
                          ...props.deleteMsgIdArray,
                          props.data._id,
                        ])
                      : props.setDeleteMsgIdArray(
                          props.deleteMsgIdArray.filter(
                            (elem) => elem !== props.data._id
                          )
                        );
                  }}
                />
              ) : contextMenuStatus === false ? (
                <BiChevronDown
                  className="ml-1 cursor-pointer"
                  onClick={() => setContextMenuStatus(true)}
                />
              ) : (
                <RxCross1
                  className="ml-1 cursor-pointer text-xs"
                  onClick={() => setContextMenuStatus(false)}
                />
              )}
            </div>
          </span>
        );
      }
      case "repliedMessage": {
        return (
          <div
            className={`my-2 rounded-xl max-w-[75%] flex flex-col items-end ${
              props.side === "left"
                ? `mr-auto ${colorTheme.leftChatBackground} ${colorTheme.leftChatText}`
                : `ml-auto ${colorTheme.rightChatBackground} ${colorTheme.rightChatText}`
            }`}
          >
            <div
              className={`${
                props.side === "left"
                  ? `${context.leftChatBackground} ${context.border}`
                  : `${context.text} border-gray-400`
              } border-t  relative flex py-2 flex-col w-full rounded-t-xl`}
            >
              <div className="absolute right-4 flex justify-between rounded-t-lg">
                <ImReply className="text-[20px] cursor-pointer" />
              </div>

              <div className="flex flex-col py-2 pl-2 pr-2">
                <div className="w-full">
                  <i className="font-medium">
                    {props.data.msgRepliedInfo.id !== null
                      ? props.data.msgRepliedInfo.messageBody
                      : ""}
                  </i>
                </div>
                <div className="w-full">
                  <span
                    className={`text-[12px] font-medium ${
                      props.side === "left" ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {props.data.msgRepliedInfo.senderId
                      ? props.data.msgRepliedInfo.senderId + ", "
                      : ""}
                    {props.data.msgRepliedInfo.messageSendingTime
                      ? props.data.msgRepliedInfo.messageSendingTime.split(
                          "T"
                        )[0]
                      : props.data.msgRepliedInfo.messageSendingTime.split(
                          "T"
                        )[0]}
                  </span>
                </div>
              </div>
            </div>

            <div
              className={`${
                props.side === "left"
                  ? `${context.leftChatBackground}`
                  : `${context.rightChatBackground}`
              } w-full h-[1px] flex justify-center`}
            >
              <span className="block w-[95%] h-full bg-gray-400 z-10"></span>
            </div>

            <span
              className={`relative w-full pl-3 pr-2 pt-1 pb-2 rounded-b-md z-10 flex items-center justify-start ${
                props.side === "left"
                  ? `${context.leftChatBackground}`
                  : `${context.rightChatBackground}`
              }`}
            >
              {contextMenuStatus && (
                <div
                  className={`absolute z-[100] rounded-md bottom-full ${
                    props.side === "left" ? "left-full" : "right-full"
                  }`}
                >
                  <RightOption
                    data={props.data}
                    setDeleteMsgId={props.setDeleteMsgId}
                    replyInitialHandler={props.replyInitialHandler}
                    setContextMenuStatus={setContextMenuStatus}
                    setDeleteMsg={props.setDeleteMsg}
                    deleteMsg={props.deleteMsg}
                    setReplyStatus={props.setReplyStatus}
                    setMsgDetailValue={props.setMsgDetailValue}
                    setSimpleModalDetailMsg={props.setSimpleModalDetailMsg}
                    setDeleteMultipleMsgStatus={
                      props.setDeleteMultipleMsgStatus
                    }
                  />
                </div>
              )}
              {props.data.msgText}
              <div className="w-5 h-full flex justify-center items-center">
                {props.deleteMultipleMsgStatus === true ? (
                  <input
                    type="checkbox"
                    className="cursor-pointer ml-0.5"
                    onChange={(e) => {
                      e.target.checked === true
                        ? props.setDeleteMsgIdArray([
                            ...props.deleteMsgIdArray,
                            props.data._id,
                          ])
                        : props.setDeleteMsgIdArray(
                            props.deleteMsgIdArray.filter(
                              (elem) => elem !== props.data._id
                            )
                          );
                    }}
                  />
                ) : contextMenuStatus === false ? (
                  <BiChevronDown
                    className="ml-1 cursor-pointer"
                    onClick={() => setContextMenuStatus(true)}
                  />
                ) : (
                  <RxCross1
                    className="ml-1 cursor-pointer text-xs"
                    onClick={() => setContextMenuStatus(false)}
                  />
                )}
              </div>
            </span>
          </div>
        );
      }
      case "failedMessage": {
        return (
          <span
            className={`relative max-w-[75%] px-2 py-1 rounded-md my-2 z-10 flex items-center ${
              props.side === "left"
                ? `mr-auto ${colorTheme.leftChatBackground} ${colorTheme.leftChatText}`
                : `ml-auto ${colorTheme.rightChatBackground} ${colorTheme.rightChatText}`
            }`}
          >
            {contextMenuStatus && (
              <div
                className={`absolute z-[100] ${colorTheme.main} rounded-md bottom-full ${
                  props.side === "left" ? "left-full" : "right-full"
                }`}
              >
                <RightOption
                  data={props.data}
                  setDeleteMsgId={props.setDeleteMsgId}
                  replyInitialHandler={props.replyInitialHandler}
                  setContextMenuStatus={setContextMenuStatus}
                  setDeleteMsg={props.setDeleteMsg}
                  deleteMsg={props.deleteMsg}
                  setReplyStatus={props.setReplyStatus}
                  setMsgDetailValue={props.setMsgDetailValue}
                  setSimpleModalDetailMsg={props.setSimpleModalDetailMsg}
                  setDeleteMultipleMsgStatus={props.setDeleteMultipleMsgStatus}
                />
              </div>
            )}

            {props.data.msgSent === false && (
              <AiOutlineExclamationCircle
                className="mr-1 cursor-pointer text-red-600"
                onClick={() => setContextMenuStatus(true)}
              />
            )}
            {props.data.msgText}
            <div className="w-5">
              {contextMenuStatus === false ? (
                <BiChevronDown
                  className="ml-1 cursor-pointer"
                  onClick={() => setContextMenuStatus(true)}
                />
              ) : (
                <RxCross1
                  className="ml-1 cursor-pointer text-xs"
                  onClick={() => setContextMenuStatus(false)}
                />
              )}
            </div>
          </span>
        );
      }
      case "fileMessageReplied": {
        return (
          <div
            className={`my-2 rounded-xl max-w-[75%] flex flex-col items-end ${
              props.side === "left"
                ? `mr-auto ${colorTheme.leftChatBackground} ${colorTheme.leftChatText}`
                : `ml-auto ${colorTheme.rightChatBackground} ${colorTheme.rightChatText}`
            }`}
          >
            <div
              className={`${
                props.side === "left"
                  ? `${context.leftChatBackground} ${context.border}`
                  : `${context.text} border-gray-400`
              } border-t  relative flex py-2 flex-col w-full rounded-t-xl`}
            >
              <div className="absolute right-4 flex justify-between rounded-t-lg">
                <ImReply className="text-[20px] cursor-pointer" />
              </div>

              <div className="flex flex-col py-2 pl-2 pr-2">
                <div className="w-full">
                  <i className="font-medium">
                    {props.data.msgRepliedInfo.id !== null
                      ? props.data.msgRepliedInfo.messageBody
                      : ""}
                  </i>
                </div>
                <div className="w-full">
                  <span
                    className={`text-[12px] font-medium ${
                      props.side === "left" ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {props.data.msgRepliedInfo.senderId
                      ? props.data.msgRepliedInfo.senderId + ", "
                      : ""}
                    {props.data.msgRepliedInfo.messageSendingTime
                      ? props.data.msgRepliedInfo.messageSendingTime.split(
                          "T"
                        )[0]
                      : props.data.msgRepliedInfo.messageSendingTime.split(
                          "T"
                        )[0]}
                  </span>
                </div>
              </div>
            </div>

            <div
              className={`${
                props.side === "left"
                  ? `${context.leftChatBackground}`
                  : `${context.rightChatBackground}`
              } w-full h-[1px] flex justify-center`}
            >
              <span className="block w-[95%] h-full bg-gray-400 z-10"></span>
            </div>
            <span
              className={`relative w-full px-2 py-1 rounded-b-md z-10 flex flex-col items-start ${
                props.side === "left"
                  ? `mr-auto ${colorTheme.leftChatBackground} ${colorTheme.leftChatText}`
                  : `ml-auto ${colorTheme.rightChatBackground} ${colorTheme.rightChatText}`
              }`}
            >
              {contextMenuStatus && (
                <div
                  className={`absolute z-[100] bg-[#182952] rounded-md bottom-full ${
                    props.side === "left" ? "left-full" : "right-full"
                  }`}
                >
                  <RightOption
                    data={props.data}
                    setDeleteMsgId={props.setDeleteMsgId}
                    replyInitialHandler={props.replyInitialHandler}
                    setContextMenuStatus={setContextMenuStatus}
                    setDeleteMsg={props.setDeleteMsg}
                    deleteMsg={props.deleteMsg}
                    setReplyStatus={props.setReplyStatus}
                    setMsgDetailValue={props.setMsgDetailValue}
                    setSimpleModalDetailMsg={props.setSimpleModalDetailMsg}
                    setDeleteMultipleMsgStatus={
                      props.setDeleteMultipleMsgStatus
                    }
                  />
                </div>
              )}

              {props.data.msgSent === false && (
                <AiOutlineExclamationCircle
                  className="mr-1 cursor-pointer text-red-600"
                  onClick={() => setContextMenuStatus(true)}
                />
              )}

              {props.loginToken !== "" && (
                <img
                  src={`${props.data.fileUrl}?key=${props.loginToken}`}
                  alt="No Preview"
                  className="w-40 h-32 cursor-pointer"
                  onClick={() => {
                    props.setChatImageModalStatus(true);
                    props.setChatFullImageSrc(
                      `${props.data.fileUrl}?key=${props.loginToken}`
                    );
                  }}
                />
              )}

              <div className="flex w-full justify-between items-center pt-1">
                {props.data.msgText}

                <div className="w-5 h-full flex justify-start items-center">
                  {props.deleteMultipleMsgStatus === true ? (
                    <input
                      type="checkbox"
                      className="cursor-pointer ml-0.5"
                      onChange={(e) => {
                        e.target.checked === true
                          ? props.setDeleteMsgIdArray([
                              ...props.deleteMsgIdArray,
                              props.data._id,
                            ])
                          : props.setDeleteMsgIdArray(
                              props.deleteMsgIdArray.filter(
                                (elem) => elem !== props.data._id
                              )
                            );
                      }}
                    />
                  ) : contextMenuStatus === false ? (
                    <BiChevronDown
                      className="cursor-pointer"
                      onClick={() => setContextMenuStatus(true)}
                    />
                  ) : (
                    <RxCross1
                      className="cursor-pointer w-3"
                      onClick={() => setContextMenuStatus(false)}
                    />
                  )}
                </div>
              </div>
            </span>
          </div>
        );
      }
      case "fileMessage": {
        return (
          <span
            className={`relative max-w-[75%] px-2 py-1 rounded-md my-2 z-10 flex flex-col items-start ${
              props.side === "left"
                ? `mr-auto ${colorTheme.leftChatBackground} ${colorTheme.leftChatText}`
                : `ml-auto ${colorTheme.rightChatBackground} ${colorTheme.rightChatText}`
            }`}
          >
            {contextMenuStatus && (
              <div
                className={`absolute z-[100] ${colorTheme.main} rounded-md bottom-full ${
                  props.side === "left" ? "left-full" : "right-full"
                }`}
              >
                <RightOption
                  data={props.data}
                  setDeleteMsgId={props.setDeleteMsgId}
                  replyInitialHandler={props.replyInitialHandler}
                  setContextMenuStatus={setContextMenuStatus}
                  setDeleteMsg={props.setDeleteMsg}
                  deleteMsg={props.deleteMsg}
                  setReplyStatus={props.setReplyStatus}
                  setMsgDetailValue={props.setMsgDetailValue}
                  setSimpleModalDetailMsg={props.setSimpleModalDetailMsg}
                  setDeleteMultipleMsgStatus={props.setDeleteMultipleMsgStatus}
                />
              </div>
            )}

            {props.data.msgSent === false && (
              <AiOutlineExclamationCircle
                className="mr-1 cursor-pointer text-red-600"
                onClick={() => setContextMenuStatus(true)}
              />
            )}

            {props.loginToken !== "" && (
              <img
                src={`${props.data.fileUrl}?key=${props.loginToken}`}
                alt="No Preview"
                className="w-40 h-32 cursor-pointer"
                onClick={() => {
                  props.setChatImageModalStatus(true);
                  props.setChatFullImageSrc(
                    `${props.data.fileUrl}?key=${props.loginToken}`
                  );
                }}
              />
            )}

            <div className="flex w-full justify-between items-center pt-1">
              {props.data.msgText}

              <div className="w-5 h-full flex justify-start items-center">
                {props.deleteMultipleMsgStatus === true ? (
                  <input
                    type="checkbox"
                    className="cursor-pointer ml-0.5"
                    onChange={(e) => {
                      e.target.checked === true
                        ? props.setDeleteMsgIdArray([
                            ...props.deleteMsgIdArray,
                            props.data._id,
                          ])
                        : props.setDeleteMsgIdArray(
                            props.deleteMsgIdArray.filter(
                              (elem) => elem !== props.data._id
                            )
                          );
                    }}
                  />
                ) : contextMenuStatus === false ? (
                  <BiChevronDown
                    className="cursor-pointer"
                    onClick={() => setContextMenuStatus(true)}
                  />
                ) : (
                  <RxCross1
                    className="cursor-pointer w-3"
                    onClick={() => setContextMenuStatus(false)}
                  />
                )}
              </div>
            </div>
          </span>
        );
      }
      default: {
        <></>;
        break;
      }
    }
  };

  return selectSide(selectType());
};

export default Chats;

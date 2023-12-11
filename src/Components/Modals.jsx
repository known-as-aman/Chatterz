import React, { useContext, useMemo, useState } from "react";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { RiCheckDoubleLine } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import ProContext from "../context/mainContext";

const Modals = (props) => {
  const cancelButtonRef = useRef(null);

  const context = useContext(ProContext);

  const [colorTheme, setColorTheme] = useState(context.currentTheme);

  useMemo(() => {
    setColorTheme(context.currentTheme);
  }, [context.currentTheme]);

  const getMsgDetailStyle = (dateTime) =>{
    
    let rawDate = new Date(dateTime);

    return `${rawDate.getDate() < 10 ? "0" : ""}${rawDate.getDate()}/${rawDate.getMonth()+1 < 10 ? "0" : ""}${rawDate.getMonth()+1}/${rawDate.getFullYear()} at ${rawDate.getHours() < 10 ? "0" : ""}${rawDate.getHours()}:${rawDate.getMinutes() < 10 ? "0" : ""}${rawDate.getMinutes()}`;
  }

  const selectModal = (type) => {
    switch (type) {
      case "deleteChat": {
        return (
          <Transition.Root show={props.open} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-50"
              initialFocus={cancelButtonRef}
              onClose={props.setOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                          <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                            <ExclamationTriangleIcon
                              className="h-6 w-6 text-red-600"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <Dialog.Title
                              as="h3"
                              className="text-base font-semibold leading-6 text-gray-900"
                            >
                              Delete Chat
                            </Dialog.Title>
                            <div className="mt-2">
                              <p className="text-sm text-gray-500">
                                Are you sure to delete the chat of{" "}
                                <strong>{props.data.username}</strong> ?
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 flex flex-col sm:flex-row-reverse sm:px-6">
                        <button
                          type="button"
                          className="inline-flex w-full justify-center rounded-md border border-red-600 px-3 py-2 text-sm font-semibold text-red-600 shadow-sm hover:bg-red-200 sm:ml-3 sm:w-auto outline-none"
                          onClick={() => props.setOpen(false)}
                        >
                          Delete
                        </button>
                        <button
                          type="button"
                          className="sm:mt-0 mt-2 inline-flex w-full justify-center rounded-md border border-red-600 bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto outline-none"
                          onClick={() => props.setOpen(false)}
                        >
                          Close
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
        );
      }

      case "blockChat": {
        return (
          <Transition.Root show={props.open} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-50"
              initialFocus={cancelButtonRef}
              onClose={props.setOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                          <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                            <ExclamationTriangleIcon
                              className="h-6 w-6 text-red-600"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <Dialog.Title
                              as="h3"
                              className="text-base font-semibold leading-6 text-gray-900"
                            >
                              Block Chat
                            </Dialog.Title>
                            <div className="mt-2">
                              <p className="text-sm text-gray-500">
                                Are you sure want to block{" "}
                                <strong className="lowercase">
                                  {props.data.username}
                                </strong>{" "}
                                ?
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 flex flex-col sm:flex-row-reverse sm:px-6">
                        <button
                          type="button"
                          className="inline-flex w-full justify-center rounded-md border border-red-600 px-3 py-2 text-sm font-semibold text-red-600 shadow-sm hover:bg-red-200 sm:ml-3 sm:w-auto outline-none capitalize"
                          onClick={() => {
                            props.setOpen(false);
                            props.blockRelated(props.data.email);
                          }}
                        >
                          {props.blockText}
                        </button>
                        <button
                          type="button"
                          className="sm:mt-0 mt-2 inline-flex w-full justify-center rounded-md border border-red-600 bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto outline-none"
                          onClick={() => props.setOpen(false)}
                        >
                          Close
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
        );
      }

      case "deleteMessage": {
        return (
          <Transition.Root show={props.open} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-50"
              initialFocus={cancelButtonRef}
              onClose={props.setOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                          <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                            <ExclamationTriangleIcon
                              className="h-6 w-6 text-red-600"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <Dialog.Title
                              as="h3"
                              className="text-base font-semibold leading-6 text-gray-900"
                            >
                              Delete Message
                            </Dialog.Title>
                            <div className="mt-2">
                              <p className="text-sm text-gray-500">
                                {props.deleteMultipleMsgStatus === true ? "Do you want to delete these messages ?" : "Do you want to delete this message ?"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 flex sm:flex-row flex-col-reverse justify-between sm:px-6">
                        <button
                          type="button"
                          className="inline-flex w-full justify-center rounded-md border border-red-600 bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto outline-none mt-2 sm:mt-0"
                          onClick={() => {
                            props.setOpen(false);
                            props.setDeleteMsgId("");
                          }}
                        >
                          Close
                        </button>
                        <div className="sm:flex sm:mt-0 mt-2">
                          <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border border-red-600 px-3 py-2 text-sm font-semibold text-red-600 shadow-sm hover:bg-red-200 sm:ml-3 sm:w-auto outline-none"
                            onClick={() => {
                              props.setOpen(false);
                              props.deleteMultipleMsgStatus === true ? props.removeMultileMsgs() : props.confirmRemoveMessage();
                            }}
                          >
                            {props.deleteMultipleMsgStatus === true ? "Remove Messages" : "Remove Message"}
                          </button>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
        );
      }

      case "messageDetail": {
        return (
          <Transition.Root show={props.open} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-50"
              initialFocus={cancelButtonRef}
              onClose={props.setOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full max-w-lg">
                    
                      <div className="bg-slate-50 p-2 flex flex-col relative">
                        <span className="p-3 cursor-pointer hover:bg-gray-200 rounded-lg absolute top-0 right-0" onClick={()=>{props.setOpen(false)}}> <RxCross1 className="text-[28px]" /> </span>
                        <div className="w-full p-2 text-xl font-semibold">
                          Message details
                        </div>
                        <div className="flex flex-col border-t border-t-gray-900 p-2 px-2">

                          <div className={`w-full p-2 rounded-lg flex items-center ${colorTheme.background} ${
                                props.myDetail.email === props.msgData.senderUserId
                                  ? "justify-end"
                                  : "justify-start"
                              }`}>

                            <span
                              className={`px-2 py-1 rounded-md my-2 z-10 flex items-center ${
                                props.myDetail.email === props.msgData.senderUserId
                                  ? `${colorTheme.leftChatBackground} ${colorTheme.leftChatText}`
                                  : `${colorTheme.rightChatBackground} ${colorTheme.rightChatText}`
                              }`}
                            >
                              {props.msgData.msgSent === false && (
                                <AiOutlineExclamationCircle
                                  className="mr-1 cursor-pointer text-red-600"
                                />
                              )}
                              {props.msgData.msgText}
                             
                            </span>

                          </div>

                          <div className="flex flex-col border-t-gray-900 mt-3">
                              {/* <div className="w-full flex flex-col border border-t-gray-500 border-x-gray-500">
                                <div className="w-full h-[50%] px-2 py-1 font-medium text-[18px] flex items-center"> <RiCheckDoubleLine className="mr-2" /> Hello </div>
                                <div className="w-full h-[50%] px-2 py-1 text-gray-600"> Time </div>
                              </div> */}
                              <div className="w-full flex flex-col ">
                                <div className="w-full h-[50%] px-2 py-1 font-medium text-[18px] flex items-center"> 
                                
                                {props.msgData.msgSent === true ? <RiCheckDoubleLine className="mr-2 text-[26px] text-emerald-600" /> : <AiOutlineExclamationCircle className="mr-2 text-[26px] text-red-600" />}
                                 {props.msgData.msgSent === true ? "Sent" : "Failed"} 

                                </div>
                                {/* <div className="w-full h-[50%] px-2 text-sm text-gray-600"> 28/04/2023 at 18:40 </div> */}
                                <div className="w-full h-[50%] px-2 text-sm text-gray-600"> {getMsgDetailStyle(props.msgData.sendingTime) } </div>
                              </div>
                          </div>

                        </div>
                      </div>

                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
        );
      }

      default:
        return <></>;
    }
  };

  return selectModal(props.type);
};

export default Modals;

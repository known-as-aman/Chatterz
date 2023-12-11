import React, { useState, useContext, useMemo } from "react";
import ProContext from "../context/mainContext";

import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoMdColorPalette } from "react-icons/io";

const ThemePage = (props) => {
  const context = useContext(ProContext);
  const cancelButtonRef = useRef(null);

  const [colorTheme, setColorTheme] = useState(context.currentTheme);

  // console.log(context, " <== CONTEXT");

  // <span className="w-12 h-12 mr-2 mt-2 rounded-full bg-emerald-500"></span>
  // <span className="w-12 h-12 mr-2 mt-2 rounded-full bg-blue-500"></span>
  // <span className="w-12 h-12 mr-2 mt-2 rounded-full bg-red-500"></span>
  // <span className="w-12 h-12 mr-2 mt-2 rounded-full bg-yellow-500"></span>
  // <span className="w-12 h-12 mr-2 mt-2 rounded-full bg-purple-500"></span>
  // <span className="w-12 h-12 mr-2 mt-2 rounded-full bg-gray-500"></span>
  // <span className="w-12 h-12 mr-2 mt-2 rounded-full bg-pink-500"></span>
  // <span className="w-12 h-12 mr-2 mt-2 rounded-full bg-green-500"></span>
  // <span className="w-12 h-12 mr-2 mt-2 rounded-full bg-indigo-500"></span>
  // <span className="w-12 h-12 mr-2 mt-2 rounded-full bg-orange-500"></span>
  // <span className="w-12 h-12 mr-2 mt-2 rounded-full bg-teal-500"></span>

  useMemo(() => {setColorTheme(context.currentTheme)}, [context.currentTheme]);

  const colorGroup = [
    {
      class: "bg-blue-500",
      hoverClass: "hover:bg-blue-600",
      borderClass: "border-blue-800",
      onClickValue: "blue",
    },
    {
      class: "bg-emerald-500",
      hoverClass: "hover:bg-emerald-600",
      borderClass: "border-emerald-800",
      onClickValue: "green",
    },
    {
      class: "bg-red-500",
      hoverClass : "hover:bg-red-600",
      borderClass : "border-red-800",
      onClickValue: "red",
    },
    {
      class: "bg-purple-500",
      hoverClass: "hover:bg-purple-600",
      borderClass : "border-purple-800",
      onClickValue: "purple",
    },
  ];

  return (
    <section>
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
                      {/* <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <IoMdColorPalette className="w-9 h-9 text-red-600" />
                      </div> */}
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                        <div className="flex items-center">
                          <IoMdColorPalette className="w-9 h-9 text-red-600" />
                          <Dialog.Title
                            as="h3"
                            className="ml-2 text-xl font-semibold leading-6 text-gray-900"
                          >
                            Theme
                          </Dialog.Title>
                        </div>
                        <div className="mt-4 w-full flex flex-col">
                          <p className="font-semibold">Preview</p>
                          <div
                            className={`flex flex-col border border-gray-400 rounded-lg p-2 mt-1 ${colorTheme.background}`}
                          >
                            <span
                              className={`px-2 py-1 my-1 rounded-md mr-auto ${colorTheme.leftChatBackground} ${colorTheme.leftChatText}`}
                            >
                              Hey...!
                            </span>
                            <span
                              className={`px-2 py-1 my-1 rounded-md mr-auto ${colorTheme.leftChatBackground} ${colorTheme.leftChatText}`}
                            >
                              This is the colour preview
                            </span>
                            <span
                              className={`px-2 py-1 my-1 rounded-md ml-auto ${colorTheme.rightChatBackground} ${colorTheme.rightChatText}`}
                            >
                              Do you like this colour ?
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col mt-4">
                          <p className="font-semibold">Colour</p>
                          <div className="flex flex-wrap mt-1">
                            {colorGroup?.map((item,index) => (
                              <span key={index} className={`w-12 h-12 mr-2 mt-2 cursor-pointer rounded-full border ${item.borderClass} ${item.hoverClass} ${item.class}`} onClick={()=>{
                                context.themeSelector(item.onClickValue)
                              }}></span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 flex sm:flex-row flex-col-reverse justify-end sm:px-6">
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
                    {/* <div className="sm:flex sm:mt-0 mt-2">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border border-red-600 px-3 py-2 text-sm font-semibold text-red-600 shadow-sm hover:bg-red-200 sm:ml-3 sm:w-auto outline-none"
                        onClick={() => {
                          props.setOpen(false);
                          props.deleteMultipleMsgStatus === true
                            ? props.removeMultileMsgs()
                            : props.confirmRemoveMessage();
                        }}
                      >
                        Save
                      </button>
                    </div> */}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </section>
  );
};

export default ThemePage;

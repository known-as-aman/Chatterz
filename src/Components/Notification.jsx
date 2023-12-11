import { useContext, useMemo, useState } from "react";
import ProContext from "../context/mainContext";

const Notification = (props) => {
  const [replying, setReplying] = useState(false);
  const [replyFromNotification, setReplyFromNotification] = useState("");

  const context = useContext(ProContext);

  const [colorTheme, setColorTheme] = useState(context.currentTheme);

  useMemo(() => {
    setColorTheme(context.currentTheme);
  }, [context.currentTheme]);

  const selectCategory = (category) => {
    switch (category) {
      case "message": {
        return (
          <div
            className={`flex w-full z-50 bg-slate-50 p-4 rounded-lg transition-all duration-500 ease-in-out`}
          >
            <div className="ml-3 text-sm font-normal w-full">
              <span className="mb-1 text-base flex items-center font-semibold text-gray-900">
                {props.name}
                <div
                  className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-100 rounded-lg ml-2 ${colorTheme.rightChatText}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
              </span>
              <div className="my-2 text-sm font-normal">
                {props.shortMessage ? props.shortMessage : ""}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="mt-1">
                  <span
                    className={`inline-flex justify-center w-full px-2 text-xs font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 py-3 cursor-pointer ${colorTheme.iconHover} ${colorTheme.main}`}
                    onClick={() => {
                      props.goToChatHandler(props.email);
                    }}
                  >
                    Go to chat
                  </span>
                </div>
                <div className="mt-1">
                  <span
                    className="inline-flex justify-center w-full px-2 py-3 text-xs font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 cursor-pointer"
                    onClick={() => {
                      replying === true
                        ? setReplying(false)
                        : setReplying(true);
                    }}
                  >
                    {replying === true ? "Cancel" : "Reply"}
                  </span>
                </div>
              </div>
              {replying === true && (
                <div className="mt-2 flex items-center">
                  <input
                    type="text"
                    className="border border-gray-300 w-full rounded-md py-1.5 px-2 outline-none"
                    value={replyFromNotification}
                    onChange={(e) => {
                      setReplyFromNotification(e.target.value);
                    }}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`w-12 h-8 ml-1 rounded-md cursor-pointer ${colorTheme.rightChatText}`}
                    onClick={() => {
                      props.sendMsgFromNotification(
                        props.email,
                        replyFromNotification,
                        props.index
                      );
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                </div>
              )}
            </div>
            <button
              type="button"
              className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8"
              data-dismiss-target="#toast-interactive"
              aria-label="Close"
              onClick={() => {
                props.removeNotification(props.index);
              }}
            >
              <span className="sr-only">Close</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        );
      }
      default: {
        <></>;
        break;
      }
    }
  };

  return selectCategory(props.category, props.text);
};

export default Notification;

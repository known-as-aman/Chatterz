import React from "react";
import { notificationInterface_i } from "../interface/component_select";
import Notification from "./Notification";
import SvgIcon from "./Icons/svgIcons";

const NotificationBox: React.FC<notificationInterface_i> = ({
  setOpen,
  data,
  setData,
}) => {
  return (
    <div className="bg-transparent w-full h-full relative flex flex-col bg-gray-400">
      {/* {props.notificationBarStatus && (
        <span
          className="absolute -left-20 top-4 cursor-pointer transition-all duration-300 ease-in-out z-50"
          onClick={() => {
            // props.setNotificationBarStatus(false);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-16 h-16 text-slate-50"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      )} */}
      <div className="flex items-center justify-between my-4">
        <h4 className="text-2xl font-semibold px-2 text-white">
          Notifications & Alerts
        </h4>
        <button
          type="button"
          className="text-white hover:bg-gray-800 p-2 rounded-lg transition-all duration-300 ease-in-out"
          onClick={() => {
            setOpen(false);
          }}
        >
          <SvgIcon name="cross" classes="w-8 h-8" />
        </button>
      </div>
      <div className="flex flex-col items-center gap-2 w-full h-full px-2 pb-4 mt-4 overflow-y-auto">
        {data?.map((item) => (
          <div
            className="w-full bg-white flex flex-col justify-center rounded-md px-2 py-1 transition-all duration-500 ease-in-out"
            key={item.id}
          >
            <div className="flex justify-between">
              <div className="font-semibold">{item.name}</div>
              <button
                type="button"
                className="text-black"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  setData(data.filter((elem) => elem.id !== item.id));
                }}
              >
                <SvgIcon name="cross" classes="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm w-11/12">{item.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationBox;

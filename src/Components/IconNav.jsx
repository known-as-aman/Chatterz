import { useContext, useMemo, useState } from "react";
import { CiLogout } from "react-icons/ci";
import { AiOutlineUserAdd } from "react-icons/ai";
import { IoMdColorPalette } from "react-icons/io";
import { Link } from "react-router-dom";
import ProContext from "../context/mainContext";

const Iconnav = (props) => {

  const context: any = useContext(ProContext);

  const [colorTheme, setColorTheme] = useState(context.currentTheme);

  useMemo(() => {
    setColorTheme(context.currentTheme);
  }, [context.currentTheme]);

  return (
    <div className="h-screen flex items-center z-50">
      <ul
        className={`h-[95%] flex flex-col justify-evenly py-2 px-2 rounded-2xl backdrop-blur-md ${colorTheme.main}`}
      >
        <li className={`p-2 rounded-lg ${colorTheme.iconHover}`}>
          <div
            className="text-[35px] text-white cursor-pointer relative"
            onClick={() => {
              props.setNotificationBarStatus(true);
            }}
          >
            {props.notificationCount > 0 && (
              <span className="text-[12px] font-semibold w-6 h-6 bg-blue-500 rounded-full flex justify-center items-center absolute -top-2 -right-2 transition-all duration-300 ease-in-out">
                {props.notificationCount}
              </span>
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-9 h-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </div>
        </li>
        <li className={`p-2 rounded-lg ${colorTheme.iconHover}`}>
          <div
            className="text-[35px] text-white cursor-pointer relative"
            onClick={() => {
              props.setFindFriendScreenStatus(true);
            }}
          >
            {props.notificationCount > 0 && (
              <span className="text-[12px] font-semibold w-6 h-6 bg-blue-500 rounded-full flex justify-center items-center absolute -top-2 -right-2 transition-all duration-300 ease-in-out">
                {props.notificationCount}
              </span>
            )}
            <AiOutlineUserAdd />
          </div>
        </li>
        <li className={`p-2 rounded-lg ${colorTheme.iconHover}`}>
          <div
            onClick={() => {
              props.setModalOpen(true);
            }}
            className="text-[35px] text-white cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          </div>
          {/* </a> */}
        </li>
        <li className={`p-2 rounded-lg ${colorTheme.iconHover}`}>
          <span
            className="text-[35px] text-white cursor-pointer"
            onClick={() => {
              window.innerWidth >= 1024
                ? props.setChatList(true)
                : props.chatList === true
                ? props.setChatList(false)
                : props.setChatList(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
              />
            </svg>
          </span>
        </li>
        <li className={`p-2 rounded-lg ${colorTheme.iconHover}`}>
          <div
            onClick={() => {
              props.setThemePageModalStatus(true);
            }}
            className="text-[35px] text-white cursor-pointer"
          >
            <IoMdColorPalette className="w-9 h-9" />
          </div>
        </li>
        <li className={`p-2 rounded-lg ${colorTheme.iconHover}`}>
          <Link
            to={"/auth"}
            onClick={() => localStorage.clear()}
            className="text-[35px] text-white hover:bg-[#5148ce]"
          >
            <CiLogout />
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Iconnav;

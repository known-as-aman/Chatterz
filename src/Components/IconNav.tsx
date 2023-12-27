import { useContext, useMemo, useState } from "react";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { AiOutlineUserAdd } from "react-icons/ai";
import { IoMdColorPalette } from "react-icons/io";
import { Link } from "react-router-dom";
import ProContext from "../context/mainContext";
import { iconNavInterface_i } from "../interface/component_select";
import SvgIcon from "./Icons/svgIcons";

const Iconnav: React.FC<iconNavInterface_i> = ({
  setNotificationOpen,
  notificationCount,
  setThemeOpen
}) => {
  const { theme }: any = useContext(ProContext);
  const navigate: NavigateFunction = useNavigate();

  return (
    <div
      className="h-full justify-center flex items-center z-50"
      style={{
        backgroundColor: theme.primary,
      }}
    >
      <ul
        className="h-[95%] flex flex-col justify-evenly p-2 rounded-2xl"
        style={{
          backgroundColor: theme.primaryDark,
        }}
      >
        <li
          className="p-2 rounded-lg"
          style={{
            backgroundColor: theme.primaryDark,
          }}
          onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
            e.currentTarget.style.backgroundColor = theme.primaryDarkHover;
          }}
          onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
            e.currentTarget.style.backgroundColor = theme.primaryDark;
          }}
        >
          <div
            className="text-[35px] text-white cursor-pointer relative"
            onClick={() => {
              setNotificationOpen(true);
            }}
          >
            {notificationCount > 0 && (
              <span className="text-[12px] font-semibold w-6 h-6 bg-blue-500 rounded-full flex justify-center items-center absolute -top-2 -right-2 transition-all duration-300 ease-in-out">
                {notificationCount}
              </span>
            )}
            <SvgIcon name="bell" classes="w-9 h-9" />
          </div>
        </li>
        <li
          className="p-2 rounded-lg"
          style={{
            backgroundColor: theme.primaryDark,
          }}
          onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
            e.currentTarget.style.backgroundColor = theme.primaryDarkHover;
          }}
          onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
            e.currentTarget.style.backgroundColor = theme.primaryDark;
          }}
        >
          <div
            className="text-[35px] text-white cursor-pointer relative"
          >
            <Link to={"/connection"}>
            {/* {props.notificationCount > 0 && ( */}
            {true && (
              <span className="text-[12px] font-semibold w-6 h-6 bg-blue-500 rounded-full flex justify-center items-center absolute -top-2 -right-2 transition-all duration-300 ease-in-out">
                {/* {props.notificationCount} */}
                {1}
              </span>
            )}
            <AiOutlineUserAdd />
            </Link>
          </div>
        </li>

        {/* <li
          className="p-2 rounded-lg"
          style={{
            backgroundColor: theme.primaryDark,
          }}
          onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
            e.currentTarget.style.backgroundColor = theme.primaryDarkHover;
          }}
          onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
            e.currentTarget.style.backgroundColor = theme.primaryDark;
          }}
        >
          <div
            onClick={() => {
              
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
        </li> */}

        <li
          className="p-2 rounded-lg"
          style={{
            backgroundColor: theme.primaryDark,
          }}
          onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
            e.currentTarget.style.backgroundColor = theme.primaryDarkHover;
          }}
          onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
            e.currentTarget.style.backgroundColor = theme.primaryDark;
          }}
        >
          <span
            className="text-[35px] text-white cursor-pointer"
            onClick={() => {
              // window.innerWidth >= 1024
              //   ? props.setChatList(true)
              //   : props.chatList === true
              //   ? props.setChatList(false)
              //   : props.setChatList(true);
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
        <li
          className="p-2 rounded-lg"
          style={{
            backgroundColor: theme.primaryDark,
          }}
          onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
            e.currentTarget.style.backgroundColor = theme.primaryDarkHover;
          }}
          onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
            e.currentTarget.style.backgroundColor = theme.primaryDark;
          }}        
        >
          <div
            onClick={() => {
              setThemeOpen(true);
            }}
            className="text-[35px] text-white cursor-pointer"
          >
            <IoMdColorPalette className="w-9 h-9" />
          </div>
        </li>
        <li
          className="p-2 rounded-lg"
          style={{
            backgroundColor: theme.primaryDark,
          }}
          onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
            e.currentTarget.style.backgroundColor = theme.primaryDarkHover;
          }}
          onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
            e.currentTarget.style.backgroundColor = theme.primaryDark;
          }}
        >
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

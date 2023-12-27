import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import SvgIcon from "../Components/Icons/svgIcons";
import ProContext from "../context/mainContext";

const Connection:React.FC<any> = ({themeOpen}) => {
  const { theme }: any = useContext(ProContext);

  const [searchText, setSearchText] = useState<string>("");

  const searchHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div
      className="w-full h-full py-6 px-4"
      style={{
        background: theme.screen,
      }}
    >
      <div className="flex justify-start items-center">
        <Link to={"/home"} className="text-white mr-5">
          <SvgIcon name="left_arrow" classes="w-8 h-8" />
        </Link>
        <h3
          className="text-3xl font-semibold"
          style={{ color: theme.primaryFont }}
        >
          Connection
        </h3>
      </div>

      <div className="flex justify-center px-8 py-3.5 h-[80px]">
        <form
          className="w-full flex items-end h-full px-6"
          onSubmit={searchHandler}
        >
          <div className="relative w-full h-full after:content-[''] after:absolute after:top-full after:left-0 after:w-0 after:h-0.5 after:rounded-xl after:mx-auto after:transition-all after:duration-300 after:ease-in-out border-b-2 border-gray-200 flex items-end">
            <input
              type="text"
              className="bg-transparent outline-none w-full text-base font-normal pr-16"
              placeholder="Message"
              value={searchText}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSearchText(e.currentTarget.value);
              }}
              style={{
                color: theme.primaryFont,
              }}
            />

            <div className="flex absolute right-0 top-0 h-full">
              <button
                type="button"
                className="text-white rounded-full w-[50px] flex justify-center items-center transition-all duration-300 ease-in-out"
                style={{
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.currentTarget.style.backgroundColor =
                    theme.primaryDarkHover;
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <SvgIcon name="magnify_glass" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Connection;

import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ProContext from "../context/mainContext";
import Iconnav from "../Components/IconNav";
import SvgIcon from "../Components/icons/svgIcons";
import Input from "../Components/SubComponents/InputBox";

const data = [
  {
    name: "Amanda Kapti",
    username: "Amanda_kapti",
    img: "/person_1.webp",
  },
  {
    name: "Amanda Kapti",
    username: "Amanda_kapti",
    img: "/person_1.webp",
  },
  {
    name: "Amanda Kapti",
    username: "Amanda_kapti",
    img: "/person_1.webp",
  },
  {
    name: "Amanda Kapti",
    username: "Amanda_kapti",
    img: "/person_1.webp",
  },
  {
    name: "Amanda Kapti",
    username: "Amanda_kapti",
    img: "/person_1.webp",
  },
  {
    name: "Amanda Kapti",
    username: "Amanda_kapti",
    img: "/person_1.webp",
  },
  {
    name: "Amanda Kapti",
    username: "Amanda_kapti",
    img: "/person_1.webp",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const { theme, themeSelector }: any = useContext(ProContext);

  const [profileOpen, setProfileOpen] = useState<boolean>(false);
  const [currentMessage, setCurrentMessage] = useState<string>("");

  const sendMessageHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="bg-slate-400 flex relative h-screen w-screen overflow-hidden">
      <div className="flex w-full h-full">
        {/* CHAT LIST START */}
        <div
          className="w-[400px] h-full flex"
          style={{
            background: theme.primary,
          }}
        >
          <div className="w-[80px] h-full">
            <Iconnav />
          </div>

          <div className="w-[320px] h-full py-2 flex flex-col pl-2">
            <div
              className="flex items-center py-2"
              onClick={() => {
                themeSelector("red");
                // to be remove
              }}
            >
              <span
                className="font-semibold text-[26px]"
                style={{
                  color: theme.primaryFont,
                }}
              >
                Chatterz -
              </span>
              <div className="w-12 h-12">
                <img
                  src="/favicon.png"
                  alt="Chatterz"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex py-2 items-center">
              <div className="w-full">
                <input
                  type="text"
                  className="outline-none rounded-md py-2 px-3 w-full border-2"
                  placeholder="Search"
                  style={{
                    background: theme.primaryDark,
                    borderColor: theme.primaryBorder,
                    color: theme.primaryFont,
                  }}
                />
              </div>
              <button
                type="button"
                className="mx-2 p-2 rounded-full cursor-pointer border-2 outline-none"
                style={{
                  background: theme.primaryDark,
                  color: theme.primaryFont,
                  borderColor: theme.primaryBorder,
                }}
              >
                <SvgIcon name="magnify_glass" />
              </button>
            </div>
            <div className="py-2 pr-2">
              <div className="pr-2 overflow-y-auto h-[calc(100%-170px)] shadow-[inset_0_10px_10px_rgba(0_0_0_0.5)]">
                <ul className="flex flex-col h-full rounded-lg">
                  {data.map((item, idx) => (
                    <li
                      className="w-full h-20 flex px-3 py-3.5 mb-2 rounded-lg cursor-pointer transition-all duration-100 ease-in-out"
                      key={idx}
                      style={{
                        backgroundColor: theme.primaryDark,
                      }}
                      onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
                        e.currentTarget.style.backgroundColor =
                          theme.primaryDarkHover;
                      }}
                      onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
                        e.currentTarget.style.backgroundColor =
                          theme.primaryDark;
                      }}
                    >
                      <div className="flex justify-center items-center">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded-full"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-center px-4">
                        <h6 className="text-[16px] font-semibold whitespace-nowrap text-white">
                          {item.name}
                        </h6>
                        <p className="text-[14px] text-gray-300">
                          {item.username}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* CHAT LIST END */}

        {/* CHAT SCREEN START */}
        <div
          className="h-full bg-black pl-0.5 transition-all duration-500 ease-in-out"
          style={{
            width: profileOpen ? "calc(100% - 800px)" : "calc(100% - 400px)",
            backgroundColor: theme.screen,
          }}
        >
          <div className="h-full w-full flex flex-col justify-between">
            {/* SCREEN HEADER START */}
            <div
              className="w-full h-[80px] px-8"
              style={{
                backgroundColor: theme.primary,
              }}
            >
              <div className="w-full h-full flex justify-between items-center">
                <div className="flex">
                  <div className="w-16 h-16 rounded-full cursor-pointer">
                    <img
                      src="/person_1.webp"
                      alt="Chatterz"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div
                    className="flex flex-col justify-center ml-5 cursor-pointer"
                    onClick={() => {
                      setProfileOpen(true);
                    }}
                  >
                    <span
                      className="text-[18px] font-semibold"
                      style={{
                        color: theme.primaryFont,
                      }}
                    >
                      Amanda Kapti
                    </span>
                    <span className="text-[16px] text-gray-400"> online </span>
                  </div>
                </div>

                <div
                  className="rounded-full cursor-pointer p-2 transition-all duration-200 ease-in-out"
                  style={{
                    backgroundColor: theme.primary,
                    color: theme.primaryFont,
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.currentTarget.style.backgroundColor = theme.primaryHover;
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.currentTarget.style.backgroundColor = theme.primary;
                  }}
                >
                  <SvgIcon name="three_dot_menu" classes="w-8 h-8" />
                </div>
              </div>
            </div>
            {/* SCREEN HEADER END */}

            {/* CHAT SECTION START */}
            <div className="h-[calc(100%-180px)] px-8">
              <div className="bg-green-500 w-full h-full"></div>
            </div>
            {/* CHAT SECTION END */}

            {/* MESSAGE SEND SECTION START */}
            <div className="flex justify-center px-8 py-3.5 h-[80px]">
              <form
                className="w-full flex items-end h-full"
                onSubmit={sendMessageHandler}
              >
                <div className="relative w-full h-full after:content-[''] after:absolute after:top-full after:left-0 after:w-0 after:h-0.5 after:rounded-xl after:mx-auto after:transition-all after:duration-300 after:ease-in-out border-b-2 border-gray-200 flex items-end">
                  <input
                    type="text"
                    className="bg-transparent outline-none w-full text-base font-normal pl-10 pr-32"
                    placeholder="Message"
                    value={currentMessage}
                    onChange={(e: any) => {
                      setCurrentMessage(e.currentTarget.value);
                    }}
                    style={{
                      color: theme.primaryFont,
                    }}
                  />

                  <div className="absolute left-1 -bottom-1">
                    <button
                      type="button"
                      className="text-yellow-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
                      style={{
                        backgroundColor: "transparent",
                      }}
                    >
                      <SvgIcon name="emoji_happy" classes="w-7 h-7" />
                    </button>
                  </div>

                  <div className="flex absolute right-0 -top-2 h-full">
                    <button
                      type="button"
                      className="text-white rounded-full h-full w-[50px] flex justify-center items-center ml-3 transition-all duration-300 ease-in-out"
                      style={{
                        backgroundColor: theme.icon,
                      }}
                      onMouseEnter={(
                        e: React.MouseEvent<HTMLButtonElement>
                      ) => {
                        e.currentTarget.style.backgroundColor = theme.iconHover;
                      }}
                      onMouseLeave={(
                        e: React.MouseEvent<HTMLButtonElement>
                      ) => {
                        e.currentTarget.style.backgroundColor = theme.icon;
                      }}
                    >
                      <SvgIcon name="document_plus" />
                    </button>
                    <button
                      type="submit"
                      className="text-white rounded-full h-full w-[50px] ml-3 flex justify-center items-center transition-all duration-300 ease-in-out"
                      style={{
                        backgroundColor: theme.icon,
                      }}
                      onMouseEnter={(
                        e: React.MouseEvent<HTMLButtonElement>
                      ) => {
                        e.currentTarget.style.backgroundColor = theme.iconHover;
                      }}
                      onMouseLeave={(
                        e: React.MouseEvent<HTMLButtonElement>
                      ) => {
                        e.currentTarget.style.backgroundColor = theme.icon;
                      }}
                    >
                      <SvgIcon name="send_paper_plane" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* MESSAGE SEND SECTION START */}
          </div>
        </div>
        {/* CHAT SCREEN END */}

        {/* PROFILE SCREEN START */}
        <div
          className="h-full bg-yellow-800 transition-all duration-500 ease-in-out"
          style={{
            width: profileOpen ? "400px" : "0px",
          }}
          onClick={() => {
            setProfileOpen(false);
          }}
        ></div>
        {/* PROFILE SCREEN END */}
      </div>
    </section>
  );
};

export default Home;

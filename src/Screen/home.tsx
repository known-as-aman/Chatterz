import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ProContext from "../context/mainContext";
import Iconnav from "../Components/IconNav";
import SvgIcon from "../Components/Icons/svgIcons";
import Message from "../Components/Message";
import { componentFile_i } from "../interface/component_select";
import OpenImage from "../Components/OpenImage";
import NotificationBox from "../Components/NotificationBox";
import Connection from "./Connections";
import Themes from "../Components/Modals/Theme";

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

const msgData = [
  {
    messageId: 1,
    ownerEmail: "sender@email.com",
    senderEmail: "sender@email.com",
    receiverEmail: "receiver@email.com",
    messageType: "image",
    messageText: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    messageReplied: false,
    messageEdited: false,
    fileUrl: ["/person_2.jpg"],
    creationTime: Date.now(),
    creationBy: "sender@email.com",
    updationTime: Date.now(),
    updationBy: "sender@email.com",
  },
  {
    messageId: 2,
    ownerEmail: "receiver@email.com",
    senderEmail: "receiver@email.com",
    receiverEmail: "sender@email.com",
    messageType: "text",
    messageText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, iusto blanditiis. Perspiciatis, quos nostrum!",
    messageReplied: false,
    messageEdited: false,
    fileUrl: [],
    creationTime: Date.now(),
    creationBy: "sender@email.com",
    updationTime: Date.now(),
    updationBy: "sender@email.com",
  },
  {
    messageId: 3,
    ownerEmail: "sender@email.com",
    senderEmail: "sender@email.com",
    receiverEmail: "receiver@email.com",
    messageType: "text",
    messageText: "Lorem ipsum dolor sit",
    messageReplied: false,
    messageEdited: false,
    fileUrl: [],
    creationTime: Date.now(),
    creationBy: "sender@email.com",
    updationTime: Date.now(),
    updationBy: "sender@email.com",
  },
  {
    messageId: 4,
    ownerEmail: "receiver@email.com",
    senderEmail: "receiver@email.com",
    receiverEmail: "sender@email.com",
    messageType: "multiple_image",
    messageText: "Lorem ipsum dolor sit",
    messageReplied: false,
    messageEdited: false,
    // fileUrl: ["/person_2.jpg","/person_1.webp"],
    // fileUrl: ["/person_2.jpg","/person_1.webp","/no_user_profile.png"],
    fileUrl: [
      "/person_2.jpg",
      "/person_1.webp",
      "/no_user_profile.png",
      "/person_1.webp",
      "/no_user_profile.png",
    ],
    creationTime: Date.now(),
    creationBy: "sender@email.com",
    updationTime: Date.now(),
    updationBy: "sender@email.com",
  },
  {
    messageId: 5,
    ownerEmail: "sender@email.com",
    senderEmail: "sender@email.com",
    receiverEmail: "receiver@email.com",
    messageType: "text",
    messageText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, iusto blanditiis. Perspiciatis, quos nostrum! Facilis illo ratione deleniti nisi odio eaque commodi accusamus iure architecto nobis! Cumque ratione delectus quibusdam?  Deserunt, iusto blanditiis. Perspiciatis, quos nostrum! Facilis illo ratione deleniti nisi odio eaque commodi accusamus iure architecto nobis! Cumque ratione delectus quibusdam?",
    messageReplied: false,
    messageEdited: false,
    fileUrl: [],
    creationTime: Date.now(),
    creationBy: "sender@email.com",
    updationTime: Date.now(),
    updationBy: "sender@email.com",
  },
];

const Home = () => {
  const navigate = useNavigate();

  const { theme, themeSelector, imageData, imageOpen, setImageOpen }: any =
    useContext(ProContext);

  const myInfo = {
    id: 28112003,
    email: "sender@email.com",
  };

  const [notificationData, setNotificationData]: Array<any> = useState([
    {
      id: 1,
      name: "Jhamunda Kapti",
      username: "jhamunda_kapti",
      message: "It will take some time, but you need to keep patience.",
    },
    {
      id: 2,
      name: "Bhandari Kapti",
      username: "bhandari_kapti",
      message: "It will take some time, you can give up, if you're a looser.",
    },
  ]);

  const [profileOpen, setProfileOpen] = useState<boolean>(false);
  const [notificationOpen, setNotificationOpen] = useState<boolean>(false);
  const [themeOpen, setThemeOpen] = useState<boolean>(false);
  const [connectionBarOpen, setConnectionBarOpen] = useState<boolean>(false);
  const [currentMessage, setCurrentMessage] = useState<string>("");
  const [fileType, setFileType] = useState<componentFile_i>("");

  useEffect(() => {
    setFileType(getFileType_f());
  }, [imageData]);

  const getFileType_f = () => {
    if (imageData.length > 1) {
      return "multiple_image";
    } else {
      return "image";
    }
  };

  const sendMessageHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="bg-slate-400 flex relative h-screen w-screen overflow-hidden">
      <div className="flex w-full h-full">
        {/* CHAT LIST START */}
        <div
          className={`w-[400px] h-full flex absolute transition-all duration-500 ease-in-out lg:static z-30 top-0 ${connectionBarOpen ? "left-0" : "-left-[400px]"}`}
          style={{
            background: theme.primary,
          }}
        >
          <div className="w-[80px] h-full">
            <Iconnav
              setNotificationOpen={setNotificationOpen}
              notificationCount={notificationData.length}
              setThemeOpen={setThemeOpen}
            />
          </div>

          <div className="w-[320px] h-full py-2 flex flex-col pl-2 relative">
            <div
              className="flex items-center py-2 relative"
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

              <button type="button" className="p-2 rounded-full absolute top-1/2 -translate-y-[50%] right-4 lg:hidden block"
              style={{
                color:theme.primaryFont
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
                e.currentTarget.style.backgroundColor = theme.primaryDarkHover;
              }}
            onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
              onClick={()=>{
                setConnectionBarOpen(false);
              }}
              >
                <SvgIcon name="cross" classes="w-8 h-8" />
              </button>
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
            <div className="py-2 pr-2 h-[calc(100%-126px)]">
              <div className="pr-2 overflow-y-auto h-full shadow-[inset_0_10px_10px_rgba(0_0_0_0.5)]">
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
          className={`h-full bg-black pl-0.5 transition-all duration-500 ease-in-out w-full ${profileOpen ? "lg:w-[calc(100%-800px)]" : "lg:w-[calc(100%-400px)]"} ${connectionBarOpen ? "blur-sm lg:blur-none" : "blur-none"}`}
          style={{
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
                <div className="flex items-center">
                  <button type="button" className="h-full text-white lg:hidden block" onClick={()=>{
                    if(window.innerWidth <= 1024){
                      setConnectionBarOpen(true);
                    }
                  }}>
                    <SvgIcon name="menu" classes="w-8 h-8" />
                  </button>
                  <div className="w-16 h-16 rounded-full cursor-pointer lg:ml-0 ml-6">
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
            <div className="h-[calc(100%-180px)] px-8 overflow-y-auto">
              <div className="border-none border-green-500 w-full h-full flex flex-col">
                {msgData.map((item) => (
                  <div
                    className={`relative rounded-md mb-4 px-2 py-0.5 ${
                      profileOpen ? "max-w-[95%]" : "max-w-[75%]"
                    } ${
                      myInfo.email === item.senderEmail ? "ml-auto" : "mr-auto"
                    }`}
                    style={{
                      backgroundColor:
                        myInfo.email === item.senderEmail
                          ? theme.primary
                          : theme.white,
                      color:
                        myInfo.email === item.senderEmail
                          ? theme.primaryFont
                          : theme.secondaryFont,
                    }}
                    key={item.messageId}
                  >
                    <Message
                      compType={item.messageType}
                      text={item.messageText}
                      fileUrl={item.fileUrl}
                    />

                    {myInfo.email !== item.senderEmail && (
                      <span className="absolute bottom-0.5 -left-0.5 h-2 w-2 border-t-[10px] border-l-[10px] border-white rotate-45"></span>
                    )}
                    {myInfo.email === item.senderEmail && (
                      <span
                        className="absolute bottom-0.5 -right-0.5 h-2 w-2 border-t-[10px] border-l-[10px] rotate-45"
                        style={{
                          borderColor: theme.primary,
                        }}
                      ></span>
                    )}
                  </div>
                ))}
              </div>
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

      {/* ABSOLUTE MODALS START */}

      {/* Open image file */}
      {imageOpen && (
        <div className="fixed top-0 left-0 w-full h-full z-50">
          <div className="relative w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.8)]">
            <OpenImage fileType={fileType} fileData={imageData} />
            <button
              type="button"
              className="absolute top-2 right-2 p-2 rounded-lg bg-gray-600 hover:bg-slate-700 transition-all duration-300 ease-in-out"
              onClick={() => {
                setImageOpen(false);
              }}
            >
              <SvgIcon name="cross" classes="w-8 h-8 text-white" />
            </button>
          </div>
        </div>
      )}

      {/* Open notification bar */}
      <div
        className={`fixed h-screen w-full sm:w-96 transition-all duration-500 ease-in-out z-50 top-0 ${
          notificationOpen ? "right-0" : "-right-full sm:-right-96"
        }`}
      >
        <div className="relative w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.9)] px-4">
          <NotificationBox
            data={notificationData}
            setData={setNotificationData}
            setOpen={setNotificationOpen}
          />
        </div>
      </div>

      <div className="">
        <Themes open={themeOpen} setOpen={setThemeOpen} />
      </div>

      {/* ABSOLUTE MODALS END */}
    </section>
  );
};

export default Home;

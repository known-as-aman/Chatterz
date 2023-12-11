import React, { useContext, useMemo, useRef, useState } from "react";
import { RxArrowLeft } from "react-icons/rx";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FiUserCheck } from "react-icons/fi";
import { FiUserX } from "react-icons/fi";
import { RiMailDownloadLine } from "react-icons/ri";
import { BsFillChatDotsFill, BsSearch } from "react-icons/bs";
import ProContext from "../context/mainContext";
import globalApi from "../Screen/globalApi";

import { BallTriangle } from "react-loader-spinner";
import socket from "../Connection/socket";

const FindFriend = (props) => {
  const context = useContext(ProContext);

  const [colorTheme, setColorTheme] = useState(context.currentTheme);
  const [friendsearchTerm, setFriendsearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [reqBox, setReqBox] = useState(false);
  const [loading, setLoading] = useState(false);

  const friendSearchHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    let fetchData = await fetch(`${globalApi.main}/searchConnection`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        auth_token: props.loginToken,
        searchTerm: friendsearchTerm,
      }),
    });
    let parseData = await fetchData.json();

    if (parseData.status === 200 && parseData.success === true) {
      setLoading(false);
      setSearchResult(parseData.data);
    }
  };

  const connectionSendHandler = async (mailId) => {
    let fetchData = await fetch(`${globalApi.main}/sendConnectionRequest`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        auth_token: props.loginToken,
        requestReciever: mailId,
      }),
    });
    let parseData = await fetchData.json();

    if (parseData.status === 200 && parseData.success === true) {
      props.setAlertMessage(parseData.message);
      props.setApiFailled(false);
      props.setShow(true);
    }
  };

  const connectionCancelHandler = async (mailId) => {
    let fetchData = await fetch(`${globalApi.main}/cancelConnectionRequest`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        auth_token: props.loginToken,
        requestCancelReciever: mailId,
      }),
    });
    let parseData = await fetchData.json();

    if (parseData.status === 200 && parseData.success === true) {
      props.setAlertMessage(parseData.message);
      props.setApiFailled(false);
      props.setShow(true);
    }
  };

  console.log(props.notificationConnectionGroup);
  useMemo(() => {
    setColorTheme(context.currentTheme);
  }, [context.currentTheme]);

  // Socket useMemo

  return (
    <section className="w-full h-full relative flex flex-col px-4">
      <div className="flex items-center justify-between py-4 border-b">
        <div className="flex items-center h-full">
          <span
            className="text-[30px] text-slate-50 p-2 cursor-pointer rounded-full hover:bg-slate-800"
            onClick={() => {
              props.setFindFriendScreenStatus(false);
            }}
          >
            <RxArrowLeft />
          </span>
          <h2 className="text-[24px] text-slate-50 ml-4"> Find Connections </h2>
        </div>
        <div className="h-full flex items-center pr-4 rounded-full cursor-pointer">
          <RiMailDownloadLine
            className="text-slate-50 text-[26px] hover:text-gray-500"
            onClick={() => {
              reqBox === true ? setReqBox(false) : setReqBox(true);
            }}
          />
        </div>
      </div>
      {reqBox === false ? (
        <div className="w-full h-full py-2">
          <form className="flex py-3" onSubmit={friendSearchHandler}>
            <input
              type="text"
              className="px-4 py-1 w-full rounded-md text-[18px] outline-none"
              onChange={(e) => {
                setFriendsearchTerm(e.target.value);
              }}
              autoFocus
            />
            <button
              type="submit"
              className="text-slate-50 text-[24px] rounded-full p-3 ml-2 hover:bg-gray-700"
            >
              <BsSearch />
            </button>
          </form>

          <div className="w-full h-auto flex flex-wrap justify-between sm:justify-start items-start gap-4 overflow-y-auto connectionScrollBar">
            {loading === true ? (
              <div className="w-full h-full flex items-center justify-center">
                <BallTriangle
                  height={100}
                  width={100}
                  radius={5}
                  color="#fdfbfe"
                  ariaLabel="ball-triangle-loading"
                  wrapperClass={{}}
                  wrapperStyle=""
                  visible={true}
                />
              </div>
            ) : (
              searchResult?.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col rounded-lg p-1 bg-red-50 w-[290px] mt-2 py-3"
                >
                  <img
                    src={item.profileUrl}
                    alt="ichat"
                    className="rounded-full w-40 h-40 mx-auto shadow-md shadow-black"
                  />
                  <h1 className="sm:text-xl text-lg font-medium text-center text-gray-900 mt-2">
                    {item.username}
                  </h1>
                  <p className="w-full leading-relaxed text-gray-600 text-center mt-1">
                    {item.email}
                  </p>
                  <div className="flex items-center justify-evenly mt-2">
                    {item.connectionStatus === "connected" && (
                      <button
                        type="button"
                        className={`p-3 hover:bg-slate-500 rounded-full ${colorTheme.text} ${colorTheme.main}`}
                        onClick={() => {
                          props.setFindFriendScreenStatus(false);
                          props.setActivePersonChat({
                            email: item.email,
                            username: item.username,
                            name: item.name,
                            image: item.profileUrl,
                            socId: item.socId.userMsgId,
                          });
                        }}
                      >
                        <BsFillChatDotsFill className="w-6 h-6" />
                      </button>
                    )}
                    {item.connectionStatus === "unknown" && (
                      <button
                        type="button"
                        className={`p-3 hover:bg-slate-500 rounded-full ${colorTheme.text} ${colorTheme.main}`}
                        onClick={() => {
                          connectionSendHandler(item.email);
                          socket.emit(
                            "send-connection-request",
                            item.email,
                            props.myId
                          );
                        }}
                      >
                        <AiOutlineUserAdd className="w-6 h-6" />
                      </button>
                    )}
                    {item.connectionStatus === "pending" && (
                      <button
                        type="button"
                        className={`p-3 hover:bg-slate-500 rounded-full ${colorTheme.text} ${colorTheme.main}`}
                        onClick={() => {
                          connectionCancelHandler(item.email);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      ) : (
        <div className="w-full h-auto flex flex-wrap justify-between sm:justify-start items-start gap-4 overflow-y-auto connectionScrollBar">
          {props.notificationConnectionGroup.map((item,index)=>(
              <div
                  key={index}
                  className="flex flex-col rounded-lg p-1 bg-red-50 w-[290px] mt-2 py-3"
                >
                  <img
                    src={item.profileImg}
                    alt="ichat"
                    className="rounded-full w-40 h-40 mx-auto shadow-md shadow-black"
                  />
                  <h1 className="sm:text-xl text-lg font-medium text-center text-gray-900 mt-2">
                    {item.username}
                  </h1>
                  <p className="w-full leading-relaxed text-gray-600 text-center mt-1">
                    {item.email}
                  </p>
                  <div className="flex items-center justify-evenly mt-2">
                  <button
                        type="button"
                        className={`p-3 hover:bg-slate-500 rounded-full ${colorTheme.text} ${colorTheme.main}`}
                        onClick={() => {}}
                      >
                        <FiUserCheck className="w-6 h-6" />
                      </button>
                  <button
                        type="button"
                        className={`p-3 hover:bg-slate-500 rounded-full ${colorTheme.text} ${colorTheme.main}`}
                        onClick={() => {}}
                      >
                        <FiUserX className="w-6 h-6" />
                      </button>
                  </div>
                </div>
))}
        </div>
      )}
    </section>
  );
};

export default FindFriend;

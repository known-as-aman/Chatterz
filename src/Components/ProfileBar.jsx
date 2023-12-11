import React, { useContext, useMemo, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { BiBlock } from "react-icons/bi";
// import { BsHandThumbsDown } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import ProContext from "../context/mainContext";

const ProfileBar = (props) => {

  const context = useContext(ProContext);

  const [colorTheme, setColorTheme] = useState(context.currentTheme);

  useMemo(() => {
    setColorTheme(context.currentTheme);
  }, [context.currentTheme]);

  return (
    <div
      className={`relative flex flex-col  ${
        props.open === false ? "hidden" : ""
      }`}
    >
      <div className={`flex items-center px-3 h-[80px] ${colorTheme.header}`}>
        <RxCross1
          className="p-2 text-[38px] cursor-pointer text-slate-50"
          onClick={() => {
            props.setOpen(false);
          }}
        />
        <h3 className="text-[24px] pl-8 text-slate-50">Profile Info</h3>
      </div>

      <div className="flex flex-col items-center px-3 py-5 w-full bg-slate-50">
        <img
          src={props.data.image}
          alt={props.data.name}
          className="rounded-full h-64 w-64 sm:h-80 sm:w-80 object-cover cursor-pointer"
          onClick={() => {
            props.setFullImage(true);
          }}
        />
        <h3 className="text-[24px] font-semibold mt-3">{props.data.name}</h3>
        <h5 className="text-[20px] font-medium text-gray-500">
          {props.data.username}
        </h5>
        <h6 className="text-[16px] text-gray-600 ">{props.data.email}</h6>
      </div>

      <div className="flex flex-col">
        <div
          className="cursor-pointer hover:bg-red-100 p-5 flex items-center bg-slate-50 text-red-500 mt-0.5 font-semibold text-[18px]"
          onClick={() => {
            props.setBlockChat(true);
          }}
        >
          <BiBlock className="mr-4 text-[26px]" />{" "}
          {props.blockList.includes(props.data.email)
            ? "Unblock"
            : "Block"}{" "}
          {props.data.name}
        </div>
        {/* <div className="cursor-pointer hover:bg-red-100 p-5 flex items-center bg-slate-50 text-red-500 mt-0.5 font-semibold text-[18px]"><BsHandThumbsDown className="mr-4 text-[26px]" /> Report {props.data.name}</div> */}
        <div
          className="cursor-pointer hover:bg-red-100 p-5 flex items-center bg-slate-50 text-red-500 mt-0.5 font-semibold text-[18px]"
          onClick={() => {
            props.setDeleteChat(true);
          }}
        >
          <AiOutlineDelete className="mr-4 text-[26px]" /> Delete{" "}
          {props.data.name}
        </div>
      </div>
    </div>
  );
};

export default ProfileBar;

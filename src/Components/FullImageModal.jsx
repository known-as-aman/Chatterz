import React from "react";
import { RxCross1 } from "react-icons/rx";

const FullImageModal = (props) => {

  switch(props.type){
    case "profile":{
      return (
        <div
          className={`${
            props.open === true ? "w-full h-[99vh] border-2 border-transparent p-1" : "w-0 h-0"
          } z-[100] absolute transition-all duration-300 ease-in-out`}
        >
          <div className="w-full h-full flex justify-center items-center relative backdrop-blur-sm">
    
            <div className={`absolute top-0 right-0 cursor-pointer p-4 bg-gray-200 hover:bg-gray-400 rounded-md ${props.open === false && "hidden"}`} onClick={()=>{
                props.setOpen(false);
            }}>
              <RxCross1 className="text-[28px]" />
            </div>
    
            <img src={props.src} alt={props.alt} className="h-full object-cover" />
          </div>
        </div>
      );
    }
    case "chatImg":{
      return (
        <div
          className={`${
            props.open === true ? "w-full h-[99vh] border-2 border-transparent p-1" : "w-0 h-0"
          } z-[100] absolute transition-all right-0 top-0 duration-300 ease-in-out`}
        >
          <div className="w-full h-full flex justify-center items-center relative backdrop-blur-sm">
    
            <div className={`absolute top-0 right-0 cursor-pointer p-4 bg-gray-200 hover:bg-gray-400 rounded-md ${props.open === false && "hidden"}`} onClick={()=>{
                props.setOpen(false);
            }}>
              <RxCross1 className="text-[28px]" />
            </div>
    
            <img src={props.src} alt={props.alt} className="h-full object-cover" />
          </div>
        </div>
      );
    }
    default:<></>
  }


  
};

export default FullImageModal;

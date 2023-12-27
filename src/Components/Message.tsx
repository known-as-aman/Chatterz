import React, { useContext } from "react";
import { messageInterface_i } from "../interface/component_select";
import SvgIcon from "./Icons/svgIcons";
import ProContext from "../context/mainContext";

const Message: React.FC<messageInterface_i> = ({ compType, text, fileUrl }) => {
  const { setImageOpen, setImageData }: any = useContext(ProContext);

  // Function to handle multiple images messages
  const multipleImgaeDisplayHandler = (
    images: Array<string>
  ): React.ReactElement => {
    switch (images.length) {
      case 2: {
        return (
          <>
            {images.map((item) => (
              <img
                key={item}
                src={item}
                alt=""
                className="sm:w-[200px] sm:h-[200px] w-[49%] h-full object-cover"
                onClick={()=>{
                  setImageOpen(true);
                  setImageData(images);
                }}
              />
            ))}
          </>
        );
      }
      case 3: {
        return (
          <>
            <div className="sm:w-[200px] sm:h-[200px] w-[49%] h-full" onClick={()=>{
                setImageOpen(true);
                setImageData(images);
              }}>
              <img
                src={images[0]}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="sm:w-[200px] sm:h-[200px] w-[49%] h-full relative" onClick={()=>{
                setImageOpen(true);
                setImageData(images);
              }}>
              <img
                src={images[1]}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full bg-[rgba(0,0,0,0.9)] hover:bg-[rgba(0,0,0,0.8)] cursor-pointer transition-all duration-300 ease-in-out">
                <span className="text-gray-400 flex justify-center items-center">
                  <SvgIcon name="plus" strokeWidth={2} classes="w-7 h-7" />
                  <span className="text-3xl">{fileUrl.length - 2}</span>
                </span>
              </div>
            </div>
          </>
        );
      }
      case 4: {
        return (
          <>
            <div className="sm:w-[200px] sm:h-[200px] w-[49%] h-[49%]" onClick={()=>{
                setImageOpen(true);
                setImageData(images);
              }}>
              <img
                src={images[0]}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="sm:w-[200px] sm:h-[200px] w-[49%] h-[49%]" onClick={()=>{
                setImageOpen(true);
                setImageData(images);
              }}>
              <img
                src={images[1]}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="sm:w-[200px] sm:h-[200px] w-[49%] h-[49%]" onClick={()=>{
                setImageOpen(true);
                setImageData(images);
              }}>
              <img
                src={images[2]}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="sm:w-[200px] sm:h-[200px] w-[49%] h-[49%]" onClick={()=>{
                setImageOpen(true);
                setImageData(images);
              }}>
              <img
                src={images[3]}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </>
        );
      }
      default: {
        return (
          <>
            <div className="sm:w-[200px] sm:h-[200px] w-[49%] h-[49%]" onClick={()=>{
                setImageOpen(true);
                setImageData(images);
              }}>
              <img
                src={images[0]}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="sm:w-[200px] sm:h-[200px] w-[49%] h-[49%]" onClick={()=>{
                setImageOpen(true);
                setImageData(images);
              }}>
              <img
                src={images[1]}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="sm:w-[200px] sm:h-[200px] w-[49%] h-[49%]" onClick={()=>{
                setImageOpen(true);
                setImageData(images);
              }}>
              <img
                src={images[2]}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="sm:w-[200px] sm:h-[200px] w-[49%] h-[49%] relative">
              <img
                src={images[3]}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full bg-[rgba(0,0,0,0.9)] hover:bg-[rgba(0,0,0,0.8)] cursor-pointer transition-all duration-300 ease-in-out" onClick={()=>{
                setImageOpen(true);
                setImageData(images);
              }}>
                <span className="text-gray-400 flex justify-center items-center">
                  <SvgIcon name="plus" strokeWidth={2} classes="w-7 h-7" />
                  <span className="text-3xl">{fileUrl.length - 4}</span>
                </span>
              </div>
            </div>
          </>
        );
      }
    }
  };

  const chooseMessage = (): React.ReactElement => {
    switch (compType) {
      case "text": {
        return <p>{text}</p>;
      }

      case "image": {
        return (
          <div className="w-[250px] flex flex-col items-start">
            <div className="w-full h-[250px] relative">
              <img
                src={fileUrl[0]}
                alt=""
                className="w-full h-full object-cover"
              />
              <div
                className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.1)] hover:bg-[rgba(0,0,0,0.2)] cursor-pointer transition-all duration-300 ease-in-out z-10"
                onClick={() => {
                  setImageData(fileUrl);
                  setImageOpen(true);
                }}
              ></div>
            </div>
            {text && <p>{text}</p>}
          </div>
        );
      }

      case "multiple_image": {
        return (
          <div
            className={`flex justify-center items-center flex-wrap sm:gap-x-[8px] gap-x-[4px] sm:w-[410px] ${
              fileUrl.length > 3 ? "sm:h-[420px] h-[310px]" : "sm:h-[200px] h-[150px]"
            }`}
          >
            {multipleImgaeDisplayHandler(fileUrl)}
          </div>
        );
      }

      default: {
        console.warn("Please enter correct message type!");
        return <></>;
      }
    }
  };

  return chooseMessage();
};

export default Message;

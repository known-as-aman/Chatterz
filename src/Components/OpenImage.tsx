import React, { useMemo, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { fileInterface_i } from "../interface/component_select";
import SvgIcon from "./Icons/svgIcons";

const OpenImage: React.FC<fileInterface_i> = ({ fileType, fileData }) => {
  let mouseStoppedTimeout: any;

  const [currentFile, setCurrentFile] = useState<string>(
    fileData ? fileData[0] : ""
  );
  const [btnAvailable, setBtnAvailable] = useState<boolean>(true);

  // useMemo(() => {}, [btnAvailable]);

  const getFile = (): React.ReactElement => {
    switch (fileType) {
      case "image": {
        return (
          <div className="h-[98%] bg-teal-600 flex justify-center">
            <img
              src={currentFile}
              alt="Chatterz"
              className="object-fit h-full"
            />
          </div>
        );
      }

      case "multiple_image": {
        return (
          <div
            className="h-full w-full flex justify-center items-center relative"
            onMouseMove={() => {
              clearTimeout(mouseStoppedTimeout);
              setBtnAvailable(true);

              mouseStoppedTimeout = setTimeout(() => {
                setBtnAvailable(false);
              }, 3000);
            }}
          >
            <div className="h-[98%] bg-teal-600 flex justify-center">
              <img
                src={currentFile}
                alt="Chatterz"
                className="object-fit h-full pointer-events-none"
              />
            </div>

            <button
              type="button"
              className={`-translate-y-1/2 bg-[rgba(113,128,132,0.6)] hover:bg-[rgba(113,128,132,0.4)] absolute left-3 top-1/2 flex justify-center items-center rounded-lg transition-all duration-200 ease-in-out ${
                btnAvailable
                  ? "opacity-100 h-1/2 w-[100px]"
                  : "opacity-0 h-0 w-0"
              }`}
              onClick={() => {
                let elemIndex = fileData.indexOf(currentFile);
                setCurrentFile(
                  fileData[elemIndex === 0 ? elemIndex : elemIndex - 1]
                );
              }}
            >
              {btnAvailable && (
                <span className="text-white">
                  <SvgIcon name="lesser_than" classes="w-12 h-12" />
                </span>
              )}
            </button>

            <button
              type="button"
              className={`-translate-y-1/2 bg-[rgba(113,128,132,0.6)] hover:bg-[rgba(113,128,132,0.4)] absolute right-3 top-1/2 flex justify-center items-center rounded-lg transition-all duration-200 ease-in-out ${
                btnAvailable
                  ? "opacity-100 h-1/2 w-[100px]"
                  : "opacity-0 h-0 w-0"
              }`}
              onClick={() => {
                let elemIndex = fileData.indexOf(currentFile);
                let tempIndex =
                  elemIndex === fileData.length - 1
                    ? fileData.length - 1
                    : elemIndex + 1;
                setCurrentFile(fileData[tempIndex]);
              }}
            >
              {btnAvailable && (
                <span className="text-white">
                  <SvgIcon name="greater_than" classes="w-12 h-12" />
                </span>
              )}
            </button>

            <div
              className={`md:max-w-[700px] max-w-full h-16 bg-[rgba(113,128,132,0.6)] absolute bottom-10 flex items-center gap-1 px-1 rounded-lg overflow-x-auto ${
                btnAvailable ? "opacity-100" : "opacity-0"
              }`}
            >
              {fileData.map((item) => (
                <div className="h-14 w-14 relative rounded-lg" key={item}>
                  <img
                    src={item}
                    alt="Chatterz"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div
                    className={`absolute top-0 left-0 w-full h-full hover:bg-[rgba(0,0,0,0.8)] rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${
                      item === currentFile
                        ? "bg-[rgba(0,0,0,0.8)]"
                        : "bg-transparent"
                    }`}
                    onClick={() => {
                      setCurrentFile(item);
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        );
      }

      default: {
        console.warn("Please select correct file type!");
        return <></>;
      }
    }
  };

  return getFile();
};

export default OpenImage;

import React, { ChangeEvent, FocusEvent, useContext, useEffect, useState } from "react";
import {
  componentInputBox_i,
  inputTypeInterface_i,
} from "../../interface/component_select";
import ProContext from "../../context/mainContext";

const Input = (props: inputTypeInterface_i) => {

  const { themeName }: any = useContext(ProContext);
  const classes = {
    blue: {
        afterBg: "after:bg-[#5145e7]",
      },
    red: {
        afterBg: "after:bg-[#ff1a1a]",
    },
  };

  const [currentSet,setCurrentSet] = useState(classes.blue);

  useEffect(()=>{
    if(themeName === "blue"){
      setCurrentSet(classes.blue);
    }else if(themeName === "red"){
      setCurrentSet(classes.red);
    }
  },[themeName]);

  const focusHandler = (e: FocusEvent<HTMLInputElement>) => {
    let parentElement: HTMLElement = e.target.parentElement as HTMLElement;
    parentElement.classList.remove("after:w-0");
    parentElement.classList.add("after:w-full");
  };

  const focusRemoveHandler = (e: FocusEvent<HTMLInputElement>) => {
    let parentElement: HTMLElement = e.target.parentElement as HTMLElement;
    parentElement.classList.remove("after:w-full");
    parentElement.classList.add("after:w-0");
  };

  const getTextSize = (size: number) => {
    switch (size) {
      case 1: {
        return "text-xs";
      }
      case 2: {
        return "text-sm";
      }
      case 3: {
        return "text-base";
      }
      case 4: {
        return "text-md";
      }
      case 5: {
        return "text-lg";
      }
      case 6: {
        return "text-xl";
      }
      case 7: {
        return "text-2xl";
      }
      case 8: {
        return "text-3xl";
      }
      case 9: {
        return "text-4xl";
      }
      case 10: {
        return "text-5xl";
      }
      case 11: {
        return "text-6xl";
      }
      case 12: {
        return "text-7xl";
      }
      default: {
        return "text-base";
      }
    }
  };

  const getTextWeight = (weight: number) => {
    switch (weight) {
      case 1: {
        return "font-thin";
      }
      case 2: {
        return "font-extralight";
      }
      case 3: {
        return "font-light";
      }
      case 4: {
        return "font-normal";
      }
      case 5: {
        return "font-medium";
      }
      case 6: {
        return "font-semibold";
      }
      case 7: {
        return "font-bold";
      }
      case 8: {
        return "font-extrabold";
      }
      case 9: {
        return "font-black";
      }
      default: {
        return "font-normal";
      }
    }
  };

  // Main returning function
  const choose_comp = (comp: componentInputBox_i) => {
    switch (comp) {
      case "loginSimple": {
        let logical_onchange_e: boolean = false;

        if (props.logicOnChange) {
          logical_onchange_e = true;
        }

        if (props.onChange && props.logicOnChange) {
          console.error("Can't use 'onChange' and 'logicOnChange' together");
          return <></>;
        }

        return (
          <div
            className={`relative after:content-[''] after:absolute after:top-full after:left-0 after:w-0 after:h-0.5 after:rounded-xl after:mx-auto after:transition-all after:duration-300 after:ease-in-out border-b-2 border-gray-200 ${currentSet.afterBg} ${
              props.extraClass ? props.extraClass : ""
            }`}
          >
            <input
              type={props.type ? props.type : "text"}
              className={`bg-transparent outline-none w-full text-black ${
                props.textSize ? getTextSize(props.textSize) : "text-base"
              } ${
                props.textWeight
                  ? getTextWeight(props.textWeight)
                  : "font-normal"
              } ${props.icon ? "pl-10" : ""}`}
              placeholder={props.placeholder}
              onFocus={focusHandler}
              onBlur={focusRemoveHandler}
              value={props.value}
              onChange={
                logical_onchange_e === true
                  ? props.logicOnChange
                  : (e) => props.onChange(e.target.value)
              }
            />
            {props.icon && (
              <div className="absolute top-0 left-0 px-1.5">{props.icon}</div>
            )}
          </div>
        );
      }
      default: {
        return <></>;
      }
    }
  };

  return choose_comp(props.compType);
};

export default Input;

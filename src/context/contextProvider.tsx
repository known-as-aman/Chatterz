import React, { ReactNode, useEffect, useState } from "react";
import ProContext from "./mainContext";
import { context_i } from "../interface/context_interface";
import { subThemes, themes, themesColor } from "../Data/color_theme";

const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // const colorPallete = {
  //   blue: {
  //     main: "bg-[#1b295e]",
  //     border: "border-[#1b295e]",
  //     header: "bg-[#283669]",
  //     background: "bg-[#0f172a]",
  //     text: "text-slate-50",
  //     leftChatBackground: "bg-[#1b295e]",
  //     leftChatText: "text-slate-50",
  //     rightChatBackground: "bg-slate-50",
  //     rightChatText: "text-[#1b295e]",
  //     iconHover: "hover:bg-[#101e50]",
  //     rightOptionHover: "hover:bg-[#112057]",
  //   },
  //   // red: {
  //   //   main: "bg-red-500",
  //   //   border: "bg-red-500",
  //   //   header: "bg-red-600",
  //   //   background: "bg-red-800",
  //   //   text: "text-slate-50",
  //   //   leftChatBackground: "bg-red-500",
  //   //   leftChatText: "text-slate-50",
  //   //   rightChatBackground: "bg-slate-50",
  //   //   rightChatText: "text-red-500",
  //   //   iconHover: "hover:bg-red-700",
  //   //   rightOptionHover: "hover:bg-red-700",
  //   // },
  //   // green: {
  //   //   main: "bg-emerald-500",
  //   //   border: "bg-emerald-500",
  //   //   header: "bg-emerald-600",
  //   //   background: "bg-emerald-800",
  //   //   text: "text-slate-50",
  //   //   leftChatBackground: "bg-emerald-500",
  //   //   leftChatText: "text-slate-50",
  //   //   rightChatBackground: "bg-slate-50",
  //   //   rightChatText: "text-emerald-500",
  //   //   iconHover: "hover:bg-emerald-700",
  //   //   rightOptionHover: "hover:bg-emerald-700",
  //   // },
  // };

  const colorPallete = themes;

  const [themeName, setThemeName] = useState<themesColor>("blue");
  const [theme, setTheme] = useState<subThemes>(colorPallete.blue);
  const [imageData, setImageData] = useState<Array<string>>([]);
  const [imageOpen, setImageOpen] = useState<boolean>(false);

  const themeSelector = (themeIndex: themesColor) => {
    switch (themeIndex) {
      case "blue": {
        setThemeName("blue");
        setTheme(colorPallete.blue);
        break;
      }

      case "red": {
        setThemeName("red");
        setTheme(colorPallete.red);
        break;
      }

      default: {
        setTheme(colorPallete.blue);
        break;
      }
    }
  };

  const contextValues: context_i = {
    themeName,
    theme,
    themeSelector,
    imageData,
    setImageData,
    imageOpen,
    setImageOpen
  };

  return (
    <ProContext.Provider value={contextValues}>{children}</ProContext.Provider>
  );
};

export default ContextProvider;

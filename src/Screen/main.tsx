import React, { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProContext from "../context/mainContext";

const Main = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/auth", { replace: true });
    // eslint-disable-next-line
  }, []);

  // let context: any = useContext(ProContext);

  return <></>;
};

export default Main;

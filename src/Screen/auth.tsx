import React, {
  useContext,
  useMemo,
  useState,
  ChangeEvent,
  FormEvent,
  useEffect,
} from "react";
import { useNavigate, NavigateFunction } from "react-router-dom";
// import SuccessMessage from "../Components/SuccessMessage";
import { TiTickOutline } from "react-icons/ti";
import { RxCrossCircled } from "react-icons/rx";
import { IoPersonOutline } from "react-icons/io5";
import { TbCircleLetterA } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";
import globalApi from "./globalApi";
import Input from "../Components/SubComponents/InputBox";
import ProContext from "../context/mainContext";
import { subThemes, themes } from "../Data/color_theme";

const Auth = () => {
  const navigate: NavigateFunction = useNavigate();

  const [tab, setTab] = useState<"signin" | "signup">("signin");
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [usernameAvailable, setUsernameAvailable] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rePassword, setRePassword] = useState<string>("");
  const [signInUsername, setSignInUsername] = useState<string>("");
  const [signInPassword, setSignInPassword] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);
  const [apiFailled, setApiFailled] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>("Status Updated");

  // console.log("color : ", styles);

  const emailRegex: RegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;

  const icons: any = {
    register: {
      name: <IoPersonOutline className="text-[20px] text-gray-400" />,
      username: <TbCircleLetterA className="text-[20px] text-gray-400" />,
      email: <MdOutlineEmail className="text-[20px] text-gray-400" />,
      password: <FaUnlock className="text-[20px] text-gray-400" />,
      confirmPassword: <FaLock className="text-[20px] text-gray-400" />,
    },
    login: {
      name: <IoPersonOutline className="text-[20px] text-gray-400" />,
      password: <FaLock className="text-[20px] text-gray-400" />,
    },
  };

  const validation = () => {
    let isValid = true;

    if (!password) {
      isValid = false;
      setAlertMessage("Please enter a strong password");
    } else if (password.length < 6) {
      isValid = false;
      setAlertMessage("Password has to be atleast 6 characters");
    }

    if (!email) {
      isValid = false;
      setAlertMessage("Please enter your email");
    } else if (!emailRegex.test(email)) {
      isValid = false;
      setAlertMessage("Enter an valid email address");
    }

    if (!username) {
      isValid = false;
      setAlertMessage("Please enter a unique user name");
    } else if (username.length < 3) {
      isValid = false;
      setAlertMessage("Username has to be atleast 3 characters");
    }

    if (!name) {
      isValid = false;
      setAlertMessage("Please enter your name");
    } else if (name.length < 4) {
      isValid = false;
      setAlertMessage("Name has to be atleast 4 characters");
    }

    if (password !== rePassword) {
      isValid = false;
      setAlertMessage("Please enter the same password");
    }

    return isValid;
  };

  const signupHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const loginHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/home");
  };

  // const submitHandler = async (e) => {
  //   e.preventDefault();

  //   if (tab === "signin") {
  //     let fetchData = await fetch(`${globalApi.main}/userSignin`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         username: signInUsername,
  //         password: signInPassword,
  //       }),
  //     });

  //     let parseData = await fetchData.json();

  //     if (parseData.status_code === 200 && parseData.success === true) {
  //       localStorage.setItem("login_token",parseData.auth_token);
  //       navigate("/ichat-home");
  //     } else {
  //       setAlertMessage(parseData.message);
  //       setShow(true);
  //       setApiFailled(true);
  //     }
  //   } else {
  //     if (validation()) {
  //       if (usernameAvailable === true) {
  //         let fetchData = await fetch(`${globalApi.main}/userSignup`, {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({
  //             name: name,
  //             username: username,
  //             email: email,
  //             password: password,
  //           }),
  //         });

  //         let parseData = await fetchData.json();

  //         if (parseData.status_code === 200 && parseData.success === true) {
  //           navigate("/ichat-home");
  //         } else {
  //           setAlertMessage(parseData.message);
  //           setShow(true);
  //           setApiFailled(true);
  //         }

  //         localStorage.setItem("login_token",parseData.auth_token);
  //         navigate("/ichat-home");
  //       }
  //     } else {
  //       setShow(true);
  //       setApiFailled(true);
  //     }
  //   }
  // };

  // const usernameChecker = async (user_name) => {
  //   if (tab === "signup") {
  //     let fetchData = await fetch(`${globalApi.main}/checkUsername`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         username: user_name,
  //       }),
  //     });

  //     let parseData = await fetchData.json();

  //     if (parseData.status_code === 200 && parseData.success === true) {
  //       setUsernameAvailable(true);
  //     } else {
  //       setUsernameAvailable(false);
  //     }
  //   }
  // };

  useMemo(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
    // eslint-disable-next-line
  }, [show]);

  return (
    <div className="flex h-screen w-full items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* <SuccessMessage
        show={show}
        apiFailled={apiFailled}
        message={alertMessage}
        onClose={() => {
          setShow(false);
        }}
      /> */}
      <div className={`w-full lg:w-1/3 max-w-md space-y-8`}>
        <div className="bg-white">
          <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
            <form
              className="w-full max-w-md"
              onSubmit={(e: FormEvent<HTMLFormElement>) => {
                tab === "signin" ? loginHandler(e) : signupHandler(e);
              }}
            >
              <div className="flex flex-col items-center justify-center mx-auto">
                <img
                  src={"/assets/images/iChat-logo.png"}
                  alt="iChat"
                  className="w-20 h-20"
                />
                <h1
                  className={`text-center text-2xl sm:text-3xl font-semibold fontUbuntu`}
                >
                  Welcome to Chatterz
                </h1>
              </div>

              <div className="flex items-center justify-center mt-6">
                <button
                  type="button"
                  onClick={() => {
                    setTab("signup");
                  }}
                  className={`transition-all duration-100 w-1/3 pb-4 font-medium text-center text-gray-500 cursor-pointer outline-none border-b-2 ${
                    tab === "signup"
                      ? "text-[#111827] border-[#5145e7]"
                      : "text-[#9CA3AF]"
                  }`}
                >
                  Register
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setTab("signin");
                  }}
                  className={`transition-all duration-100 w-1/3 pb-4 font-medium text-center cursor-pointer outline-none border-b-2  ${
                    tab === "signin"
                      ? "text-[#111827] border-[#5145e7]"
                      : "text-[#9CA3AF]"
                  }`}
                >
                  Login
                </button>
              </div>

              {tab === "signup" ? (
                <>
                  <div className="mt-7">
                    <Input
                      compType="loginSimple"
                      type="text"
                      value={name}
                      onChange={setName}
                      placeholder="Name"
                      extraClass="shadow-2xl transition-all duration-300"
                      icon={icons.register.name}
                    />
                  </div>
                  <div className="mt-7">
                    <Input
                      compType="loginSimple"
                      type="text"
                      value={username}
                      logicOnChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setUsername(e.target.value.toLowerCase());
                      }}
                      placeholder="Username"
                      extraClass="shadow-2xl transition-all duration-300"
                      icon={icons.register.username}
                    />
                  </div>
                  <div className="mt-7">
                    <Input
                      compType="loginSimple"
                      type="text"
                      value={email}
                      onChange={setEmail}
                      placeholder="Email"
                      extraClass="shadow-2xl transition-all duration-300"
                      icon={icons.register.email}
                    />
                  </div>
                  <div className="mt-7">
                    <Input
                      compType="loginSimple"
                      type="text"
                      value={password}
                      onChange={setPassword}
                      placeholder="Password"
                      extraClass="shadow-2xl transition-all duration-300"
                      icon={icons.register.password}
                    />
                  </div>
                  <div className="mt-7">
                    <Input
                      compType="loginSimple"
                      type="text"
                      value={rePassword}
                      onChange={setRePassword}
                      placeholder="Confirm Password"
                      extraClass="shadow-2xl transition-all duration-300"
                      icon={icons.register.confirmPassword}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="mt-7">
                    <Input
                      compType="loginSimple"
                      type="text"
                      value={signInUsername}
                      logicOnChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setSignInUsername(e.target.value.toLowerCase());
                      }}
                      placeholder="Username"
                      extraClass="shadow-2xl transition-all duration-300"
                      icon={icons.login.name}
                    />
                  </div>
                  <div className="mt-7">
                    <Input
                      compType="loginSimple"
                      type="text"
                      value={signInPassword}
                      onChange={setSignInPassword}
                      placeholder="Password"
                      extraClass="shadow-2xl transition-all duration-300"
                      icon={icons.login.password}
                    />
                  </div>
                </>
              )}

              <div className="mt-6">
                <button
                  className="w-full px-6 py-3 text-sm font-medium tracking-wide outline-none transform  rounded-lg hover:shadow-2xl transition-all duration-200 ease-in-out bg-[#5145e7] hover:bg-[#3d34c0] text-white"
                  type="submit"
                >
                  {tab === "signin" ? "Login" : "Register"}
                </button>
                {tab === "signup" && (
                  <div className="mt-6 text-center flex justify-end">
                    <span className="text-sm ">
                      Already have an account?
                      <span
                        className="font-semibold hover:underline ml-1 cursor-pointer text-[#5145e7]"
                        onClick={() => {
                          setTab("signin");
                        }}
                      >
                        Sign In
                      </span>
                    </span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="w-2/3 h-full hidden lg:flex items-center justify-center">
        <img src={"/assets/images/SignUp.jpg"} alt="iChat" className="w-3/4" />
      </div>
    </div>
  );
};

export default Auth;

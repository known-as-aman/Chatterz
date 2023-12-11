import React, { useRef, useState } from "react";

const Otp = () => {

  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");

  const ib_1 = useRef(null);
  const ib_2 = useRef(null);
  const ib_3 = useRef(null);
  const ib_4 = useRef(null);

  const submitHandler = (e) =>{
    e.preventDefault();
  }

  const inputHandler = (e) =>{
    // console.log(e.nativeEvent.inputType);
    // console.log(e.nativeEvent.data);

    switch(e.target.id){

      default:{
        console.log("Invalid");
        break;
      }

      case "1st_ib":{ 
        if(e.nativeEvent.inputType === "insertText"){
          setOtp1(e.nativeEvent.data);
          ib_2.current.focus();
        }else if(e.nativeEvent.inputType === "deleteContentBackward" || e.nativeEvent.inputType === "deleteContentForward"){
          setOtp1("");
        }
        break;
      }

      case "2nd_ib":{
        if(e.nativeEvent.inputType === "insertText"){
          setOtp2(e.nativeEvent.data);
          ib_3.current.focus();
        }else if(e.nativeEvent.inputType === "deleteContentBackward" || e.nativeEvent.inputType === "deleteContentForward"){
            setOtp2("");
        }
        break;
      }

      case "3rd_ib":{
        if(e.nativeEvent.inputType === "insertText"){
          setOtp3(e.nativeEvent.data);
          ib_4.current.focus();
        }else if(e.nativeEvent.inputType === "deleteContentBackward" || e.nativeEvent.inputType === "deleteContentForward"){
            setOtp3("");
        }
        break;
      }

      case "4th_ib":{
        if(e.nativeEvent.inputType === "insertText"){
          setOtp4(e.nativeEvent.data);
        }else if(e.nativeEvent.inputType === "deleteContentBackward" || e.nativeEvent.inputType === "deleteContentForward"){
            setOtp4("");
        }
        break;
      }

    }
  }

  const backSpaceHandler = (e) =>{
    if(e.key === "Backspace"){
      switch(e.target.id){
        case "2nd_ib":{
          if(otp2 === ""){
            ib_1.current.focus();
          }
          break;
        }
        case "3rd_ib":{
          if(otp3 === ""){
            ib_2.current.focus();
          }
          break;
        }
        case "4th_ib":{
          if(otp4 === ""){
            ib_3.current.focus();
          }
          break;
        }
        default:{
          console.log("Invalid");
          break;
        }
      }
    }
  }

  return (
    <>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
        <div className="relative bg-white px-6 pt-10 pb-9 shadow-2xl shadow-gray-400 mx-auto w-full max-w-lg rounded-2xl">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="font-semibold text-3xl">
                <p>Email Verification</p>
              </div>
              <div className="flex flex-row text-sm font-medium text-gray-400">
                <p>We have sent a code to your email xyz@email.com </p>
              </div>
            </div>

            <div>
              <form
                onSubmit={(e) => {
                  submitHandler(e);
                }}
              >
                <div className="flex flex-col space-y-16">
                  <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                    <div className="w-16 h-16 ">
                      <input
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-400 text-lg bg-indigo-50 focus:bg-gray-50 focus:ring-1 ring-blue-700 focus:scale-105 transition-all duration-100 ease-in-out"
                        type="number"
                        id="1st_ib"
                        value={otp1}
                        onChange={(e)=>{inputHandler(e)}}
                        onKeyDown={(e)=>{backSpaceHandler(e)}}
                        ref={ib_1}
                      />
                    </div>
                    <div className="w-16 h-16 ">
                      <input
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-400 text-lg bg-indigo-50 focus:bg-gray-50 focus:ring-1 ring-blue-700 focus:scale-105 transition-all duration-100 ease-in-out"
                        type="number"
                        id="2nd_ib"
                        value={otp2}
                        onChange={(e)=>{inputHandler(e)}}
                        onKeyDown={(e)=>{backSpaceHandler(e)}}
                        ref={ib_2}
                      />
                    </div>
                    <div className="w-16 h-16 ">
                      <input
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-400 text-lg bg-indigo-50 focus:bg-gray-50 focus:ring-1 ring-blue-700 focus:scale-105 transition-all duration-100 ease-in-out"
                        type="number"
                        id="3rd_ib"
                        value={otp3}
                        onChange={(e)=>{inputHandler(e)}}
                        onKeyDown={(e)=>{backSpaceHandler(e)}}
                        ref={ib_3}
                      />
                    </div>
                    <div className="w-16 h-16 ">
                      <input
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-400 text-lg bg-indigo-50 focus:bg-gray-50 focus:ring-1 ring-blue-700 focus:scale-105 transition-all duration-100 ease-in-out"
                        type="number"
                        id="4th_ib"
                        value={otp4}
                        onChange={(e)=>{inputHandler(e)}}
                        onKeyDown={(e)=>{backSpaceHandler(e)}}
                        ref={ib_4}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-5">
                    <div>
                      <button className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white font-medium text-sm shadow-sm hover:scale-95 transition-all duration-300 ease-in-out" onClick={()=>{console.log("Verify")}}>
                        Verify Account
                      </button>
                    </div>

                    <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                      <p>Didn't recieve code?</p>
                      <a
                        className="flex flex-row items-center text-blue-600 hover:text-blue-800"
                        href="/"
                        target="_blank"
                      >
                        Resend
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otp;
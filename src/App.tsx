import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContextProvider from "./context/contextProvider";
import "./App.css";
import Auth from "./Screen/auth";
import Home from "./Screen/home";
// import Otp from "./Screen/otp";
import Main from "./Screen/main";
import Connection from "./Screen/Connections";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/home" element={<Home />} />
          <Route path="/connection" element={<Connection />} />
          {/* <Route path="/verifyotp" element={<Otp />} /> */}
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;

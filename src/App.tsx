import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/page";
import Home from "./pages/home/page";
import Profile from "./pages/profile/page";
import Signup from "./pages/signup/page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      {/* <Route path='#' element={#}/> */}
    </Routes>
  );
}

export default App;

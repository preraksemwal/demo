import {BrowserRouter, Navigate, Route, Router, Routes} from "react-router-dom";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Welcome from "./components/Welcome.jsx";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Navigate to={"/login"}/>}/>
          <Route path={"/login"} element={<Login/>}/>

          <Route path="/signup" element={<Signup/>}/>
          <Route path="/welcome" element={<Welcome/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App;
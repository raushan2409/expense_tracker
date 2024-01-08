import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import Navbar from "../Pages/Navbar";
import RegistrationPageByme from "../Pages/RegistrationPageByme";

export default function AllRoutes() {
  const athCtx = useContext(AuthContext);
  const isLoggedIn = athCtx.isLoggedIn;
  console.log("islogged in value inside allroutes",isLoggedIn);

  return (
    <Routes>
      {isLoggedIn ? <Route path="/homepage" element={<Navbar />} /> :<Route path="/" element={<RegistrationPageByme />}/>  }
      <Route path="*" element={<RegistrationPageByme />}/>
    </Routes>
  );
}

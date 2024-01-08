import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import Navbar from "../Pages/Navbar";
import RegistrationPageByme from "../Pages/RegistrationPageByme";
import ProfileForm from "../Pages/ProfileForm";

export default function AllRoutes() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <Routes>
      {isLoggedIn ? (
        <>
          <Route path="/" element={<Navigate to="/homepage" />} />
          <Route path="/homepage" element={<Navbar />} />
          <Route path="/completeProfile" element={<ProfileForm />} />
        </>
      ) : (
        <Route path="/" element={<RegistrationPageByme />} />
      )}
      <Route path="*" element={<RegistrationPageByme />} />
    </Routes>
  );
}

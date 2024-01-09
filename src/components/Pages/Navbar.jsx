import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const verifyEmail = async () => {
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyB4n3mxcRsx9p4NlhU9Pawi75LNOUgQkr8";

    let token = localStorage.getItem("idToken") || null;

    if (!token) {
      console.error("Token not found");
      return;
    }
    let obj = {
      requestType: "VERIFY_EMAIL",
      idToken: token,
    };

    try {
      const response = await axios.post(url, obj, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Response in verify mail", response);
    } catch (error) {
      console.log("Error in email handling", error);
    }
  };
  // let email = localStorage.getItem("email");
  // console.log("email is ", email);

  return (
    <>
      <div className="max-w-[auto] flex justify-between bg-slate-300 p-3  shadow-lg shadow-indigo-500/40 ">
        <p className="text-2xl font-serif"> Welcome to Expense Tracker</p>
        <div className="flex mx-1">
          <div className="bg-[#e7dada] h-10 max-h-[auto] italic rounded-lg p-1 text-[13px] font-medium mx-2 ">
            Your profile is incomplete.{" "}
            <Link className="blue text-blue-600" to="/completeProfile">
              Complete now
            </Link>
          </div>
          <button
            onClick={verifyEmail}
            type="button"
            className=" text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Verify Your Email
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <>
      <div className="max-w-[auto] flex justify-between bg-slate-300 p-3  shadow-lg shadow-indigo-500/40 ">
        <p className="text-2xl font-serif"> Welcome to Expense Tracker</p>
        <div className="bg-[#e7dada] italic rounded-lg p-1 text-[13px] font-serif" >Your profile is incomplete. <Link className="blue text-blue-600" to="/completeProfile">Complete now</Link> </div>
      </div>
    </>
  );
}

export default Navbar;

import axios from "axios";
import React, { createContext, useState } from "react";

const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  email: "",
  delete: () => {},
});

export const AuthContextProdvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("idToken"));
  const userIsLoggedIn = !!token;

  const logoutHandler = () => {
    localStorage.removeItem("idToken");
    // setToken(null);
    setToken("");
    // localStorage.removeItem("email");
  };
  console.log("user is logged ", userIsLoggedIn);

  const loginHandler = (token) => {
    setToken(token);
  };
  const expenseHandler = (expense) => {
    // console.log("Inside expense handler fun");
    // console.log("expense inside api ", expense);
  };

  const deleteHandler = async (id) => {
    const url = `https://expense-tracker-b82dc-default-rtdb.firebaseio.com/${id}.json`;
    try {
      const responseInDeleteHandler = await axios.delete(url);
      console.log("respindelfun", responseInDeleteHandler);
    } catch (error) {
      console.log("Error in delete Handler in context API", error);
    }
  };

  const editDataInFirebase = async (obj, id) => {
    let url = `https://expense-tracker-b82dc-default-rtdb.firebaseio.com/${id}.json`;
    console.log("value of object before put request ",obj)
    try {
      const response = await axios.put(url, obj);
      console.log("Response in editDataInFirebase ", response);
    } catch (error) {
      console.log("Error in editDataInFirebase", error);
    }
  };

  
  const postDataToFirebase = async (obj) => {
    let url = `https://expense-tracker-b82dc-default-rtdb.firebaseio.com/.json`;
    console.log("Before posting obj in post data", obj);
    try {
      const response = await axios.post(url, obj);
      // console.log("response posted", response);
    } catch (error) {
      console.log("Error in postData", error);

      if (error.response) {
        console.log("Server responded with a non-2xx status");
        console.log("Response data:", error.response.data);
        console.log("HTTP status code:", error.response.status);
        console.log("Headers:", error.response.headers);
      } else if (error.request) {
        console.log("Request was made but no response was received");
        console.log("Request:", error.request);
      } else {
        console.log("Error during request setup:", error.message);
      }
      console.log("Error config:", error.config);
    }
  };

  const sumTotalExpense = (expense) => {
    const total = expense.reduce((acc, exp) => acc + parseFloat(exp.expAmt), 0);
    return total.toFixed(2);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    expenseHandler: expenseHandler,
    deleteHandle: deleteHandler,
    editHandle:editDataInFirebase,
    postDataToFirebase:postDataToFirebase,
    getTotalExpense:sumTotalExpense
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;

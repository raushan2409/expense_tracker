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
    console.log("Inside expense handler fun");
    console.log("expense inside api ", expense);
  };

  const deleteHandler = (items, id) => {};

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    expenseHandler: expenseHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;

import React, { createContext, useState } from "react";

const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  email: "",
  
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
  console.log("user is logged ",userIsLoggedIn);

  const loginHandler = (token) => {
    setToken(token);
  };

  const contextValue = {
    token:token,
    isLoggedIn:userIsLoggedIn,
    login:loginHandler,
    logout:logoutHandler
  }
  return (
    <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
  )

};
export default AuthContext;

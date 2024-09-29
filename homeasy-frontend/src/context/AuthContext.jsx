import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(() =>
    sessionStorage.getItem("userRole")
  ); // null , 'customer', 'service_provider'

  useEffect(() => {
    if (userRole) {
      sessionStorage.setItem("userRole", userRole);
    } else {
      sessionStorage.removeItem("userRole");
    }
  }, [userRole]);

  const LoginAsCustomer = () => {
    console.log("LoginAsCustomer");
    setUserRole("customer");
    //Google Oauth login logic goes here
    window.location.href = "https://homeasy.onrender.com/auth/google?role=customer";
  };

  const LoginAsServiceProvider = () => {
    console.log("LoginAsServiceProvider");
    setUserRole("service_provider");
    //Implement Service Provider login logic here
    window.location.href =
      "https://homeasy.onrender.com/auth/google?role=service_provider";
  };

  const logout = () => {
    setUserRole(null);
    sessionStorage.removeItem("userRole");
    //Implement Logout Logic here
    window.location.href = "https://homeasy.onrender.com/logout";
  };

  return (
    <AuthContext.Provider
      value={{ userRole, LoginAsCustomer, LoginAsServiceProvider, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(AuthContext);

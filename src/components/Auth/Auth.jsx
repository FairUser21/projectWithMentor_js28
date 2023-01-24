import React from "react";
import { useAuth } from "../../contexts/AuthContextProvider";

const Auth = () => {
  const {
    email,
    password,
    user,

    emailError,
    passwordError,
    hasAccount,

    setEmail,
    setPassword,
    setHasAccount,

    handleLogIn,
    handleSignUp,
    handleLogOut,
    
  } = useAuth();

  return <div></div>;
};

export default Auth;

import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FireBaseContext from "../context/FirebaseContext";

function Login() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInValid = password === "" || email === "";

  const { firebase } = useContext(FireBaseContext);

  const handdleLogin = () => {};

  useEffect(() => {
    document.title = "Login - Instagram-clone";
  }, []);

  return <div>Login</div>;
}

export default Login;

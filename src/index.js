import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import FireBaseContext from "./context/FirebaseContext";
import { firebaseInit, FieldValue } from "./libs/firebaseLib";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FireBaseContext.Provider value={{ firebaseInit, FieldValue }}>
      <App />
    </FireBaseContext.Provider>
  </React.StrictMode>
);

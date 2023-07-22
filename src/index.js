import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "bootstrap/dist/css/bootstrap.min.css";
const firebaseConfig = {
  apiKey: "AIzaSyCC4RXvsKGCroLt2LsyDe-Q0gE5cXoozLg",
  authDomain: "chat-app-a86bf.firebaseapp.com",
  projectId: "chat-app-a86bf",
  storageBucket: "chat-app-a86bf.appspot.com",
  messagingSenderId: "498544151415",
  appId: "1:498544151415:web:98a46df01549005a272f72",
  measurementId: "G-PL4WF01G00",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

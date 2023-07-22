import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SignInPage } from "./authentication";
import NavBar from "./navigation/NavBar";
import "./Styles/SignInPage.css";
import "./Styles/NavBar.css";
import { ChatLists } from "./chats/ChatLists";
import { ProtectRoute } from "./authentication/ProtectRoute";

function AppRoutes({ user }) {
  return (
    <Router>
      <NavBar user={user}></NavBar>
      <Routes>
        <Route element={<ProtectRoute user={user} />}>
          <Route path="/" element={<ChatLists />} />
        </Route>
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;

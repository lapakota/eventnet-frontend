import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./main/Main";
import { Registration } from "./register/Registration";
import { Login } from "./login/Login";
import EventCreation from "./eventCreation/EventCreation";
import "./App.css";
import { ResetPassword } from "./resetPassword/ResetPassword";
import Header from "./shared/Header/Header";
import Profile from "./profile/Profile/Profile";
import { MainStore } from "./stores/MainStore";
import { observer } from "mobx-react-lite";

interface AppProps {
  store: MainStore;
}
export const App: React.FC<AppProps> = observer<AppProps>(({ store }) => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/register"
            element={<Registration userStore={store.userStore} />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/login"
            element={<Login userStore={store.userStore} />}
          />
          <Route
            path="/resetPassword"
            element={<ResetPassword userStore={store.userStore} />}
          />
          <Route path="/event-creation" element={<EventCreation />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
});

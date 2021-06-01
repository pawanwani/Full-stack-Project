import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import SignupPage from "./components/SignupPage";
import store from "./store/Store";
import LandingPage from "./landingpage"
import Landing from "./components/landing"

function App() {
  return (
    <Provider store={store}>
          <div>
            <Landing></Landing>
          {/* <LandingPage/> */}
            {/* <SignupPage /> */}
           
          </div>
    </Provider>
  );
}

export default App;

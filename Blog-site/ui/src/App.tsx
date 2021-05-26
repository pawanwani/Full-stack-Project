import React from "react";
import { Provider } from "react-redux";
import "./App.css";

import SignupPage from "./components/SignupPage";
import store from "./store/Store";



function App() {
  return (
    <Provider store={store}>
          <div>
            <SignupPage />
          </div>
    </Provider>
  );
}

export default App;

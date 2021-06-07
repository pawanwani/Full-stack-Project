import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import { Route, BrowserRouter as Router , Switch } from 'react-router-dom'
import SignupPage from "./components/pages/SignupPage";
import store from "./store/Store";
import LoginPage from "./components/pages/LoginPage";
import Landing from "./components/pages/LandingPage";
import Navbar from './components/screens/navbar';
import Showall from './components/screens/Showall';
import WEditor from "./components/post/draft-wyang";



function App() {
  return (
    <Provider store={store}>
      <Navbar />
          <Router>
              <Switch>
                <Route path = "/user/signup">
                    <SignupPage />
                </Route>
                <Route path = "/user/login">
                    <LoginPage/>
                </Route>
                <Route exact path = "/">
                    <Landing/>
                </Route>
                <Route path = "/showall">
                  <Showall />
                </Route>
                <Route path = "/addpost">
                  <WEditor /> 
                </Route>                  
              </Switch>
          </Router>
    </Provider>
  );
}

export default App;

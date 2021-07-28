import React, { Fragment, Suspense } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

//pages
import LandingPage from "./pages/landingpage";
import RegisterPage from "./pages/registerpage";

//components
import Header from "./components/header";
import Footer from "./components/footer";
import InputField from "./components/inputField";
import SignInBtn from "./components/signInBtn";
import SignUpBtn from "./components/signUpBtn";

//styling
import "../components/styling/main.scss";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Fragment>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/register" component={RegisterPage} />
            </Switch>
          </Suspense>
        </Fragment>
      </Router>
    </div>
  );
};

export default App;

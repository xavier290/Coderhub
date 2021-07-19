import React, { Fragment, Suspense } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

//pages
import LandingPage from "./pages/landingpage";
import RegisterPage from "./pages/registerpage";

//components
import Header from "./components/header";
import Footer from "./components/footer";

//styling
import "../components/styling/main.scss";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Fragment>
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/register" component={RegisterPage} />
            </Switch>
          </Suspense>
          <Footer />
        </Fragment>
      </Router>
    </div>
  );
};

export default App;

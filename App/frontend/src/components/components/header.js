import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import SignInBtn from "./signInBtn";
import SignUpBtn from "./signUpBtn";

const Header = () => {
  return (
    <Fragment>
      <header className="header">
        <div className="logo">
          <Link to="/">CoderHub</Link>
        </div>

      </header>
    </Fragment>
  );
};

export default Header;

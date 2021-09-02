import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "./button";


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

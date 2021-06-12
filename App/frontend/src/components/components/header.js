import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Fragment>
      <header className="header">
        <div className="logo">
          <Link to="/">CoderHub</Link>
        </div>
        <button>
          <Link to="/">Login</Link>
        </button>
      </header>
    </Fragment>
  );
};

export default Header;

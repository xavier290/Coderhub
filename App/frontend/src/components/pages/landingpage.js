import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <Fragment>
      <div className="content">
        <section className="index">
          <div className="logo">
            <Link to="/">CoderHub</Link>
          </div>
          <h2>Share, Interact, Connect with Others</h2>
          <p>
            Join Our community where you can share your projects, get feedback
            and interact with other programmers to grow together.
          </p>
          <div className="btn">
            <button>
              <Link to="/">Get Started</Link>
            </button>
          </div>
        </section>
        <section className="share"></section>
        <section className="reviews"></section>
        <section className="messages"></section>
      </div>
    </Fragment>
  );
};

export default LandingPage;

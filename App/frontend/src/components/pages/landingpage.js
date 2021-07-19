import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import share from "../../imgs/share.svg";
import reviews from "../../imgs/reviews.svg";
import messages from "../../imgs/messages.svg";

import Footer from "../components/footer";

const LandingPage = () => {
  return (
    <Fragment>
      <div className="content">
        <section className="index">
          <div className="index-cnt">
            <div className="logo">
              <Link to="/">CoderHub</Link>
            </div>
            <div className="login">
              <button>
                <Link to="/">Login</Link>
              </button>
            </div>
            <h2>Share, Interact, Connect with Others</h2>
            <p>
              Join Our community where you can share your projects, get feedback
              and interact with other programmers to grow together.
            </p>
            <div className="register">
              <button>
                <Link to="/register">Get Started</Link>
              </button>
            </div>
          </div>
        </section>
        <section className="cnt share">
          <div className="img">
            <img src={share} alt="" />
          </div>
          <p>
            Share anything that you want, wether it is for work, with your
            friends or your family
          </p>
        </section>
        <section className="cnt reviews">
          <div className="img">
            <img src={reviews} alt="" />
          </div>
          <p>
            Make your profile look good, share your awesome projects and receive
            reviews to improve your work
          </p>
        </section>
        <section className="cnt messages">
          <div className="img">
            <img src={messages} alt="" />
          </div>
          <p>Get in touch with anyone in the world with just one click!</p>
        </section>
        <Footer />
      </div>
    </Fragment>
  );
};

export default LandingPage;

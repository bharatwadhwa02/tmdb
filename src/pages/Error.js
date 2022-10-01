import React from "react";
import error from "../picture/error.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <img src={error} alt="" />
        <h1>oops! it's a dead end</h1>
        <Link className="btn" to="/">
          back to home
        </Link>
      </div>
    </section>
  );
};

export default Home;

import React from "react";
import "../css/Footer.css";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="title">
        <h1>TMDB</h1>
        <h2>
          <a href="">
            <FaGithub />
          </a>
        </h2>
      </div>

      <div className="tmdb">
        <div className="tmdb-title">
          <p>
            <i>
              <b>Data provided by</b>
            </i>
          </p>
        </div>

        <div className="tmdb-image">
          <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" />
        </div>
      </div>

      <div className="signature">
        <p>Made with ❤️ by Bharat Wadhwa</p>
      </div>
    </div>
  );
};

export default Footer;

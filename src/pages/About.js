import React from "react";
import "../css/About.css";
const Home = () => {
  return (
    <div className="about-page">
      <h1 className="about-heading">Let's talk about TMDB</h1>
      <p className="intro">
        The Movie Database (TMDB) is a community built movie and TV database.
        Every piece of data has been added by our amazing community dating back
        to 2008. TMDb's strong international focus and breadth of data is
        largely unmatched and something we're incredibly proud of. Put simply,
        we live and breathe community and that's precisely what makes us
        different.
      </p>
      <h2 className="about-heading">The TMDB Advantage</h2>
      <ol>
        <li>
          1. Every year since 2008, the number of contributions to our database
          has increased. With over 400,000 developers and companies using our
          platform, TMDB has become a premiere source for metadata.
        </li>
        <li>
          2. Along with extensive metadata for movies, TV shows and people, we
          also offer one of the best selections of high resolution posters and
          fanart. On average, over 1,000 images are added every single day.
        </li>
        <li>
          3. We're international. While we officially support 39 languages we
          also have extensive regional data. Every single day TMDB is used in
          over 180 countries i.e; India , America , Australia , Canada, etc.
        </li>
        <li>
          4. Our community is second to none. Between our staff and community
          moderators, we're always here to help. We're passionate about making
          sure your experience on TMDB is nothing short of amazing.
        </li>
        <li>
          5. Trusted platform. Every single day our service is used by millions
          of people while we process over 3 billion requests. We've proven for
          years that this is a service that can be trusted and relied on.
        </li>
      </ol>
    </div>
  );
};

export default Home;

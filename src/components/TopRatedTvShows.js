import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const url =
  "https://api.themoviedb.org/3/tv/top_rated?api_key=470d80614aa92b4f5d65546db38f79ca";
const TopRatedTvShows = () => {
  const [topRatedTvShows, setTopRatedTvShows] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTopRatedTvShows(data.results));
  }, []);
  return (
    <div className="topRated-tvShows">
      <h2>Top Rated Tv-shows</h2>
      <div className="media-scroller">
        <div className="media-element">
          {topRatedTvShows.map((movie) => {
            const { id, original_title, poster_path } = movie;
            return (
              <div key={id} className="item">
                <Link to={`/tv/${id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/original${poster_path}`}
                    alt={original_title}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopRatedTvShows;

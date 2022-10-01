import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const url =
  "https://api.themoviedb.org/3/tv/popular?api_key=470d80614aa92b4f5d65546db38f79ca";
const TrendingTvShows = () => {
  const [trendingTvShows, setTrendingTvShows] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTrendingTvShows(data.results));
  }, []);
  return (
    <div className="trending-tvShows">
      <h2>Trending Tv-shows</h2>
      <div className="media-scroller">
        <div className="media-element">
          {trendingTvShows.map((movie) => {
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

export default TrendingTvShows;

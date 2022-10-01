import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const url =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=470d80614aa92b4f5d65546db38f79ca";
const TopRatedMovies = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTopRatedMovies(data.results));
  }, []);
  return (
    <div className="topRated-movies">
      <h2>Top Rated Movies</h2>
      <div className="media-scroller">
        <div className="media-element">
          {topRatedMovies.map((movie) => {
            const { id, original_title, poster_path } = movie;
            return (
              <div key={id} className="item">
                <Link to={`/movie/${id}`}>
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

export default TopRatedMovies;

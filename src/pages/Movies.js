import React, { useEffect, useState } from "react";
import "../css/Movies.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const searchURL = "https://api.themoviedb.org/3/search/multi?api_key=";
const API_KEY = "470d80614aa92b4f5d65546db38f79ca";
const picURL = "https://image.tmdb.org/t/p/original/";
const Movies = () => {
  const [list, setList] = useState([]);
  const { term } = useParams();

  const validList = list.filter(
    (item) =>
      (item.media_type === "movie" || item.media_type === "tv") &&
      item.poster_path &&
      item.overview
  );
  console.log(validList);

  const fetchSearch = async () => {
    const response = await fetch(
      `${searchURL}${API_KEY}&language=en-US&page=1&include_adult=false&query=${term}`
    );
    const data = await response.json();
    setList(data.results);
  };
  // console.log(list);
  useEffect(() => {
    fetchSearch();
  }, [term]);
  return (
    <div className="search-page">
      <div className="term">
        <h2>
          You searched for <span>"{term}"</span>
        </h2>
      </div>
      <div className="list">
        {validList &&
          validList.map((item) => {
            return (
              <div className="single-movie">
                <Link to={`/${item.media_type}/${item.id}`}>
                  <img src={`${picURL}${item.poster_path}`} alt="" />
                </Link>
                <div className="single-movie-title">
                  <h6>
                    {item.title}
                    {item.name}
                    <span>
                      (
                      {new Date(item.first_air_date).getFullYear() ||
                        new Date(item.release_date).getFullYear()}
                      )
                    </span>
                  </h6>
                  <p>{item.overview}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Movies;

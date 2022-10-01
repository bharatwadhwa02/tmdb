import React, { useState, useEffect } from "react";
import "../css/SingleMovie.css";
import "../css/SingleTv.css";
import Youtube from "react-youtube";
import { useParams } from "react-router-dom";
const API_KEY = "470d80614aa92b4f5d65546db38f79ca";
const detailURL = "https://api.themoviedb.org/3/tv/";
const picURL = "https://image.tmdb.org/t/p/original/";
const trailerURL = "https://api.themoviedb.org/3/tv/";
const creditURL = "https://api.themoviedb.org/3/tv/";
const seasonsURL = "https://api.themoviedb.org/3/tv/";

const SingleTv = () => {
  const { id } = useParams();
  const [tv, setTv] = useState([]);
  const [cast, setCast] = useState([]);
  // const [seasons, setSeasons] = useState([]);
  const [videos, setVideos] = useState([]);

  const trailers = videos.filter((video) => video.type === "Trailer");
  const trailer = trailers.slice(0, 1);

  const opts = {
    height: "450",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const fetchTv = async () => {
    try {
      const response = await fetch(`${detailURL}${id}?api_key=${API_KEY}`);
      const data = await response.json();
      const {
        name: title,
        tagline,
        episode_run_time: runtime,
        genres,
        overview: intro,
        poster_path: pic,
        backdrop_path: bg_img,
        first_air_date: release_date,
        status,
        production_countries: countries,
        spoken_languages: languages,
        production_companies: companies,
        created_by: creators,
        seasons,
      } = data;

      const newTv = {
        title,
        tagline,
        runtime,
        genres,
        intro,
        pic,
        bg_img,
        release_date,
        status,
        countries,
        languages,
        companies,
        creators,
        seasons,
      };

      setTv(newTv);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCredits = async () => {
    try {
      const response = await fetch(
        `${creditURL}${id}/credits?api_key=${API_KEY}&language=en-US`
      );
      const data = await response.json();

      setCast(data.cast.slice(0, 7));
    } catch (error) {
      console.log(error);
    }
  };
  const fetchTrailerUrl = async () => {
    try {
      const response = await fetch(
        `${trailerURL}${id}/videos?api_key=${API_KEY}`
      );
      const data = await response.json();

      setVideos(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTv();
    fetchCredits();
    fetchTrailerUrl();
  }, [detailURL]);

  const {
    title,
    tagline,
    runtime,
    genres,
    intro,
    pic,
    bg_img,
    release_date,
    status,
    countries,
    languages,
    companies,
    creators,
    seasons,
  } = tv;
  document.title = title;
  return (
    <div>
      <div className="movie">
        <div className="movie-intro">
          <img className="movie-backdrop" src={`${picURL}${bg_img}`} alt="" />
        </div>
        <div className="movie-detail">
          <div className="movie-detailLeft">
            <div className="movie-posterBox">
              <img className="movie-poster" src={`${picURL}${pic}`} alt="" />
            </div>
          </div>
          <div className="movie-detailRight">
            <div className="movie-detailRightTop">
              <div className="movie-name">
                <h1>{title}</h1>
              </div>
              <div className="movie-tagline">
                <h5>{tagline}</h5>
              </div>
              {runtime && (
                <div className="movie-runtime">{runtime} minutes</div>
              )}
              <div className="movies-genres">
                {genres && genres
                  ? genres.map((genre) => (
                      <>
                        <p className="movie-genre" key={genre.id}>
                          {genre.name}
                        </p>
                      </>
                    ))
                  : ""}
              </div>
              <div className="movie-overview">
                {intro && <h4>Overview</h4>}
                <p>{intro}</p>
              </div>
            </div>
            <div className="movie-detailRigthBottom">
              <div className="container">
                <div className="director">
                  <h4>Creators</h4>
                  {creators &&
                    creators.map((creator) => {
                      return (
                        <ul key={creator.id}>
                          <li>{creator.name}</li>
                        </ul>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-part">
        <div className="cast">
          <h3>Top Billed Cast</h3>
          <div className="cast-scroller">
            <div className="cast-element">
              {cast &&
                cast.map((item) => {
                  const { id, name, profile_path, character } = item;
                  return (
                    <div key={id} className="cast-item">
                      <img
                        src={`https://image.tmdb.org/t/p/original${profile_path}`}
                        alt={name}
                      />
                      <h4>{name}</h4>
                      <p>{character}</p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <hr />
        <div className="seasons">
          <h3>Seasons</h3>
          <div className="cast-scroller">
            <div className="cast-element">
              {seasons &&
                seasons.map((item) => {
                  const { id, name, episode_count, poster_path } = item;

                  return (
                    <div key={id} className="cast-item">
                      <img
                        src={`https://image.tmdb.org/t/p/original${poster_path}`}
                        alt={name}
                      />
                      <h5 style={{ color: "black" }}>{name}</h5>
                      <p style={{ color: "black" }}>{episode_count} episodes</p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <hr />
        <div className="details">
          <h3>Details</h3>
          <div id="detail">
            <h4>Release Date: </h4>
            <p>{release_date}</p>
          </div>

          <div id="detail">
            <h4>Status: </h4>
            <p>{status}</p>
          </div>

          <div id="detail">
            <h4>Origin:</h4>
            {countries &&
              countries.map((country) => {
                return (
                  <p key={country.iso_3166_1} className="detail-fill">
                    {country.name}
                  </p>
                );
              })}
          </div>

          <div id="detail">
            <h4>Language:</h4>
            {languages &&
              languages.map((language) => {
                return (
                  <p key={language.iso_639_1} className="detail-fill">
                    {language.english_name}
                  </p>
                );
              })}
          </div>
          <div id="detail">
            <h4>Production:</h4>
            {companies &&
              companies.map((company) => {
                return (
                  <p key={company.id} className="detail-fill">
                    {company.name}
                  </p>
                );
              })}
          </div>
        </div>
        <div className="trailer">
          <h3>Trailer</h3>

          {trailer &&
            trailer.map((item) => {
              return (
                <Youtube
                  width="10%"
                  className="trailer-video"
                  videoId={item.key}
                  opts={opts}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SingleTv;

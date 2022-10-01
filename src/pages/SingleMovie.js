import React, { useEffect, useState } from "react";
import "../css/SingleMovie.css";
import { useParams } from "react-router-dom";
import Youtube, { YouTubeProps } from "react-youtube";
const detail_url = "https://api.themoviedb.org/3/movie/";
const pic_url = "https://image.tmdb.org/t/p/original/";
const trailerURL = "https://api.themoviedb.org/3/movie/";
const API_KEY = "470d80614aa92b4f5d65546db38f79ca";
const SingleMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);
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

  const directors = crew.filter((item) => item.job === "Director");
  const writers = crew.filter((item) => item.department === "Writing");

  const fetchMovie = async () => {
    try {
      const response = await fetch(`${detail_url}${id}?api_key=${API_KEY}`);
      const data = await response.json();
      const {
        title: title,
        tagline: tagline,
        runtime: runtime,
        genres: genres,
        overview: intro,
        poster_path: pic,
        backdrop_path: bg_img,
        release_date,
        status,
        revenue,
        production_countries: countries,
        spoken_languages: languages,
        production_companies: companies,
      } = data;

      const newMovie = {
        title,
        tagline,
        runtime,
        genres,
        intro,
        pic,
        bg_img,
        release_date,
        status,
        revenue,
        countries,
        languages,
        companies,
      };

      setMovie(newMovie);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCredits = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
      );
      const data = await response.json();
      setCrew(data.crew);
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

  useEffect(
    () => {
      fetchMovie();
      fetchCredits();
      fetchTrailerUrl();
    },
    [id],
    [detail_url],
    [pic_url],
    [trailerURL]
  );

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
    revenue,
    countries,
    languages,
    companies,
  } = movie;

  document.title = title;

  return (
    <div>
      <div className="movie">
        <div className="movie-intro">
          <img className="movie-backdrop" src={`${pic_url}${bg_img}`} alt="" />
        </div>
        <div className="movie-detail">
          <div className="movie-detailLeft">
            <div className="movie-posterBox">
              <img className="movie-poster" src={`${pic_url}${pic}`} alt="" />
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
              <div className="movie-runtime">{runtime} mins</div>
              <div className="movies-genres">
                {movie && genres
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
                <h4>Overview</h4>
                <p>{intro}</p>
              </div>
            </div>
            <div className="movie-detailRigthBottom">
              <div className="container">
                <div className="director">
                  <h4>Directors</h4>
                  {directors.map((director) => {
                    return <p key={director.id}>{director.name}</p>;
                  })}
                </div>
                <div className="writers">
                  <h4>Writers</h4>
                  {writers &&
                    writers.map((writer) => {
                      return <span key={writer.id}>{writer.name} </span>;
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
            <h4>Revenue:</h4>
            <p>{revenue}</p>
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
              return <Youtube videoId={item.key} opts={opts} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;

import React from "react";
import SearchForm from "../components/SearchForm";
import TrendingMovies from "../components/TrendingMovies";
import TopRatedMovies from "../components/TopRatedMovies";
import TrendingTvShows from "../components/TrendingTvShows";
import TopRatedTvShows from "../components/TopRatedTvShows";
const Home = () => {
  return (
    <div>
      <SearchForm />
      <TrendingMovies />
      <TopRatedMovies />
      <TrendingTvShows />
      <TopRatedTvShows />
    </div>
  );
};

export default Home;

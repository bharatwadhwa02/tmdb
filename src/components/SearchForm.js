import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // const searchValue = useRef(null);

  // const searchMovie = () => {
  //   setSearchTerm(searchValue.current.value);
  // };
  const submitHandle = (e) => {
    e.preventDefault();
    setSearchTerm("");

    // searchValue.current.value = "";
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={submitHandle}>
        <div className="form-control">
          <label htmlFor="name">
            <h4 className="form-label">
              Welcome! Millions of movies, TV shows and people to discover.
              Explore now....
            </h4>
          </label>
          <input
            className="search-input"
            type="text"
            id="name"
            value={searchTerm}
            // ref={searchValue}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Link to={{ pathname: `/search/${searchTerm}` }}>
            <button type="submit" className="submit-btn">
              <FaSearch />
            </button>
          </Link>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;

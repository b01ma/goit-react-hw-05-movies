import css from './Searchbar.module.css';
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
// import PropTypes from 'prop-types';

const Searchbar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const { searchQuery } = params;

  const [query, setQuery] = useState(searchQuery || '');
  const prevQuery = usePrevious(query);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (query.trim() === '') {
      return;
    }

    if (prevQuery === query) {
      return;
    }

    setSearchParams({
      searchQuery: query,
      page: 1,
    });
  }

  return (
    <div className={css.form}>
      <form onSubmit={handleSubmit}>
        <input
          className={css.input}
          onChange={handleChange}
          value={query}
          type="text"
          autoComplete="off"
          placeholder="Search movie"
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;

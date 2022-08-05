import css from './Searchbar.module.css';
import React, { useState, useRef, useEffect } from 'react';
// import PropTypes from 'prop-types';

const Searchbar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

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

    onSearch(query);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={query}
          // className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          placeholder="Search movie"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Searchbar;

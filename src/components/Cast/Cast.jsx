import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_IMG_URL, getMovieCast } from 'service/moviesAPI';
import css from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId).then(result => setCast(result.data.cast));
  }, [movieId]);

  return (
    <div>
      <ul className={css.actorList}>
        {cast?.map(actor => {
          return (
            <li key={actor.id} className={css.actorItem}>
              <div>
                <img
                  src={`${BASE_IMG_URL}w200${actor.profile_path}`}
                  alt="Actor poster"
                />
              </div>
              <div className={css.actor}>
                <h5>Name:{actor.name}</h5>
                <h5>Role:{actor.character}</h5>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;

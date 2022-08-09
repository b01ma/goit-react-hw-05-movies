import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'service/moviesAPI';
import css from './Reviews.module.css';

const Review = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(result => setReviews(result.data.results));
  }, [movieId]);
  return (
    <ul>
      {reviews?.map(review => {
        return (
          <li key={review.id}>
            <p className={css.author}>Author: {review.author}</p>
            <p className={css.message}>{review.content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Review;

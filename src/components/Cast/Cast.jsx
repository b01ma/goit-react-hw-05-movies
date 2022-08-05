import React from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <div>
        <img src="#" alt="Actor poster" />
      </div>
      <div>
        <h5>Actors Name</h5>
        <h6>Actors role</h6>
      </div>
    </div>
  );
};

export default Cast;

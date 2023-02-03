import React from 'react';
import Tittle from './Tittle';
import Tour from './Tour';

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Tittle title="featured" title2="tours" />

      <Tour />
    </section>
  );
};

export default Tours;

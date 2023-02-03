import React from 'react';
import { toursData } from '../dataLink';

const Tour = () => {
  return (
    <div className="section-center featured-center">
      {toursData.map((data) => {
        const { id, image, date, title, text, location, duration, cost } = data;
        return (
          <article className="tour-card" key={id}>
            <div className="tour-img-container">
              <img src={image} className="tour-img" alt="" />
              <p className="tour-date">{date}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{title}</h4>
              </div>
              <p>{text}</p>
              <div className="tour-footer">
                <p>
                  <span>
                    <i className="fas fa-map"></i>
                  </span>{' '}
                  {location}
                </p>
                <p>{duration} days</p>
                <p>from ${cost}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Tour;

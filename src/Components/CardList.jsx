// CardList.jsx
import React from 'react';
import PropTypes from 'prop-types';
import BusinessCard from './BusinessCard';

const CardList = ({ businesses }) => {
  return (
    <div className="card-list-container">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {businesses.map((business) => (
          <div key={business._id} className="card-wrapper">
            <BusinessCard business={business} />
          </div>
        ))}
      </div>
    </div>
  );
};

CardList.propTypes = {
  businesses: PropTypes.array.isRequired,
};

export default CardList;




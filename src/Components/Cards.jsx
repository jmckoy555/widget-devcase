import React, { useState, useEffect } from 'react';
import CardList from './CardList';
import SortOptions from './SortOptions';
import FilterOptions from './FilterOptions';
import mockData from '../Data/data.json';

const Cards = () => {
  const [businesses, setBusinesses] = useState([]);
  const [sortBy, setSortBy] = useState('default');
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedDistance, setSelectedDistance] = useState([]);

  const distanceOptions = [
    { value: 1, label: '1 mile' },
    { value: 5, label: '5 miles' },
    { value: 10, label: '10 miles' },
    { value: 15, label: '15 miles' },
    { value: 25, label: '25 miles' },
    { value: 50, label: '50 miles' }
  ];

  useEffect(() => {
    // MOCK API
    setTimeout(() => {
      setBusinesses(mockData);
    }, 1000);
  }, [sortBy]);

  const handleSortChange = (value) => {
    setSortBy(value);
  };
  

  const handleServiceChange = (selectedOptions) => {
    const selectedValues = selectedOptions ? selectedOptions.map(option => option.value) : [];
    setSelectedServices(selectedValues);
  };

  const handleDistanceChange = (selectedOptions) => {
    const selectedValues = selectedOptions ? selectedOptions.map(option => option.value) : [];
    setSelectedDistance(selectedValues);
  };

  const clearSelectedFilters = () => {
    setSelectedServices([]);
    setSelectedDistance([]);
  };

  const sortBusinesses = (businesses) => {
    if (sortBy === 'highestToLowest') {
      return businesses.slice().sort((a, b) => b.review_score - a.review_score);
    } else if (sortBy === 'lowestToHighest') {
      return businesses.slice().sort((a, b) => a.review_score - b.review_score);
    } else {
      return businesses;
    }
  };

  const filterBusinessesByServices = (businesses) => {
    if (selectedServices.length === 0) return businesses;
    return businesses.filter(business =>
      selectedServices.every(service => business.services.includes(service))
    );
  };

  const filterBusinessesByDistance = (businesses) => {
    if (selectedDistance.length === 0) return businesses;
    return businesses.filter(business =>
      selectedDistance.some(distance => business.distance >= distance)
    );
  };

  const allServices = mockData.flatMap(business => business.services)
    .reduce((acc, service) => {
      if (!acc.includes(service)) {
        acc.push(service);
      }
      return acc;
    }, []);

  return (
    <div className="container">
      <div className="options-container">
        <SortOptions handleSortChange={handleSortChange} />
        <FilterOptions
          services={allServices}
          selectedServices={selectedServices}
          handleServiceChange={handleServiceChange}
          distanceOptions={distanceOptions}
          selectedDistance={selectedDistance}
          handleDistanceChange={handleDistanceChange}
          clearSelectedServices={clearSelectedFilters}
        />
      </div>
      <div className="card-list mt-8">
        <CardList businesses={filterBusinessesByDistance(filterBusinessesByServices(sortBusinesses(businesses)))} />
      </div>
    </div>
    
  );
};

export default Cards;
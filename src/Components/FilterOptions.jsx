import React, { useState } from 'react';
import Select from 'react-select';
import { IoIosArrowDown } from 'react-icons/io';

const FilterOptions = ({ services, selectedServices, handleServiceChange, distanceOptions, selectedDistance, handleDistanceChange }) => {
  const [servicesVisible, setServicesVisible] = useState(false);
  const [distanceVisible, setDistanceVisible] = useState(false);

  const toggleServices = () => {
    setServicesVisible(!servicesVisible);
  };

  const toggleDistance = () => {
    setDistanceVisible(!distanceVisible);
  };

  const serviceOptions = services.map(service => ({ value: service, label: service }));

  return (
    <div className="filter-options">
    <div className="filter-services">
    <div className="filter-header" onClick={toggleServices}>
        <label>SERVICES OFFERED</label>
        <IoIosArrowDown className={`arrow-icon ${servicesVisible ? 'open' : ''}`} />
      </div>
      {servicesVisible && (
        <Select
          options={serviceOptions}
          isMulti
          value={selectedServices.map(service => ({ value: service, label: service }))}
          onChange={handleServiceChange}
          className="filter-select"
        />
      )}
    </div>
      <div className='filter-distance'>
      <div className="filter-header" onClick={toggleDistance}>
        <label>DISTANCE</label>
        <IoIosArrowDown className={`arrow-icon ${distanceVisible ? 'open' : ''}`} />
      </div>
      {distanceVisible && (
        <Select
          options={distanceOptions}
          isMulti
          value={selectedDistance.map(distance => ({ value: distance, label: `${distance} miles` }))}
          onChange={handleDistanceChange}
          className="filter-select"
        />
      )}
      </div>
    </div>
  );
};

export default FilterOptions;






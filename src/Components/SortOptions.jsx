import React, { useState } from 'react';
import Select from 'react-select';
import { IoIosArrowDown } from 'react-icons/io';

const SortOptions = ({ handleSortChange }) => {
  const options = [
    { value: 'default', label: 'Default' },
    { value: 'highestToLowest', label: 'Highest to Lowest' },
    { value: 'lowestToHighest', label: 'Lowest to Highest' }
  ];

  const [sortByVisible, setSortByVisible] = useState(false);

  const toggleSortBy = () => {
    setSortByVisible(!sortByVisible);
  };

  return (
    <div className="sortBy-option">
      <div className="filter-header" onClick={toggleSortBy}>
        <label>STAR RATING</label>
        <IoIosArrowDown className={`arrow-icon ${sortByVisible ? 'open' : ''}`} />
      </div>
      {sortByVisible && (
        <Select
          options={options}
          onChange={(selectedOption) => handleSortChange(selectedOption ? selectedOption.value : null)}
          placeholder="Select"
          isClearable
          className="filter-select"
        />
      )}
    </div>
  );
};

export default SortOptions;









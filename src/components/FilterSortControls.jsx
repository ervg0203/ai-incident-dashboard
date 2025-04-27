import React from "react";

const FilterSortControls = ({ setFilter, setSortOrder }) => {
  return (
    <div className="filter-sort-controls">
      <h2>Reported Incidents</h2>
      <label>
        Filter by Severity:
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </label>
      <label>
        Sort by Date:
        <select onChange={(e) => setSortOrder(e.target.value)}>
          <option value="Newest First">Newest First</option>
          <option value="Oldest First">Oldest First</option>
        </select>
      </label>
    </div>
  );
};

export default FilterSortControls;

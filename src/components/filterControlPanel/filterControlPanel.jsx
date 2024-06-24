import React from "react";
import "./filterControlPanel.css"
const FilterControlPanel = ({sortYear, sortByName, sortByGenre, sortById}) => {

  return (
    <div className="adding">
      <div className="filter">
        <button className="btn" onClick={sortById}>Випадково</button>
        <button className="btn" onClick={sortByGenre}>За Жанром</button>
        <button className="btn" onClick={sortByName}>За Назвою</button>
        <button className="btn" onClick={sortYear}>За Роком Виходу</button>
      </div>
      
    </div>
  );
};

export default FilterControlPanel;

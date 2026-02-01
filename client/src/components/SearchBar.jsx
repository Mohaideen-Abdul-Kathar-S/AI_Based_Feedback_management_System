import React from "react";
import "../Styles/SearchBar.css";

export default function SearchBar() {
  let items = ["2025", "2024", "2023"];
  const [selectedYear, setSelectedYear] = React.useState('');
  const [searchQuery, setSearchQuery] = React.useState('');

  function handleYearChange(e) {
    console.log("Selected Year:", e.target.value);
    setSelectedYear(e.target.value);
  }
  function handleSearchChange(e) {
    console.log("Search Query:", e.target.value);
    setSearchQuery(e.target.value);
  }
  return (
    <div className="search-bar-row">
      <div className="select-wrapper">
        <select className="select-input" defaultValue="" onChange={handleYearChange}>
          <option value="" disabled hidden>
            Year
          </option>
          {items.map((item) => (
            <option key={item} value={item} >
              {item}
            </option>
          ))}
        </select>
      </div>

       <div className="search-input-wrapper">
    <span className="search-icon">🔍</span>
    <input
      type="text"
      className="mail-input"
      placeholder="Search..."
      onChange={handleSearchChange}
    />
  </div>
    </div>
  );
}

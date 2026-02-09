import React from 'react';
import '../Styles/SelectInputField.css';

export default function SelectInputField({title}) {
  let items = ["Option 1", "Option 2"];
const [selectedOption, setSelectedOption] = React.useState('');

function handleOptionChange(e) {
    console.log("Selected Option:", e.target.value);
    setSelectedOption(e.target.value);
  }
  return (
    <div className="select-wrapper">
      
       <h3>
      {title}
      </h3>
      <select className="select-input" defaultValue="" onChange={handleOptionChange}>
        <option value="" disabled hidden>
          Select
        </option>

        {items.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

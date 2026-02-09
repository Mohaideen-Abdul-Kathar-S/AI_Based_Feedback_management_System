import React, { useRef, useState } from 'react';
import '../Styles/DateInputField.css';

export default function DateInputField({title}) {
  const dateRef = useRef(null);

  const [date, setDate] = useState('');
   function handleDateChange(e) {
    console.log("Selected Date:", e.target.value);
    setDate(e.target.value);
  }

  return (
    <div className="date-wrapper">
      <h3>
      {title}
      </h3>
      <input
        ref={dateRef}
        type="date"
        className="date-input"
        onChange={handleDateChange}
      />

    </div>
  );
}

import React from 'react';
import ProgressCircle from './ProgressCircle.jsx';
import '../Styles/AnalyticalContainer.css';

export default function AnalyticalContainer() {
  return (
    <>
    <h3>AI Suggestion</h3>
    <div className="analytical-container">
      <ProgressCircle percentage={87} label="Accuracy" />
      <ProgressCircle percentage={42} label="Depth" />
      <ProgressCircle percentage={56} label="Understandable" />
    </div>
    </>
  );
}

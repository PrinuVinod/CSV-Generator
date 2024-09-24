import React, { useState } from 'react';

const InputForm = ({ onGenerateCsv }) => {
  const [lowerLimit, setLowerLimit] = useState('');
  const [upperLimit, setUpperLimit] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!lowerLimit || !upperLimit || parseInt(lowerLimit) > parseInt(upperLimit)) {
      alert('Please enter valid lower and upper limits');
      return;
    }
    onGenerateCsv(lowerLimit, upperLimit); // Pass values to parent
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Lower Limit:</label>
        <input
          type="number"
          value={lowerLimit}
          onChange={(e) => setLowerLimit(e.target.value)}
        />
      </div>
      <div>
        <label>Upper Limit:</label>
        <input
          type="number"
          value={upperLimit}
          onChange={(e) => setUpperLimit(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputForm;

import React, { useState } from 'react';
import InputForm from './Components/mainPage/InputForm';
import CsvGenerator from './Components/mainPage/CsvGenerator';

const App = () => {
  const [limits, setLimits] = useState({ lower: null, upper: null });

  const handleGenerateCsv = (lowerLimit, upperLimit) => {
    setLimits({ lower: lowerLimit, upper: upperLimit });
  };

  return (
    <div>
      <h1>CSV Generator</h1>
      <InputForm onGenerateCsv={handleGenerateCsv} />
      {/* Only show the CsvGenerator component if valid limits have been entered */}
      {limits.lower && limits.upper && (
        <CsvGenerator lowerLimit={limits.lower} upperLimit={limits.upper} />
      )}
    </div>
  );
};

export default App;

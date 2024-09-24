import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InputForm from './Components/mainPage/InputForm';
import CsvGenerator from './Components/mainPage/CsvGenerator';
import HomePage from './Components/Homepage/HomePage';

const App = () => {
  const [limits, setLimits] = useState({ lower: null, upper: null });

  const handleGenerateCsv = (lowerLimit, upperLimit) => {
    setLimits({ lower: lowerLimit, upper: upperLimit });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/csv-generator" 
          element={
            <div>
              <h1>CSV Generator</h1>
              <InputForm onGenerateCsv={handleGenerateCsv} />
              {/* Only show the CsvGenerator component if valid limits have been entered */}
              {limits.lower && limits.upper && (
                <CsvGenerator lowerLimit={limits.lower} upperLimit={limits.upper} />
              )}
            </div>
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;

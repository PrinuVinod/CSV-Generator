import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InputForm from './Components/mainPage/InputForm';
import CsvGenerator from './Components/mainPage/CsvGenerator';
import HomePage from './Components/HomePage/HomePage';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  const [formData, setFormData] = useState(null);

  const handleGenerateCsv = (data) => {
    setFormData(data);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/csv-generator"
          element={
            <div>
              <h1>CSV Generator</h1>
              <InputForm onGenerateCsv={handleGenerateCsv} />
              {/* Pass the full formData to CsvGenerator */}
              {formData && <CsvGenerator formData={formData} />}
            </div>
          }
        />
        <Route path="/home2" element={<div>Home2 Content</div>} />
        <Route path="/home3" element={<div>Home3 Content</div>} />
      </Routes>
    </Router>
  );
};

export default App;

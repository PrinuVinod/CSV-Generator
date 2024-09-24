import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InputForm from './Components/mainPage/InputForm';
import CsvGenerator from './Components/mainPage/CsvGenerator';
import HomePage from './Components/Homepage/HomePage';
import Navbar from './Components/Navbar/Navbar';
import { Box } from '@mui/material';

const App = () => {
  const [formData, setFormData] = useState(null);

  const handleGenerateCsv = (formData) => {
    setFormData(formData);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/csv-generator"
          element={
            <Box sx={{ p: 4 }}>
              <InputForm onGenerateCsv={handleGenerateCsv} />
              {/* Show the CsvGenerator button only if formData exists */}
              {formData && <CsvGenerator formData={formData} />}
            </Box>
          }
        />
        <Route path="/home2" element={<div>Home2 Content</div>} />
        <Route path="/home3" element={<div>Home3 Content</div>} />
      </Routes>
    </Router>
  );
};

export default App;

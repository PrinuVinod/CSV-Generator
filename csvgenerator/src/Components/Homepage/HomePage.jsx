import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the CsvGenerator component
    navigate('/csv-generator');
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      <Grid item>
        <Paper 
          elevation={3} 
          onClick={handleClick} 
          sx={{
            padding: '20px',
            cursor: 'pointer',
            backgroundColor: '#1976d2',  // Blue background color
            color: '#fff',               // White text color
            '&:hover': {
              backgroundColor: '#115293',  // Darker blue on hover
            },
          }}
        >
          <Typography variant="h5" component="div" align="center">
            1st CSV Generator
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default HomePage;

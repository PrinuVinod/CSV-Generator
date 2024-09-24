import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the CsvGenerator component
    navigate('/csv-generator');
  };

  return (
    <Box 
      sx={{
        position: 'fixed',   // Fix the Box to the viewport
        top: 0,
        left: 0,
        width: '100vw',      // Full width of the viewport
        height: '100vh',     // Full height of the viewport
        backgroundColor: '	#ffff',  // Background gradient
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 20px',
      }}
    >
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <Paper 
            elevation={5} 
            onClick={handleClick} 
            sx={{
              padding: '40px',
              cursor: 'pointer',
              backgroundColor: '#1976d2',  // Blue background color
              color: '#fff',
              textAlign: 'center',
              borderRadius: '15px',
              transition: 'transform 0.3s ease, background-color 0.3s ease', // Animation on hover
              '&:hover': {
                transform: 'scale(1.05)',  // Slight zoom on hover
                backgroundColor: '#115293',  // Darker blue on hover
              },
            }}
          >
            <Typography 
              variant="h4" 
              component="div" 
              gutterBottom
              sx={{
                fontWeight: 'bold',
                textTransform: 'uppercase',
              }}
            >
              CSV Generator
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Click to generate your CSV files instantly.
            </Typography>
            <ArrowForwardIosIcon sx={{ fontSize: '40px', color: '#fff' }} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;

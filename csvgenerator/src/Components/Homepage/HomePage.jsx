import React from 'react';
import { Box, Grid, Typography, Paper, colors } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const HomePage = () => {
  const navigate = useNavigate();

  const handleClickCsvGenerator = () => {
    // Navigate to the CsvGenerator component
    navigate('/csv-generator');
  };

  const handleClickAnotherGenerator = () => {
    // Navigate to the AnotherGenerator component
    navigate('/another-generator');
  };

  const paperStyle = {
    padding: '30px',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: '15px',
    transition: 'transform 0.3s ease, background-color 0.3s ease', 
    width: {
      xs: '250px',  // For small devices, set width to 250px
      sm: '300px',  // For larger screens, set width to 300px
      md: '300px',  // For medium screens, 300px width
      lg: '350px',  // For large screens, 350px width
    },
    height: {
      xs: '250px',  // For small devices, set height to 250px
      sm: '300px',  // For larger screens, set height to 300px
      md: '300px',  // For medium screens, 300px height
      lg: '150px',  // For large screens, 350px height
    }
  };

  return (
    <Box 
      sx={{
        position: 'fixed',   
        top: 0,
        left: 0,
        width: '100vw',      
        height: '100vh',     
        backgroundColor: '#ffff',  
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 20px',
      }}
    >
      <Grid 
        container 
        justifyContent="center" 
        alignItems="center"
        spacing={3}  
      >
        {/* CSV Generator Grid */}
        <Grid 
          item 
          xs={12}    
          sm={8}     
          md={6}     
          lg={4}     
          xl={3}
          sx={{}}
     
        >
          <Paper 
            elevation={5} 
            onClick={handleClickCsvGenerator} 
            sx={{
              ...paperStyle,
              backgroundColor: '#1976d2',  
              color:'white',
              '&:hover': {
                transform: 'scale(1.05)',  
                backgroundColor: '#115293',  
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

        {/* Another Generator Grid */}
        <Grid 
          item 
          xs={12}    
          sm={8}     
          md={6}     
          lg={4}     
          xl={3}     
        >
          <Paper 
            elevation={5} 
            onClick={handleClickAnotherGenerator} 
            sx={{
              ...paperStyle,
              backgroundColor: '#4caf50',  
              color:'white',
              '&:hover': {
                transform: 'scale(1.05)',  
                backgroundColor: '#388e3c',  
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
              Add Device
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Click to generate another type of file.
            </Typography>
            <ArrowForwardIosIcon sx={{ fontSize: '40px', color: '#fff' }} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;

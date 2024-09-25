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
        gap: '0px',
      }}
    >
      <Grid 
        container 
        justifyContent="center" 
        alignItems="center"
        spacing={3}  
        sx={{gap:10}}
      >
        {/* CSV Generator Grid */}
        <Grid 
          item 
          xs={12}    
          sm={8}     
          md={6}     
          lg={4}     
          xl={3}
          sx={{boxShadow:'none'}}
     
        >
          <Paper 
            elevation={5} 
            onClick={handleClickCsvGenerator} 
            sx={{
              ...paperStyle,
              background: 'linear-gradient(90deg, rgba(8,148,255,1) 0%, rgba(146, 206, 244, 1) 100%)', // Green gradient applied here
              color: 'white',
              '&:hover': {
                transform: 'scale(1.05)',  
                background: 'linear-gradient(50deg, rgba(91,148,255,1) 0%, rgba(186, 206, 244, 1) 100%)', // Hover background with same gradient
              
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
              Click to generate your CSV files for <b>Migration</b>.
            </Typography>
            <ArrowForwardIosIcon sx={{ fontSize: '40px', color: '#fff' }} />
          </Paper>
        </Grid>

        {/* Another Generator Grid */}
        {/* <Grid 
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
              background: 'linear-gradient(40deg, rgba(255, 27, 107, 1) 0%, rgba(157, 119, 185, 1) 100%)', // Green gradient applied here
              color: 'white',
              '&:hover': {
                transform: 'scale(1.05)',  
                background: 'linear-gradient(90deg, rgba(215, 27, 107, 1) 0%, rgba(127, 119, 185, 1) 100%)', // Hover background with same gradient
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
              Click to add Devices <b>Instantly </b>
            </Typography>
            <ArrowForwardIosIcon sx={{ fontSize: '40px', color: '#fff' }} />
          </Paper>
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default HomePage;

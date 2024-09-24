import React from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#ff4e4e', // Red background color
        padding: '0 30px', // Add horizontal padding for a cleaner look
        boxShadow: 'none', // Remove box shadow for a flat design
        height: '80px', // Set consistent height for the navbar
        justifyContent: 'center',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', height: '100%' }}>
        
        {/* Centered Company Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/logo.svg" // Replace with correct logo path
            alt="Company Logo"
            style={{ width: '250px', height: '60px' }} // Adjust logo size
          />
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

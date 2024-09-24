import React from 'react';
import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const navItems = [
    { name: 'CSV01', route: '/csv-generator' }, // Navigates to CSV Generator
    { name: 'Home2', route: '/home2' },
    { name: 'Home3', route: '/home3' },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#9fb6c3', // Gray color
        padding: '0 30px', // Add horizontal padding for a cleaner look
        boxShadow: 'none', // Remove box shadow for a flat design
        height: '80px', // Set consistent height for the navbar
        justifyContent: 'center',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
        
        {/* Company Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/logo.svg" // Replace with correct logo path
            alt="Company Logo"
            style={{ width: '250px', height: '60px', marginRight: '20px' }} // Adjust logo size
          />
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', gap: '30px' }}>
          {navItems.map((item) => (
            <Button
              key={item.name}
              onClick={() => navigate(item.route)}
              sx={{
                color: '#fff',
                fontSize: '16px',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: 'transparent',
                  borderBottom: '2px solid #fff', // Underline on hover
                },
              }}
            >
              {item.name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

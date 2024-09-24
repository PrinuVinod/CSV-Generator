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
        backgroundColor: '#8888',
        boxShadow: 'none',
        padding: '10px 0'
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        
        {/* Company Logo with Typography */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/logo.svg" // Correct path to your logo in the public folder
            alt="Company Logo"
            style={{ width: '250px', height: '60px', marginRight: '10px' }}
          />

        </Box>

        {/* Centered Navigation Links */}
        <Box sx={{ display: 'flex', gap: '20px' }}>
          {navItems.map((item) => (
            <Button
              key={item.name}
              onClick={() => navigate(item.route)}
              sx={{
                color: '#fff',
                fontSize: '16px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                position: 'relative',
                '&:hover': {
                  backgroundColor: 'transparent',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '100%',
                    height: '2px',
                    bottom: '-5px',
                    left: '0',
                    backgroundColor: '#fff',
                    transform: 'scaleX(1)',
                    transition: 'transform 0.3s ease',
                  },
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  width: '100%',
                  height: '2px',
                  bottom: '-5px',
                  left: '0',
                  backgroundColor: '#fff',
                  transform: 'scaleX(0)',
                  transition: 'transform 0.3s ease',
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

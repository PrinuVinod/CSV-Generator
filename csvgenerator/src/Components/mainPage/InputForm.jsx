import React, { useState } from 'react';
import { TextField, Button, Grid, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const InputForm = ({ onGenerateCsv }) => {
  const [lowerLimit, setLowerLimit] = useState('');
  const [upperLimit, setUpperLimit] = useState('');
  const [areaCode, setAreaCode] = useState('');
  const [calleridNumber, setCalleridNumber] = useState('');
  const [calleridName, setCalleridName] = useState('');
  const [callerid911, setCallerid911] = useState('');
  const [timezone, setTimezone] = useState('US/Central');
  const [scope, setScope] = useState('Basic User');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      lowerLimit,
      upperLimit,
      areaCode,
      calleridNumber,
      calleridName,
      callerid911,
      timezone,
      scope,
    };

    // Pass all form data to the parent component
    onGenerateCsv(formData);
  };

  return (
    <Box 
      component="form" 
      onSubmit={handleSubmit} 
      sx={{ margin: '100px', maxWidth: 600, mx: 'auto', p: 3, boxShadow: 3, borderRadius: 2, backgroundColor: '#fff' }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Lower Limit"
            type="number"
            fullWidth
            value={lowerLimit}
            onChange={(e) => setLowerLimit(e.target.value)}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Upper Limit"
            type="number"
            fullWidth
            value={upperLimit}
            onChange={(e) => setUpperLimit(e.target.value)}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Area Code"
            type="text"
            fullWidth
            value={areaCode}
            onChange={(e) => setAreaCode(e.target.value)}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Caller ID Number"
            type="text"
            fullWidth
            value={calleridNumber}
            onChange={(e) => setCalleridNumber(e.target.value)}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Caller ID Name"
            type="text"
            fullWidth
            value={calleridName}
            onChange={(e) => setCalleridName(e.target.value)}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="911 Caller ID"
            type="text"
            fullWidth
            value={callerid911}
            onChange={(e) => setCallerid911(e.target.value)}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Timezone</InputLabel>
            <Select
              value={timezone}
              label="Timezone"
              onChange={(e) => setTimezone(e.target.value)}
            >
              <MenuItem value="US/Central">US/Central</MenuItem>
              <MenuItem value="US/Mountain">US/Mountain</MenuItem>
              <MenuItem value="US/Pacific">US/Pacific</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Scope</InputLabel>
            <Select
              value={scope}
              label="Scope"
              onChange={(e) => setScope(e.target.value)}
            >
              <MenuItem value="Basic User">Basic User</MenuItem>
              <MenuItem value="Call Center Agent">Call Center Agent</MenuItem>
              <MenuItem value="Call Center Supervisor">Call Center Supervisor</MenuItem>
              <MenuItem value="Office Manager">Office Manager</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InputForm;

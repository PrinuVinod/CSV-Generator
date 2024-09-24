import React from 'react';
import Papa from 'papaparse';
import { Button, Box } from '@mui/material';
import { toWords } from 'number-to-words'; // Import the library

const CsvGenerator = ({ formData }) => {
  const {
    lowerLimit,
    upperLimit,
    DomainName,
    areaCode,
    calleridNumber,
    calleridName,
    callerid911,
    timezone,
    scope,
  } = formData;

  const generateCsvData = () => {
    const data = [];

    for (let i = parseInt(lowerLimit); i <= parseInt(upperLimit); i++) {
      // Get the thousands part for the "first name" (e.g., 10 from 10006)
      const firstName = toWords(Math.floor(i / 1000)); // Convert the thousands part to words
      
      // Get the remaining part after the thousands (e.g., 6 from 10006)
      const remainder = i % 1000;
      let lastName = "thousand";
      
      if (remainder > 0) {
        lastName += ` ${toWords(remainder)}`; // Add the remainder in words
      }

      data.push({
        extension: i,
        domain: DomainName,
        "first name": firstName,
        "last name": lastName.trim(), // Trim to avoid extra spaces
        login: `${i}@bvtest.com`,
        "portal password": null,
        "email address": "noreply@noreply.com",
        "voicemail pin": null,
        department: null,
        site: null,
        "vmail enabled": "yes",
        "answer timeout": null,
        timezone: timezone,
        "area code": areaCode,
        "callerid number": `\t${calleridNumber}`,
        "callerid name": calleridName,
        "911 callerid": `\t${callerid911}`,
        "dial plan": DomainName,
        "dial permission": "US and Canada",
        "audio directory": "yes",
        "visual directory": "yes",
        vmail_transcribe: "deepgram",
        email_vmail: null,
        email_vmail_enabled: "yes",
        scope: scope,
      });
    }

    const csv = Papa.unparse(data);
    downloadCsv(csv);
  };

  const downloadCsv = (csv) => {
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${DomainName}.csv`;
    link.click();
  };

  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={generateCsvData}
        sx={{
          fontSize: '16px',
          padding: '10px 20px',
          backgroundColor: '#0c6934',
          '&:hover': {
            backgroundColor: 'white',
            color:'#0c6934',
            border:'1px solid #0c6934'
          },
        }}
      >
        Download CSV
      </Button>
    </Box>
  );
};

export default CsvGenerator;

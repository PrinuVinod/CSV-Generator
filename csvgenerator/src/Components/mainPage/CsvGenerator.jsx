import React from 'react';
import Papa from 'papaparse';
import { Button, Box } from '@mui/material';

const CsvGenerator = ({ formData }) => {
  const {
    lowerLimit,
    upperLimit,
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
      data.push({
        extension: i,
        domain: 'bvtest.com',
        "first name": String(i).charAt(0),
        "last name": String(i).slice(1),
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
        "dial plan": "bvtest.com",
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
    link.download = `data-${formData.lowerLimit}-${formData.upperLimit}.csv`;
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
          backgroundColor: '#1976d2',
          '&:hover': {
            backgroundColor: '#115293',
          },
        }}
      >
        Download CSV
      </Button>
    </Box>
  );
};

export default CsvGenerator;

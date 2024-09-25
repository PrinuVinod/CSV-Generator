import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { Button, Box, Typography } from '@mui/material';
import { toWords } from 'number-to-words'; // Import the library

const CsvGenerator = ({ formData }) => {
  const [isFormValid, setIsFormValid] = useState(true);
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

  // Function to check if all required fields are filled
  useEffect(() => {
    const validateForm = () => {
      if (
        !lowerLimit ||
        !upperLimit ||
        !DomainName ||
        !areaCode ||
        !calleridNumber ||
        !calleridName ||
        !callerid911 ||
        !timezone ||
        !scope
      ) {
        setIsFormValid(false);
      } else {
        setIsFormValid(true);
      }
    };

    validateForm();
  }, [
    lowerLimit,
    upperLimit,
    DomainName,
    areaCode,
    calleridNumber,
    calleridName,
    callerid911,
    timezone,
    scope,
  ]);

  // Function to generate a random alphanumeric key
  const generateRandomKey = (length = 16) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  const generateCsvData = () => {
    if (!isFormValid) return;

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
    downloadCsv(csv, `${DomainName}-primary.csv`);
  };

  // New function to generate second CSV file based on the image data
  const generateSecondaryCsvData = () => {
    if (!isFormValid) return;

    const data = [];

    for (let i = parseInt(lowerLimit); i <= parseInt(upperLimit); i++) {
      data.push({
        aor: `sip:${i}@${DomainName}`,
        termination_match:  `sip:${i}@${DomainName}`,
        from_address: null,
        hostname: null,
        received_from: null,
        user_agent: null,
        accept_agent: null,
        term_scheme: "sip:",
        term_user: null,
        contact: null,
        transport: null,
        nat_wan: "automatic",
        expires: "60",
        registration_time: null,
        registration_expires_time: null,
        registratin_required: "yes",
        origination_allowed: "yes",
        termination_allowed: "yes",
        authenticate_register: "yes",
        authenticate_invite: "yes",
        authenticate_alg: "md5",
        authentication_realm: `${DomainName}`,
        authentication_key: generateRandomKey(), // Call the function to generate a random key for each row

        subscriber_name: `${i}`,
        subscriber_domain: `${DomainName}`,
        call_progressing_rule: null,
        callid_ergr: "[*]",
        auto_ans: "no",
        watch: "no",
        date_created: new Date().toISOString(),
        srv_code: null,
        address_id: null,
      });
    }

    const csv = Papa.unparse(data);
    downloadCsv(csv, `${DomainName}-Device.csv`);
  };

  const downloadCsv = (csv, fileName) => {
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
  };

  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      {!isFormValid && (
        <Typography color="error" sx={{ mb: 2 }}>
          Please fill in all required fields to download the CSV file.
        </Typography>
      )}
      <Button 
        variant="contained" 
        color="primary" 
        onClick={generateCsvData}
        disabled={!isFormValid} // Disable the button if form is not valid
        sx={{
          fontSize: '16px',
          padding: '10px 20px',
          backgroundColor: '#0c6934',
          '&:hover': {
            backgroundColor: 'white',
            color: '#0c6934',
            border: '1px solid #0c6934',
          },
          '&:disabled': {
            backgroundColor: '#d3d3d3', // Gray color when disabled
            color: '#a0a0a0',
          },
        }}
      >
        Download for User
      </Button>

      <Button 
        variant="contained" 
        color="secondary" 
        onClick={generateSecondaryCsvData}
        disabled={!isFormValid} // Disable the button if form is not valid
        sx={{
          fontSize: '16px',
          padding: '10px 20px',
          marginLeft: '20px',
          backgroundColor: '#8c2eeb',
          '&:hover': {
            backgroundColor: 'white',
            color: '#69340c',
            border: '1px solid #8c2eeb',
          },
          '&:disabled': {
            backgroundColor: '#d3d3d3', // Gray color when disabled
            color: '#a0a0a0',
          },
        }}
      >
        Download for Device
      </Button>
    </Box>
  );
};

export default CsvGenerator;

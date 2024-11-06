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
    dial,
    scope,
  } = formData;

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
        !dial ||
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
    dial,
    scope,
  ]);

  const generateRandomKey = (length = 16) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  const getFirstAndLastName = (num) => {
    const numStr = num.toString();

    let firstName = '';
    let lastName = '';

    if (numStr.length === 1) {
      firstName = toWords(num);
      lastName = null;
    } else if (numStr.length === 2) {
      firstName = toWords(Number(numStr.charAt(0)));
      lastName = toWords(Number(numStr.charAt(1)));
    } else if (numStr.length === 3) {
      firstName = toWords(Number(numStr.charAt(0)));
      lastName = `${toWords(Number(numStr.substring(1)))}`;
    } else if (numStr.length >= 4) {
      const firstPart = Math.floor(num / 1000);
      const lastPart = num % 1000;
      firstName = toWords(firstPart);
      lastName = lastPart > 0 ? toWords(lastPart) : '';
    }

    return { firstName, lastName: lastName || null };
  };

  const generateCsvData = () => {
    if (!isFormValid) return;

    const lower = parseInt(lowerLimit);
    const upper = parseInt(upperLimit);
    const totalRecords = upper - lower + 1;

    // Split the data into chunks of 10,000
    const chunkSize = 10000;
    const numChunks = Math.ceil(totalRecords / chunkSize);

    for (let chunk = 0; chunk < numChunks; chunk++) {
      const start = lower + chunk * chunkSize;
      const end = Math.min(start + chunkSize - 1, upper);
      const data = [];

      for (let i = start; i <= end; i++) {
        const { firstName, lastName } = getFirstAndLastName(i);
        
        data.push({
          extension: i,
          domain: DomainName,
          "first name": firstName,
          "last name": lastName,
          login: `${i}@${DomainName}`,
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
          "dial permission": dial,
          "audio directory": "yes",
          "visual directory": "yes",
          vmail_transcribe: "deepgram",
          email_vmail: null,
          email_vmail_enabled: "yes",
          scope: scope,
        });
      }

      const csv = Papa.unparse(data);
      downloadCsv(csv, `${DomainName}-${chunk + 1}.csv`); // Naming based on the chunk number
    }
  };

  const generateSecondaryCsvData = () => {
    if (!isFormValid) return;

    const lower = parseInt(lowerLimit);
    const upper = parseInt(upperLimit);
    const totalRecords = upper - lower + 1;

    // Split the data into chunks of 10,000
    const chunkSize = 10000;
    const numChunks = Math.ceil(totalRecords / chunkSize);

    for (let chunk = 0; chunk < numChunks; chunk++) {
      const start = lower + chunk * chunkSize;
      const end = Math.min(start + chunkSize - 1, upper);
      const data = [];

      for (let i = start; i <= end; i++) {
        data.push({
          aor: `sip:${i}@${DomainName}`,
          termination_match: `sip:${i}@${DomainName}`,
          from_address: null,
          hostname: null,
          received_from: null,
          user_agent: null,
          accept_agent: null,
          term_scheme: "sip:",
          term_user_trans: null,
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
          authentication_key: generateRandomKey(),
          subscriber_name: `${i}`,
          subscriber_domain: `${DomainName}`,
          call_progressing_rule: null,
          callid_emgr: "[*]",
          auto_ans: "no",
          watch: "no",
          date_created: new Date().toISOString(),
          srv_code: null,
          address_id: null,
        });
      }

      const csv = Papa.unparse(data);
      downloadCsv(csv, `${DomainName}-Device-${chunk + 1}.csv`); // Naming based on the chunk number
    }
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
        disabled={!isFormValid}
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
            backgroundColor: '#d3d3d3',
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
        disabled={!isFormValid}
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
            backgroundColor: '#d3d3d3', 
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

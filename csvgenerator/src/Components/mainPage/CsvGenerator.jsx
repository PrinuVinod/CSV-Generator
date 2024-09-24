import React from 'react';
import Papa from 'papaparse';

const CsvGenerator = ({ lowerLimit, upperLimit }) => {
  const generateCsvData = () => {
    const data = [];

    for (let i = parseInt(lowerLimit); i <= parseInt(upperLimit); i++) {
      data.push({
        extension: i,
        domain: null,
        first_name: null,
        last_name: null,
        login: null,
        email_address: null,
        voicemail_pin: null,
        department: null,
        site: null,
        vmail_enabled: null,
        answer_time: null,
        timezone: null,
        area_code: null,
        callerid_number: null,
        callerid_name: null,
        dial_plan: null,
        audio_directory: null,
        vmail_transcribe: null,
        email_vmail: null,
        email_vmail_enable: null,
        scope: null,
      });
    }

    const csv = Papa.unparse(data);
    downloadCsv(csv);
  };

  const downloadCsv = (csv) => {
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `data-${lowerLimit}-${upperLimit}.csv`;
    link.click();
  };

  return (
    <div>
      <button onClick={generateCsvData}>Download CSV</button>
    </div>
  );
};

export default CsvGenerator;

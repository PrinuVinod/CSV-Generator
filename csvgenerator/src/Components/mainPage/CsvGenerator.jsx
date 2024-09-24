import React from 'react';
import Papa from 'papaparse';

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
        first_name: String(i).charAt(0),
        last_name: String(i).slice(1),
        login: `${i}@bvtest.com`,
        timezone: timezone,
        area_code: areaCode,
        callerid_number: `\t${calleridNumber}`, // Add tab to ensure it's treated as text in Excel
        callerid_name: calleridName,
        callerid_911: `\t${callerid911}`, // Add tab to ensure it's treated as text in Excel
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

  return <button onClick={generateCsvData}>Download CSV</button>;
};

export default CsvGenerator;

import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <div>
        <label>Lower Limit:</label>
        <input
          type="number"
          value={lowerLimit}
          onChange={(e) => setLowerLimit(e.target.value)}
        />
      </div>
      <div>
        <label>Upper Limit:</label>
        <input
          type="number"
          value={upperLimit}
          onChange={(e) => setUpperLimit(e.target.value)}
        />
      </div>
      <div>
        <label>Area Code:</label>
        <input
          type="text"
          value={areaCode}
          onChange={(e) => setAreaCode(e.target.value)}
        />
      </div>
      <div>
        <label>Caller ID Number:</label>
        <input
          type="text"
          value={calleridNumber}
          onChange={(e) => setCalleridNumber(e.target.value)}
        />
      </div>
      <div>
        <label>Caller ID Name:</label>
        <input
          type="text"
          value={calleridName}
          onChange={(e) => setCalleridName(e.target.value)}
        />
      </div>
      <div>
        <label>911 Caller ID:</label>
        <input
          type="text"
          value={callerid911}
          onChange={(e) => setCallerid911(e.target.value)}
        />
      </div>
      <div>
        <label>Timezone:</label>
        <select value={timezone} onChange={(e) => setTimezone(e.target.value)}>
          <option value="US/Central">US/Central</option>
          <option value="US/Mountain">US/Mountain</option>
          <option value="US/Pacific">US/Pacific</option>
        </select>
      </div>
      <div>
        <label>Scope:</label>
        <select value={scope} onChange={(e) => setScope(e.target.value)}>
          <option value="Basic User">Basic User</option>
          <option value="Call Center Agent">Call Center Agent</option>
          <option value="Call Center Supervisor">Call Center Supervisor</option>
          <option value="Office Manager">Office Manager</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputForm;

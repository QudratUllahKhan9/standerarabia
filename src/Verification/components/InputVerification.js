import React, { useState } from 'react';
import './Verification.css';


const InputVerification = () => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleVerify = async () => {
    const trimmedInput = inputValue.trim();
    setResult(null);
    setError('');

    if (trimmedInput === '') {
      setError('Please enter a certificate number or ID.');
      return;
    }

    try {
      const response = await fetch('https://standerbackend.vercel.app/api/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: trimmedInput }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || data.message || 'Something went wrong.');
      } else {
        setResult(data.data);
      }
    } catch (err) {
      setError('Failed to connect to the server.');
    }
  };

  return (
    <div className="verify-wrapper">
      <div className="verify-box">
        <div className="verify-input-group">
          <input
            type="text"
            placeholder="Enter Certificate No. or Sticker No."
            className="verify-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="verify-button" onClick={handleVerify}>
            Verify
          </button>
        </div>

        {error && (
          <p className="confirmation-message" style={{ color: 'red' }}>
            {error}
          </p>
        )}

        {result && (
          <>
            <p className="confirmation-message" style={{ color: 'green' }}>
              Standard Arabia confirms below candidate successfully completed training and certification
            </p>

            <h3 className="verification-badge">Verification Data</h3>

            <table className="verification-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>IqamaNo/ID</th>
                  <th>Course Name</th>
                  <th>Card No</th>
                  <th>Issued Date</th>
                  <th>Expiry Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{result.name}</td>
                  <td>{result.iqama}</td>
                  <td>{result.course}</td>
                  <td>{result.cardNo}</td>
                  <td>{result.issued}</td>
                  <td>{result.expiry}</td>
                </tr>
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default InputVerification;

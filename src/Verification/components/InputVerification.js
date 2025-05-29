const handleVerify = async () => {
  try {
    const response = await fetch('https://standerbackend.vercel.app/api/verify', {
      method: 'POST',
      mode: 'cors', // Explicitly enable CORS
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: inputValue.trim() }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Verification failed');
    }

    const data = await response.json();
    setResult(data.data);
    setError('');
  } catch (err) {
    console.error('Error:', err);
    setError(err.message || 'Failed to connect to the server');
  }
};

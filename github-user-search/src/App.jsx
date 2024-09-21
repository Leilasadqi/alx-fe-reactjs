import React, { useState } from 'react';
import Search from './components/Search';
import axios from 'axios';

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleSearch = async (username) => {
    setLoading(true);
    setError(false);
    setUserData(null);  // Clear previous data

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);  // Set user data when successful
    } catch (err) {
      setError(true);  // Handle error state if user is not found
    } finally {
      setLoading(false);  // End loading state
    }
  };

  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <Search 
        onSearch={handleSearch} 
        loading={loading} 
        error={error} 
        userData={userData} 
      />
    </div>
  );
}

export default App;

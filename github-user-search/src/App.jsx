import React, { useState } from 'react';
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

function App() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle the search request
  const handleSearch = async (username) => {
    setLoading(true);
    setError('');
    setUserData(null);

    try {
      const data = await fetchUserData(username); // Fetch user data from the API
      setUserData(data); // Store the user data in state
    } catch (error) {
      setError('Looks like we can’t find the user'); // Set the error message
    } finally {
      setLoading(false); // Stop the loading state
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

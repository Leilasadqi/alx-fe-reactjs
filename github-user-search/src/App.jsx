import React, { useState } from 'react';
import Search from './components/Search';
import githubService from './services/githubService';

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [userData, setUserData] = useState([]);

  const handleSearch = async (searchParams) => {
    setLoading(true);
    setError(false);
    setUserData([]);  // Clear previous data

    try {
      const users = await githubService.fetchUserData(searchParams);
      setUserData(users);
    } catch (err) {
      setError(true);  // Handle error state if no users found
    } finally {
      setLoading(false);  // End loading state
    }
  };

  return (
    <div className="App">
      <h1 className="text-center text-2xl font-bold">GitHub User Search</h1>
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

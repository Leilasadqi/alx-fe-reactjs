import React, { useState } from 'react';
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

function App() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async (username) => {
    setLoading(true);
    setError('');
    setUserData(null);

    try {
      const data = await fetchUserData(username); // Fetch user data from API
      setUserData(data); // Store user data in state
    } catch (error) {
      setError('Looks like we can’t find the user'); // Set error message
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <Search onSearch={handleSearch} /> {/* Pass the search handler to the Search component */}
      
      {loading && <p>Loading...</p>} {}
      {error && <p>{error}</p>} {}
      
      {userData && ( // If user data exists, display the user information
        <div>
          <img src={userData.avatar_url} alt={userData.login} width="150" />
          <h2>{userData.name || userData.login}</h2>
          <p>{userData.bio}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            Visit GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default App;

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
      <Search onSearch={handleSearch} />

      {/* Conditionally render content based on state */}
      {loading && <p>Loading...</p>}
      {error && <p>Looks like we can't find the user</p>}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={userData.login} width="150" />
          <h2>{userData.name || userData.login}</h2>
          <p>{userData.bio || "No bio available"}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            Visit GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default App;

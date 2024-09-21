import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import { getUserProfile } from './services/githubAPI';

function App() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = (username) => {
    getUserProfile(username)
      .then((response) => {
        setUserData(response.data);
        setError(null);
      })
      .catch((error) => {
        setError('User not found');
        setUserData(null);
      });
  };

  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p>{error}</p>}
      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <p>Username: {userData.login}</p>
          <p>Followers: {userData.followers}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            Visit GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default App;

import React, { useState } from 'react';

const Search = ({ onSearch, loading, error, userData }) => {
  const [username, setUsername] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username);  // Trigger search in parent component
    }
  };

  return (
    <div>
      {/* Search Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Conditional rendering for different states */}
      {loading && <p>Loading...</p>}  {/* Loading state */}

      {error && <p>Looks like we can't find the user</p>}  {/* Error message */}

      {userData && (  // Display user data if available
        <div>
          <img src={userData.avatar_url} alt={userData.login} width="150" /> {/* User's avatar */}
          <h2>{userData.name || userData.login}</h2>  {/* User's name or login */}
          <p>{userData.bio || "No bio available"}</p>  {/* User's bio */}
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            Visit GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;

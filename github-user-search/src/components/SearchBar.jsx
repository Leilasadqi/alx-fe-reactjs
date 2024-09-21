import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSearch = () => {
    if (username) {
      onSearch(username);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search GitHub User"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;

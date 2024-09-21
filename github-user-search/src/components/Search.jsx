import React, { useState } from 'react';
import githubService from '../services/githubService'; // Import the service

const Search = ({ setUserData, setLoading, setError, userData }) => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    
    // Prepare the search parameters
    const searchParams = { username, location, minRepos };

    try {
      const users = await githubService.fetchUserData(searchParams);
      setUserData(users);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-gray-300 p-2 rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border border-gray-300 p-2 rounded"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border border-gray-300 p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Search
        </button>
      </form>

      {userData.length > 0 && (
        <div className="mt-4">
          {userData.map((user) => (
            <div key={user.login} className="flex items-center border-b py-2">
              <img src={user.avatar_url} alt={user.login} width="50" className="rounded-full" />
              <div className="ml-4">
                <h2 className="font-bold">{user.login}</h2>
                <p>{user.location || "No location available"}</p>
                <p>Repositories: {user.public_repos}</p>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;

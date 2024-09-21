import axios from 'axios';

const githubService = {
  fetchUserData: async ({ username, location, minRepos }) => {
    const query = [];
    if (username) query.push(`user:${username}`);
    if (location) query.push(`location:${location}`);
    if (minRepos) query.push(`repos:>=${minRepos}`);
    
    const queryString = query.join(' ');

    try {
      const response = await axios.get(`https://api.github.com/search/users?q=${queryString}`);
      return response.data.items;
    } catch (error) {
      throw error;
    }
  },
};

export default githubService;

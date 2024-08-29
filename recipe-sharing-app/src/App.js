import React from 'react';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';

const App = () => {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <RecipeList />
    </div>
  );
};

export default App;

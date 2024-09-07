import React from 'react';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';
import FavoritesList from './FavoritesList';
import RecommendationsList from './RecommendationsList';

const App = () => {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <RecipeList />
      <FavoritesList />
      <RecommendationsList />
    </div>
  );
};

export default App;

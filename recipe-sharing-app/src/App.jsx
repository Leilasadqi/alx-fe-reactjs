import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <div className="App">
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <AddRecipeForm />
      <Routes>
        <Route path="/" element={<>
          <RecipeList />
          <FavoritesList />
          <RecommendationsList />
        </>} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default App;

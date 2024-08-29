import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <Routes>
        <Route path="/" element={<>
          <AddRecipeForm />
          <RecipeList />
        </>} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default App;


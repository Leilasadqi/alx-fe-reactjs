import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !ingredients || !steps) {
      setError('All fields are required.');
      return;
    }
    
    setError(''); // Clear error

    const newRecipe = {
      title,
      ingredients,
      steps,
    };

    console.log('Submitted Recipe:', newRecipe);

    setTitle('');
    setIngredients('');
    setSteps('');
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Recipe</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="title">
            Recipe Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter recipe title"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="ingredients">
            Ingredients
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Enter ingredients, separated by commas"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="steps">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="6"
            placeholder="Enter preparation steps"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;

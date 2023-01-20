import React from 'react';
import RecipeTable from './RecipeTable';

function ManageRecipes({ state }) {
  return (
    <div className="bg-gray-200 p-11">
      <div>
        ManageRecipes:
        <p>-Some description</p>
        <button
          className="bg-blue-200 p-4 rounded-3xl"
          onClick={() => state(true)}
        >
          Create recipe
        </button>
      </div>

      <p>-search component</p>

      <div>
        <RecipeTable />
      </div>
    </div>
  );
}

export default ManageRecipes;

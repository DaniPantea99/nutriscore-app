import React from 'react';
import RecipeItem from './RecipeItem';

function RecipeTable() {
  return (
    <div>
      <p>Table header</p>
      {/* facem map pe lista de retete salvate */}
      <RecipeItem />
    </div>
  );
}

export default RecipeTable;

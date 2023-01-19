import React from 'react'
import RecipeTable from './RecipeTable'
import SearchItem from './SearchItem'

function ManageRecipes() {
  return (
    <div>ManageRecipes: 
        <p>-Some description</p>
        <p>-Create New recipe Btn</p>
        <p>-search component</p>
        <SearchItem />
        <p>-recipes table</p>
        <RecipeTable />
        
        
        
    </div>
  )
}

export default ManageRecipes
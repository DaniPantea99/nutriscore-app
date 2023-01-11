import React from 'react'
import AddNewIngredient from '../components/AddNewIngredient'
import Recipe from '../components/Recipe'

function CreateRecipe() {

  return (
    <div className='create-recipe-container'>
        <AddNewIngredient />
        <Recipe />
    </div>
  )
}

export default CreateRecipe


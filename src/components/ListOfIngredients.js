import React from 'react'
import Ingredient from './Ingredient'

function ListOfIngredients() {
  return (
    <div>ListOfIngredients

        {/* map pe lista de ingrediente */}
        <Ingredient />

        <p>buton save</p>
        <p>buton discharge</p>

    </div>
  )
}

export default ListOfIngredients
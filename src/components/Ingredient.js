import React from 'react'

function Ingredient({index, label}) {
  return (
    <div className='ingredient-container'>
        <div>
            <span>{index}&#46;&nbsp;</span>
            <label htmlFor={index+label}>{label}</label>
        </div>
        <div className='ingredient-details-container'>
            <input type="number" name={index+label} id={index+label} placeholder="cantitatea in grame..." />
            <span>g</span>
            <button>X</button>
        </div>
    </div>
  )
}

export default Ingredient
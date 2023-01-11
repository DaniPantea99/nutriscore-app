import React from 'react'
import Ingredient from './Ingredient'

function Recipe() {
  return (
    <div className='recipe-container'>
        <div className='recipe-header'>
            <input type="text" placeholder="Adauga numele retetei" />
        </div>

        <div className='recipe-main'>
                <Ingredient
                    index="1"
                    label="Sare"
                />
                <Ingredient
                    index="2"
                    label="Piper"
                />
                <Ingredient
                    index="3"
                    label="Orez"
                />
                <Ingredient
                    index="4"
                    label="Ceapa"
                />
                <Ingredient
                    index="5"
                    label="Morcov"
                />
                <Ingredient
                    index="6"
                    label="Apa"
                />
        </div>

        <textarea className="mod-de-preparare" name="mod-de-preparare" id="mod-de-preparare" cols="30" rows="10" placeholder='Mod de preparare...'></textarea>

        <div className='recipe-footer'>
            <button className='btn'>Creaza reteta</button>
            <button className='btn'>Anuleaza</button>
        </div>
    </div>
  )
}

export default Recipe
import React from 'react'
import Ingredient from './Ingredient'
import SearchIngredient from '../components/SearchIngredient';


function NewRecipe() {
  return (
    <div className='rounded-xl p-4 w-96 bg-blue-300 shadow-lg'>
        
        <h2 className='text-center py-2'>Titlu reteta</h2>

        <SearchIngredient />
   
        <div className='flex flex-col mb-4 mt-4'>
            {/* aici va fi un array map peste lista de ingrediente care se va salva intr-un array pana la crearea retetei  */}
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

        <textarea className='p-2 outline-0 rounded-lg w-full h-40 shadow-md' name="mod-de-preparare" id="mod-de-preparare" cols="30" rows="10" placeholder='Mod de preparare...'></textarea>

        <div className='flex justify-between py-2'>
            <button className='p-2 hover:bg-blue-400 active:bg-blue-500 hover:text-white rounded-lg transition-all shadow-md'>Creaza reteta</button>
            <button className='p-2 hover:bg-red-400 active:bg-red-500 hover:text-white rounded-lg transition-all shadow-md'>Anuleaza</button>
        </div>
    </div>
  )
}

export default NewRecipe
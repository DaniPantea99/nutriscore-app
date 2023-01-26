import React from 'react';
import { BsFillXCircleFill } from 'react-icons/bs';

function Ingredient({ label, newListOfIngredients, setNewListOfIngredients }) {

  function RemoveIngredient() {
    const newArray = newListOfIngredients.filter(item => item !== label  )
    setNewListOfIngredients(newArray)
  }

  return (
    <div className="flex justify-between bg-blue-300 rounded-xl p-2 items-center gap-3 snap-start min-w-fit h-12">
      <div className="flex flex-col w-full">
        <label className="inline-block" htmlFor={label}>
          <p className="w-24 overflow-hidden sm:w-full">{label}</p> 
        </label>
      </div>
      <div className="flex items-center">
        <input
          className="p-2 rounded-md outline-0 text-sm mr-1 sm:mr-2 w-24 md:w-48 lg:w-32 bg-gray-100"
          type="number"
          name={label}
          id={label}
          placeholder="adauga cantitatea..."
        />
        <p>g</p>
        <BsFillXCircleFill onClick={RemoveIngredient}
          className="
            text-red-700 text-2xl cursor-pointer
            hover:text-red-500 active:text-red-900 transition-all ml-2 sm:ml-6"
        />
      </div>
    </div>
  );
}

export default Ingredient;
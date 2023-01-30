import React from 'react';
import { BsFillXCircleFill } from 'react-icons/bs';

function Ingredient({ item, index, getIngredient, removeIngredient }) {

  return (
    <div className="flex items-center justify-between gap-3 p-2 bg-blue-300 h-11 rounded-xl snap-start min-w-fit">
      <div className="flex flex-col w-full">
        <label className="inline-block" htmlFor={item}>
          <p className="w-24 overflow-hidden sm:w-full">{item}</p> 
        </label>
      </div>
      <div className="flex items-center">
        <input
          className="w-24 p-1 px-2 mr-1 text-sm bg-gray-100 rounded-md outline-0 sm:mr-2 md:w-48 lg:w-32"
          type="number"
          name={item}
          id={index}
          placeholder="adauga cantitatea..."
          onChange={(e) => getIngredient(e.target)}
        />
        <p>g</p>
        <BsFillXCircleFill
          onClick={(item) => removeIngredient(item)}
          className="ml-2 text-2xl text-red-700 transition-all cursor-pointer hover:text-red-500 active:text-red-900 sm:ml-6"
        />
      </div>
    </div>
  );
}

export default Ingredient;
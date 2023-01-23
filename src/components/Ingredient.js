import React from 'react';
import { BsFillXCircleFill } from 'react-icons/bs';

function Ingredient({ label }) {
  return (
    <div className="flex justify-between bg-blue-300 rounded-2xl p-3 items-center gap-3 snap-start min-w-fit">
      <div className="flex flex-col w-full">
        <label className="inline-block" htmlFor={label}>
          <p className="w-24 overflow-hidden sm:w-full">{label}</p> 
        </label>
      </div>
      <div className="flex items-center">
        <input
          className="px-4 py-2 rounded-md outline-0 text-sm mr-1 sm:mr-2 w-32 sm:w-auto bg-gray-100"
          type="number"
          name={label}
          id={label}
          placeholder="adauga cantitatea..."
        />
        <p>g</p>
        <BsFillXCircleFill
          className="
            text-red-700 text-2xl cursor-pointer
            hover:text-red-500 active:text-red-900 transition-all ml-2 sm:ml-6"
        />
      </div>
    </div>
  );
}

export default Ingredient;
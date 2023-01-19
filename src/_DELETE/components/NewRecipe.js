import React, {useState} from 'react';
import SearchItem from './SearchItem';
import Alergeni from './Alergeni';
import { useSelector } from 'react-redux';
import Ingredient from './Ingredient';


function NewRecipe({name}) {

  // let listOfIngredients = [];

  const [listOfIngredients, setListOfIngredients] = useState(['apa', 'sare'])



  // function AddIngredientHandler() {
  //   const inputValue = selected.product_name
  //   listOfIngredients.push(inputValue)
  //   console.log(listOfIngredients)
  // }

  const {filtered} = useSelector((state) => state.ingredients)

  return (
    <div className="rounded-xl p-4 w-96 bg-blue-300 shadow-lg">
      <h2 className="text-center py-2 font-bold first-letter:capitalize">{name}</h2>

      <SearchItem 
        database={filtered}
      />

<div className="list-of-ingredients flex flex-col mb-4 mt-4">

{listOfIngredients.length !== 0 &&

listOfIngredients.map((item, index) => <Ingredient key={index} index={index+1} label={item} />)
}


</div>


      <Alergeni />

      <div className="flex justify-between py-2">
        <button className="p-2 hover:bg-blue-400 active:bg-blue-500 hover:text-white rounded-lg transition-all shadow-md">
          Creaza reteta
        </button>
        <button className="p-2 hover:bg-red-400 active:bg-red-500 hover:text-white rounded-lg transition-all shadow-md">
          Anuleaza
        </button>
      </div>
    </div>
  );
}

export default NewRecipe;

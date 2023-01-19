import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {loadIngredients} from '../../actions/ingredientsAction'
import NewRecipe from '../NewRecipe';
import RecipeCard from '../RecipeCard';
import EditRecipe from '../EditRecipe';

function CreateRecipe() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadIngredients())
  }, [dispatch])

  const [render, setRender] = useState(false)
  const [recipeName, setRecipeName] = useState('')

  function AddNewRecipeHandler() {
    const isEmpty = str => !str.trim().length;
    let inputValue = document.querySelector('.recipe-name')
    if(isEmpty(inputValue.value)) {
      alert("Input is empty. Please add a short name for your new recipe!")
    }else {
      setRender(true)
      setRecipeName(inputValue.value)
      inputValue = ""
    }
  }

  return (
    <div className="flex flex-col">

      <div className="p-8 bg-blue-300">
        <div className="flex justify-center gap-4">
          <input
            className="recipe-name outline-none p-2 cursor-default overflow-hidden rounded-lg text-left shadow-md sm:text-sm"
            type="text"
            placeholder="Denumire reteta..."
          />
        <button onClick={AddNewRecipeHandler} className="px-6 hover:bg-blue-400 active:bg-blue-500 hover:text-white rounded-lg transition-all shadow-md">
          Creaza reteta noua
        </button>
        </div>
      </div>

      <div className="p-12 flex justify-between gap-4">
        <div>
          {render !== false &&
            <NewRecipe
            name={recipeName}
            />
          }
        </div>

        <div className="lista-retete-container">
          <h2 className="text-center font-bold text-3xl mb-8">Rețete create</h2>
          
          <div className='container mx-auto'>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            <RecipeCard
              // numeReteta={numeReteta}
              // ingrediente={listaIngrediente}
              numeReteta="Pilaf de Orez"
              ingrediente="1. Sare 2. Orez"
            />

            <RecipeCard
              // numeReteta={numeReteta}
              // ingrediente={listaIngrediente}
              numeReteta="Pilaf de Orez"
              ingrediente="1. Sare 2. Orez"
            />
            <RecipeCard
              // numeReteta={numeReteta}
              // ingrediente={listaIngrediente}
              numeReteta="Pilaf de Orez"
              ingrediente="1. Sare 2. Orez"
            />
            <RecipeCard
              // numeReteta={numeReteta}
              // ingrediente={listaIngrediente}
              numeReteta="Pilaf de Orez"
              ingrediente="1. Sare 2. Orez"
            />
            <RecipeCard
              // numeReteta={numeReteta}
              // ingrediente={listaIngrediente}
              numeReteta="Pilaf de Orez"
              ingrediente="1. Sare 2. Orez"
            />
            <RecipeCard
              // numeReteta={numeReteta}
              // ingrediente={listaIngrediente}
              numeReteta="Pilaf de Orez"
              ingrediente="1. Sare 2. Orez"
            />
          
         
          </div>
          </div>

        </div>
      </div>

      <EditRecipe />
    </div>
  );
}

export default CreateRecipe;

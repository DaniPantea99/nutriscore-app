import React from 'react';
import SearchIngredient from '../components/SearchIngredient';
import NewRecipe from '../components/NewRecipe';
import RecipeCard from '../components/RecipeCard';
import EditRecipe from '../components/EditRecipe';

function CreateRecipe() {
  return (
    <div className="flex flex-col">

      <div className="p-8 bg-blue-300">
        <div className="flex justify-center gap-4">
          <input
            className="outline-none p-2 cursor-default overflow-hidden rounded-lg text-left shadow-md sm:text-sm"
            type="text"
            placeholder="Denumire reteta..."
          />
        <button className="px-6 hover:bg-blue-400 active:bg-blue-500 hover:text-white rounded-lg transition-all shadow-md">
          Creaza reteta noua
        </button>
        </div>
      </div>

      <div className="p-12 flex justify-between">
        <div>
          <NewRecipe />
        </div>

        <div className="lista-retete-container">
          <h2 className="text-center font-bold text-3xl mb-8">Rețete create</h2>
          <div className="grid gap-4 grid-cols-3">
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

      <EditRecipe />
    </div>
  );
}

export default CreateRecipe;

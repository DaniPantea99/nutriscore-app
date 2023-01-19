import React from 'react'
import ManageRecipes from '../components/ManageRecipes'
import Navbar from '../components/Navbar'
import CreateRecipe from '../components/CreateRecipe'

function Home() {
  return (
    <div className='flex'>

        <Navbar />
        <div className='mainpage'>
        Hello, restaurant-Title

        <ManageRecipes />




        </div>

        <CreateRecipe />



    </div>
  )
}

export default Home
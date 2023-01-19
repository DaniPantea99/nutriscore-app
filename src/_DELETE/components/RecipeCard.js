import React from 'react'

function RecipeCard({numeReteta, ingrediente}) {
  return (
    <div className='flex flex-col justify-between shadow-md px-4 py-2 rounded-lg hover:bg-blue-300 transition-all w-fit h-52'>
        <div>
            <h3 className='text-center text-xl font-bold'>{numeReteta}</h3>
            <span>
                {/* map peste lista de ingrediente */}
                {ingrediente}
            </span>
        </div>
        <div className='flex justify-between py-2'>
            <button className='p-2 hover:bg-blue-400 active:bg-blue-500 hover:text-white rounded-lg transition-all shadow-md w-fit whitespace-nowrap'>Deschide reteta</button>
            <button className='p-2 hover:bg-red-400 active:bg-red-500 hover:text-white rounded-lg transition-all shadow-md w-fit whitespace-nowrap'>Sterge Reteta</button>
        </div>
    </div>
  )
}

export default RecipeCard
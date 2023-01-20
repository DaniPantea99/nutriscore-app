import React from 'react'

function Ingredient({label}) {
  return (
    <div className='flex justify-between bg-blue-300 rounded-2xl p-3 items-center gap-3 h-10'>
        <div className='flex w-full'>

            <label className='inline-block w-full' htmlFor={label}>{label}</label>
        </div>
        <div className='flex gap-2'>
            <input className='px-2 py-1 w-32 rounded-md outline-0 text-xs' type="number" name={label} id={label} placeholder="adauga cantitatea..." />
            
            <button className='px-1 hover:bg-red-400 active:bg-red-500 hover:text-white rounded-sm transition-all shadow-md'>X</button>
        </div>
    </div>
  )
}

export default Ingredient
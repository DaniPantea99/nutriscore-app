import React from 'react'

function EditRecipe() {
  return (
    <div className='relative bg-blue-300 shadow-lg border-collapse w-4/5 rounded-xl mx-auto p-8'>

        <button className='absolute right-4 top-3 p-2 rounded-md bg-black text-white hover:bg-red-400 active:bg-red-500'>X</button>

        <h2 className='text-center font-bold text-2xl'>Pilaf de Orez</h2>


        
        <div className='edit-recipe-table my-4'>
            <table className='w-full text-left'>
                <thead>
                    <tr className='border-b border-b-stone-500'>
                        <th>Lista ingrediente</th>
                        <th>U.M grame</th>
                        <th>Proteine</th>
                        <th>Lipide</th>
                        <th>Acizi Grasi Saturati</th>
                        <th>Glucide</th>
                        <th>Zaharuri</th>
                        <th>Calorii</th>
                    </tr>
                </thead>
                <tbody>
                    {/* informatia trebuie sa vina prin array map */}
                    <tr>
                        {/* informatia trebuie sa vina sub forma de props */}
                        <td>1. Sare</td>
                        <td>20</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        {/* informatia trebuie sa vina sub forma de props */}
                        <td>2. Orez</td>
                        <td>250</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        {/* informatia trebuie sa vina sub forma de props */}
                        <td>3. Piper</td>
                        <td>10</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        {/* informatia trebuie sa vina sub forma de props */}
                        <td>4. Ceapa</td>
                        <td>110</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        {/* informatia trebuie sa vina sub forma de props */}
                        <td>5. Morcov</td>
                        <td>150</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        {/* informatia trebuie sa vina sub forma de props */}
                        <td>6. Apa</td>
                        <td>750</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>

                </tbody>
                <tfoot className='font-bold'>
                    <tr className='border-t border-t-stone-500'>
                        <td>Total</td>
                        <td>Suma UM grame</td>
                        <td>Suma proteine</td>
                        <td>Suma lipide</td>
                        <td>Suma acizi grasi</td>
                        <td>Suma glucide</td>
                        <td>Suma zaharuri</td>
                        <td>Suma calorii</td>
                    </tr>
                </tfoot>
            </table>
        </div>

        <div className='edit-recipe-footer flex justify-between py-2'>
            <div className='utility-buttons flex gap-3'>
                <button className='p-2 hover:bg-blue-400 active:bg-blue-500 hover:text-white rounded-lg transition-all shadow-md'>Print</button>
                <button className='p-2 hover:bg-blue-400 active:bg-blue-500 hover:text-white rounded-lg transition-all shadow-md'>QR code</button>
                <button className='p-2 hover:bg-blue-400 active:bg-blue-500 hover:text-white rounded-lg transition-all shadow-md'>Edit</button>
            </div>
            <button className='p-2 hover:bg-red-400 active:bg-red-500 hover:text-white rounded-lg transition-all shadow-md'>Delete</button>

        </div>


    </div>
  )
}

export default EditRecipe
import React from 'react'

function EditRecipe() {
  return (
    <div>
        <h2>Pilaf de Orez</h2>
        
        <div>
            <table>
                <thead>
                    <tr>
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
                <tfoot>
                    <tr>
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



    </div>
  )
}

export default EditRecipe
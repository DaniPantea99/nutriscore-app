import React from 'react'
import '../styles/AddNewIngredients.css';
import Select from 'react-select';

function AddNewIngredient() {

    const optionList = [
        { value: "sare", label: "Sare" },
        { value: "piper", label: "Piper" },
        { value: "orez", label: "Orez" },
        { value: "apa", label: "Apa" },
        { value: "morcov", label: "Morcov" },
        { value: "ceapa", label: "Ceapa" }
      ];

  return (
    <div className='input-wrapper'>
        <Select
            className='input-add'
            options={optionList}
            isMulti
            placeholder='Cauta ingredient nou...'
        />
        <button className='btn add-btn'>Adauga</button>
    </div>
  )
}

export default AddNewIngredient
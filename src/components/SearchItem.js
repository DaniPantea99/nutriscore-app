import React, { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

export default function SearchItem({
  database,
  setNewListOfIngredients,
  newListOfIngredients,
}) {
  // const [selected, setSelected] = useState(database[0]);
  const [query, setQuery] = useState('');

  const filteredItems =
    query === ''
      ? database
      : database.filter((item) =>
          item.product_name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  function AddNewIngredient() {
    const isEmpty = (str) => !str.trim().length;
    const inputValue = document.querySelector('.input').value;
    if (isEmpty(inputValue)) {
      alert(
        'No ingredient selected. Please select one ingredient from the list!'
      );
    } else {
      setNewListOfIngredients([...newListOfIngredients, inputValue]);
    }
  }

  return (
    <div className="flex h-12 w-full">
      <button onClick={AddNewIngredient}>Add</button>
      <Combobox>
        <div className="relative w-full">
          <div className="relative w-full h-full cursor-default overflow-hidden rounded-xl text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-200">
            <Combobox.Input
              className="input bg-gray-100 h-full w-full border-none p-3 pr-10 text-base leading-5 text-gray-900 focus:ring-0 outline-none"
              placeholder="Cauta..."
              displayValue={(item) => item.product_name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-600"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredItems.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredItems.map((item) => (
                  <Combobox.Option
                    key={item.product_name}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-blue-600 text-white' : 'text-gray-900'
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item.product_name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-blue-600'
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}

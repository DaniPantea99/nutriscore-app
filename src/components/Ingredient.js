import React from 'react';
import { BsFillXCircleFill } from 'react-icons/bs';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

function Ingredient({ item, index, getIngredient, removeIngredient }) {
  return (
    <div className="flex flex-col snap-start">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button 
            // onClick={() => console.log(item)}
            // className="flex items-center w-full bg-blue-300 h-11 rounded-xl "
            className={`${open ? 'rounded-t-xl' : 'rounded-xl'} flex items-center w-full bg-blue-300 h-11`}
            >
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-blue-900 ml-1`}
              />
              <div className="flex items-center justify-between w-full gap-3 p-2">
                <div className="flex flex-col items-start w-full">
                  <label className="inline-block" htmlFor={item.productName}>
                    <p className="w-24 overflow-hidden sm:w-full">
                      {item.productName}
                    </p>
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    // defaultValue={item?.quantity ? item.quantity : ''}
                    defaultValue={item.quantity}
                    className="w-24 p-1 px-2 mr-1 text-sm bg-gray-100 rounded-md outline-0 sm:mr-2 md:w-48 lg:w-32"
                    type="number"
                    name={item.productName}
                    id={index}
                    placeholder="adauga cantitatea..."
                    onChange={(e) => getIngredient(e.target)}
                  />
                  <p>g</p>
                  <BsFillXCircleFill
                    name={item.productName}
                    onClick={(e) => removeIngredient(e, item)}
                    className="ml-2 text-2xl text-red-700 transition-all cursor-pointer hover:text-red-500 active:text-red-900 sm:ml-6"
                  />
                </div>
              </div>
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 bg-white rounded-b-xl">
              <ul className='ml-3 list-disc'>
                <li>Calories: {item.calories}</li>
              </ul>

              <div>
                <p>Nutriments:</p>
                  <ul className='ml-3 list-disc'>
                  {item.nutriments?.map((el, index) => <li key={index}>{el.name}: {el.quantity_100}</li>
                  )}
                  </ul>
              </div>
              
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default Ingredient;

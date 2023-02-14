import React from 'react';
import { BsFillXCircleFill } from 'react-icons/bs';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

function Ingredient({ item, index, getIngredient, removeIngredient }) {
  function format2Decimals(str) {
    const num = parseFloat(str);
    return Math.round(num * 100) / 100;
  }

  const Calories = () => {
    return (
      <div>
        <p>
          Calories (100g):&nbsp;
          <span className={`${item.calories_100 ? '' : 'italic'}`}>
            {format2Decimals(item.calories_100 ? item.calories_100 : '0')}
            <span className="not-italic">&nbsp;kcal /&nbsp;</span>
            {format2Decimals(
              item.calories_100 ? item.calories_100 * 4.184 : '0'
            )}
            <span className="not-italic">&nbsp;kJ</span>
          </span>
        </p>
      </div>
    );
  };

  const Nutriments = () => {
    return (
      <div>
        <p>Nutriments (100g):</p>
        <ul className={`${item.nutriments ? '' : 'italic'} list-disc ml-7`}>
          {Array.isArray(item.nutriments)
            ? item.nutriments
              ? item?.nutriments?.map((el, index) => (
                  <li key={index}>
                    {el.name}: {format2Decimals(el.quantity_100)}
                  </li>
                ))
              : 'Info unavailable'
            : item.nutriments
            ? Object.values(item.nutriments).map((el, index) => (
                <li key={index}>
                  {el.name}: {format2Decimals(el.quantity_100)}
                </li>
              ))
            : ' Info unavailable'}
        </ul>
      </div>
    );
  };

  const Additives = () => {
    return (
      <div>
        <p>Additives:</p>
        <ul
          className={`${
            item.additives ? '' : 'italic'
          } list-disc ml-7 capitalize`}
        >
          {Array.isArray(item.additives)
            ? item.additives
              ? item?.additives?.map((el, index) => (
                  <li key={index}>{el.toString().slice(3)}</li>
                ))
              : 'Info unavailable'
            : item.additives
            ? Object.values(item?.additives)?.map((el, index) => (
                <li key={index}>{el.toString().slice(3)}</li>
              ))
            : ' Info unavailable'}
        </ul>
      </div>
    );
  };

  return (
    <div className="flex flex-col">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`${
                open ? 'rounded-t-xl' : 'rounded-xl'
              } flex items-center w-full bg-blue-300 h-11 focus:outline-none`}
            >
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-blue-900 ml-1`}
              />
              <div className="flex items-center justify-between w-full gap-3 p-2">
                <div className="flex flex-col items-start w-full">
                  <label className="inline-block" htmlFor={item.productName}>
                    <p className="w-24 overflow-hidden capitalize sm:w-full">
                      {item.productName}
                    </p>
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    // defaultValue={item?.quantity ? item.quantity : ''}
                    required
                    defaultValue={item.quantity}
                    className="w-24 p-1 px-2 mr-1 text-sm bg-gray-100 rounded-md outline-0 sm:mr-2 md:w-48 lg:w-32"
                    type="number"
                    name={item.productName}
                    id={index}
                    placeholder="adauga cantitatea..."
                    onChange={(e) => getIngredient(e.target)}
                    onClick={(e) => e.stopPropagation()}
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
              <div className="mb-2">
                <p>
                  Brand:&nbsp;
                  <span className={`${item.brand ? '' : 'italic'}`}>
                    {item.brand ? item.brand : 'Unavailable'}
                  </span>
                </p>
                <Calories />
              </div>

              <Nutriments />
              {item.additives && <Additives />}

              <div className="mt-2">
                <p>
                  Source:&nbsp;
                  <span className={`${item.source ? '' : 'italic'}`}>
                    {item.source ? item.source : 'Unavailable'}
                  </span>
                </p>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default Ingredient;

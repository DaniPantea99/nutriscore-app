import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import AlergenItem from './AlergenItem';

function Alergeni() {
  return (
    <div className="recipe-options w-full pt-3">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span>Alergeni</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>

              <AlergenItem alergen="Gluten" />
              <AlergenItem alergen="Lapte" />
              <AlergenItem alergen="Oua" />
              <AlergenItem alergen="Nuci" />
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}

export default Alergeni;

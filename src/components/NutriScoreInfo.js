import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export default function NutriScoreInfo({ showModal, onClose }) {
  return (
    <>
      <Transition appear show={showModal} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl p-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Nutri-Score Info
                  </Dialog.Title>
                  <div className="flex flex-col gap-2 my-2 text-sm text-justify text-gray-500">
                    <p>
                      The Nutri-Score, also known as the 5-Colour Nutrition
                      label or 5-CNL, is a five-colour nutrition label and
                      nutritional rating system, and an attempt to simplify the
                      nutritional rating system demonstrating the overall
                      nutritional value of food products. It assigns products a
                      rating letter from A (best) to E (worst), with associated
                      colors from green to red.
                    </p>
                    <p>
                      This system was selected by the French government in March
                      2017 to be displayed on food products after it was
                      compared against several labels proposed by industry or
                      retailers. The system relies on the computation of a
                      nutrient profiling system derived from the United Kingdom
                      Food Standards Agency nutrient profiling system (FSA
                      score). It was created by Santé Publique France, the
                      French public health agency, based on the work of Serge
                      Hercberg from Sorbonne Paris North University. Other
                      bodies involved in the development of the system included
                      the Agency for Food, Environmental and Occupational Health
                      and Safety (ANSES) and the High Council for Public Health
                      (HCSP).
                    </p>
                    <p>
                      The system has been recommended by other European Union
                      countries as well as the European Commission and the World
                      Health Organization. Due to the system's methodology, its
                      implementation for general use is controversial in some EU
                      countries.
                    </p>
                  </div>
                  <div className="text-sm text-gray-500">
                    <span>
                      Source:{' '}
                      <a
                        className="hover:text-blue-500 active:text-blue-600"
                        href="https://en.wikipedia.org/wiki/Nutri-Score"
                        alt="wikipedia"
                      >
                        Wikipedia
                      </a>
                    </span>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => onClose(false)}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

// import i18n from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const languages = [
  { key: 'en', value: 'English' },
  { key: 'ro', value: 'Romanian' },
];

function Settings() {
  const { t, i18n } = useTranslation();
  // const [selected, setSelected] = useState(languages[0]);
  const [query, setQuery] = useState('');

  const filteredLanguages =
    query === ''
      ? languages
      : languages.filter((lang) =>
          lang.value
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  const onLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="p-8">
      {t('settingsPage.title')}
      <div className="p-4">
        <Combobox
          value={
            languages.find((language) => language.key === i18n.resolvedLanguage)
              ?.value
          }
          onChange={(lng) => onLanguageChange(lng)}
        >
          <Combobox.Label>{t('settingsPage.language')}:</Combobox.Label>
          <div className="relative mt-1">
            <div className="relative w-full overflow-hidden text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
              <Combobox.Input className="w-full py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 border-none focus:ring-0" />
              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="w-5 h-5 text-gray-400"
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
              <Combobox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {filteredLanguages.length === 0 && query !== '' ? (
                  <div className="relative px-4 py-2 text-gray-700 cursor-default select-none">
                    Nothing found.
                  </div>
                ) : (
                  filteredLanguages.map((lang) => (
                    <Combobox.Option
                      key={lang.key}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? 'bg-teal-600 text-white' : 'text-gray-900'
                        }`
                      }
                      value={lang.key}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {lang.value}
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? 'text-white' : 'text-teal-600'
                              }`}
                            >
                              <CheckIcon
                                className="w-5 h-5"
                                aria-hidden="true"
                              />
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
    </div>
  );
}

export default Settings;

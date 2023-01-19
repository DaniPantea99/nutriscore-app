import React, { useState } from 'react';
import { Disclosure, Switch } from '@headlessui/react';

function AlergenItem({ alergen }) {
  const [enabled, setEnabled] = useState(false);

  return (
    <div>
      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 flex justify-between">
        <span>{alergen}</span>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${
            enabled ? 'bg-blue-600' : 'bg-gray-200'
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span className="sr-only">{alergen}</span>
          <span
            className={`${
              enabled ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </Switch>
      </Disclosure.Panel>
    </div>
  );
}

export default AlergenItem;

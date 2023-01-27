import React, { useState, Fragment } from "react";
import CreateRecipe from "../components/CreateRecipe";
import { Transition } from "@headlessui/react";
import RecipeTable from "../components/RecipeTable";

function Dashboard() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex flex-col w-full h-full p-8">
      <h1 className="tracking-wide">McDonald's</h1>

      <div className="flex flex-col p-8 bg-white rounded-xl">
        <div className="flex justify-between mb-6">
          <div>
            <h2 className="tracking-wide">Manage Recipes:</h2>
          </div>
          <button
            className="px-4 py-3 font-bold text-white bg-orange-500 rounded-2xl hover:bg-orange-600"
            onClick={() => setShowSidebar(true)}
          >
            Create recipe
          </button>
        </div>

        <RecipeTable />
      </div>

      <Transition
        as={Fragment}
        show={showSidebar}
        enter="transition-opacity duration-300 ease-in-out"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300 ease-in-out"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className={`w-full lg:w-[500px]
        fixed h-full top-0 right-0
        `}
        >
          <CreateRecipe state={setShowSidebar} />
        </div>
      </Transition>
    </div>
  );
}

export default Dashboard;

import React, { useEffect, useState } from 'react';
import ManageRecipes from '../components/ManageRecipes';
import CreateRecipe from '../components/CreateRecipe';
import { loadIngredients } from '../actions/ingredientsAction';
import { useDispatch } from 'react-redux';

function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadIngredients());
  }, [dispatch]);

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex h-full bg-gray-300">
      <div className="flex flex-col items-center p-8 w-full">
        <h1>Hello, Restaurant-Title</h1>
        <ManageRecipes state={setShowSidebar} />
      </div>

      <div
        className={`w-full lg:w-[70%] xl:w-[60%] 2xl:w-[50%]
      fixed h-full top-0 right-0 ease-in-out duration-300 
      ${showSidebar ? 'translate-x-0' : 'translate-x-full'}
      `}
      >
        <CreateRecipe state={setShowSidebar} />
      </div>
    </div>
  );
}

export default Dashboard;

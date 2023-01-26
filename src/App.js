import { useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard.js';
import User from './pages/User';
import Settings from './pages/Settings';
import { loadIngredients } from './actions/ingredientsAction';
import { loadRecipes } from './actions/recipesAction'
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadIngredients());
    dispatch(loadRecipes());
  }, [dispatch]);


  return (
    <div className="flex h-full">
      <Navbar>
   
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/user" exact element={<User />} />
          <Route path="/settings" exact element={<Settings />} />
        </Routes>
      
        </Navbar>
    </div>
  );
}

export default App;

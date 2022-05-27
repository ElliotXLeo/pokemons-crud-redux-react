import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import './App.css';
import PokemonsLayout from './layouts/PokemonsLayout';
import PokemonsCreate from './pages/pokemons/PokemonsCreate';
import store from './redux/store';

function App() {

  console.log(store.getState());

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/pokemons" replace={true} />} />
      <Route path='/pokemons' element={<PokemonsLayout />}>
        <Route path='create' element={<PokemonsCreate />} />
        <Route path='update/:id' element={<h2>Update Pokémon</h2>} />
        <Route index element={<h2>Pokémons CRUD Redux React</h2>} />
      </Route>
      <Route path='*' element={<h2>404</h2>} />
    </Routes>
  );
}

export default App;
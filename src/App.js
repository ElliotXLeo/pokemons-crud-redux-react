import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import './App.css';
import PokemonsLayout from './layouts/PokemonsLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/pokemons" replace={true} />} />
      <Route path='/pokemons' element={<PokemonsLayout />}>
        <Route path='create' element={<h2>Create Pokémon</h2>} />
        <Route path='update/:id' element={<h2>Update Pokémon</h2>} />
        <Route index element={<h2>Pokémons CRUD Redux React</h2>} />
      </Route>
      <Route path='*' element={<h2>404</h2>} />
    </Routes>
  );
}

export default App;
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Alert from "../components/sections/Alert";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";
import Loader from "../components/sections/Loader";
import { readPokemons } from "../redux/actions/pokemonsActions";

const PokemonsLayout = () => {

  const { loading, error } = useSelector(state => state.pokemonsReducers);
  const dispatch = useDispatch();

  const applicationName = "PokémonsCRUD";

  const credits = {
    year: new Date().getFullYear(),
    author: 'ELGS'
  };

  useEffect(() => {
    dispatch(readPokemons());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading && <Loader />}
      <Header
        applicationName={applicationName}
      />
      <main className="pt-16 pb-8">
        {error.message && <Alert alert={error} />}
        <Outlet />
      </main>
      <Footer
        credits={credits}
      />
    </>
  );
};

export default PokemonsLayout;
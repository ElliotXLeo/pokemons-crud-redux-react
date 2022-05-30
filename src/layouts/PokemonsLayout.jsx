import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Alert from "../components/sections/Alert";
import Header from "../components/sections/Header";
import Loader from "../components/sections/Loader";
import { readPokemons } from "../redux/actions/pokemonsActions";

const PokemonsLayout = () => {

  const applicationName = "PokémonsCRUD";

  const { loading, error } = useSelector(state => state);
  const dispatch = useDispatch();

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
        {error.message && <Alert error={error} />}
        <Outlet />
      </main>
      <footer className="mt-auto text-center">
        ELGS
      </footer>
    </>
  );
};

export default PokemonsLayout;
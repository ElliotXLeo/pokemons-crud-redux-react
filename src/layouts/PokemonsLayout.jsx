import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Alert from "../components/sections/Alert";
import Header from "../components/sections/Header";
import Loader from "../components/sections/Loader";

const PokemonsLayout = () => {

  const applicationName = "PokémonsCRUD";

  const { loading, error } = useSelector(state => state);

  return (
    <>
      {loading && <Loader />}
      <Header
        applicationName={applicationName}
      />
      <main className="text-center pt-16 pb-8">
        {error.message && <Alert error={error} />}
        <Outlet />
      </main>
      <footer className="mt-auto text-center">
        ELGS
      </footer>
    </>
  );
}

export default PokemonsLayout;
import PokemonsForm from "../../components/pokemons/PokemonsForm";

const PokemonsCreate = () => {
  return (
    <section className="py-8">
      <div className="flex flex-col gap-8 container mx-auto px-8 md:px-4">
        <h2 className="text-3xl text-yellow-400 font-bold">Crear Pokémon</h2>
        <PokemonsForm />
      </div>
    </section>
  );
}

export default PokemonsCreate;
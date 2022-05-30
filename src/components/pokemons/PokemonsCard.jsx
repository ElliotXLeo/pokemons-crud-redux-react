import { Link } from "react-router-dom";

const PokemonsCard = ({ pokemon }) => {
  const { _id, name, type, hp, attack, special, image } = pokemon;

  return (
    <div
      className="flex flex-col items-center gap-4 bg-white rounded-lg shadow shadow-cyan-300 hover:shadow-yellow-400 transition-shadow w-full max-w-xs p-4 dark:bg-zinc-700"
    >
      <div className="w-32 h-32">
        <img className="w-full h-full object-cover" src={image.url} alt={name} />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-zinc-600 text-sm font-thin dark:text-zinc-400">Hp: {hp}</p>
        <h5 className="text-black text-xl font-medium dark:text-white">{name}</h5>
        <p className="text-zinc-600 text-sm font-extralight dark:text-zinc-400">{type}</p>
      </div>
      <div className="flex gap-1">
        <span className="bg-zinc-800 rounded-xl text-white text-sm font-normal px-3 py-1">{attack}</span>
        <span className="bg-zinc-800 rounded-xl text-white text-sm font-normal px-3 py-1">{special}</span>
      </div>
      <div className="flex gap-2">
        <Link to={`${_id}`} className="bg-cyan-300 rounded-md text-black font-medium px-3 py-1 cursor-pointer transition-colors hover:bg-white">
          Editar
        </Link>
        <button
          className="bg-rose-500 rounded-md text-white font-medium px-3 py-1 cursor-pointer transition-colors hover:bg-rose-600"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default PokemonsCard;
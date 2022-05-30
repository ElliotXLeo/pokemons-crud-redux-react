import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { deletePokemon } from "../../redux/actions/pokemonsActions";

const PokemonsCard = ({ pokemon }) => {
  const { _id, name, type, hp, attack, special, image } = pokemon;
  const dispatch = useDispatch();

  const handleDelete = (_id) => {
    Swal.fire({
      title: '¿Está seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#f43f5e',
      confirmButtonText: '¡Sí, elimínalo!',
      cancelButtonText: '¡No, cancélalo!',
      reverseButtons: true,
      timer: 5000
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deletePokemon(_id));
        // Swal.fire(
        //   '¡Eliminado!',
        //   'Tu registro ha sido eliminado.',
        //   'success'
        // );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'Tu registro está seguro',
          'error'
        );
      }
    });
  };

  return (
    <div
      className="flex flex-col items-center gap-4 bg-zinc-700 rounded-lg shadow shadow-cyan-300 transition-colors w-full max-w-xs p-4 hover:shadow-yellow-400"
    >
      <figure className="w-32 h-32">
        <img src={image.url} alt={name} className="w-full h-full object-cover" />
      </figure>
      <div className="flex flex-col gap-1 text-center">
        <p className="text-zinc-400 text-sm font-thin">Hp: {hp}</p>
        <h5 className="text-white text-xl font-medium">{name}</h5>
        <p className="text-zinc-400 text-sm font-extralight">{type}</p>
      </div>
      <div className="flex gap-1">
        <span className="bg-zinc-800 rounded-xl text-white text-sm px-3 py-1">{attack}</span>
        <span className="bg-zinc-800 rounded-xl text-white text-sm px-3 py-1">{special}</span>
      </div>
      <div className="flex gap-2">
        <Link to={`${_id}`} className="bg-cyan-300 rounded-md text-black font-medium px-3 py-1 transition-colors hover:bg-white">
          Editar
        </Link>
        <button
          className="bg-rose-500 rounded-md text-white font-medium px-3 py-1 transition-colors hover:bg-rose-600"
          onClick={() => handleDelete(_id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default PokemonsCard;
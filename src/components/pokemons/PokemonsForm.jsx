import * as yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from 'react-redux';
import { createPokemon } from '../../redux/actions/pokemonsActions';

const PokemonsForm = () => {

  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        type: '',
        hp: '',
        attack: '',
        special: '',
        image: {}
      }}
      validationSchema={yup.object({
        name: yup.string().required('El nombre es requerido'),
        type: yup.string().required('El tipo es requerido'),
        hp: yup.number().required('El Hp es requerido').positive().integer(),
        attack: yup.string().required('El ataque es requerido'),
        special: yup.string().required('El especial es requerido')
      })}
      onSubmit={(values, actions) => {
        console.log(values);
        dispatch(createPokemon(values));
        actions.setSubmitting(false);
        actions.resetForm();
      }}
    >
      {({ handleSubmit, setFieldValue, isSubmitting }) => {
        return (
          <Form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 bg-zinc-700 rounded-md w-4/5 max-w-sm mx-auto p-4"
          >
            <div className="flex flex-col gap-1">
              <Field name="name" type="text" placeholder="Nombre" className="bg-zinc-800 rounded p-2" required />
              <ErrorMessage name="name" component="div" className="text-rose-500 text-sm" />
            </div>
            <div className="flex flex-col gap-1">
              <Field name="type" type="text" placeholder="Tipo" className="bg-zinc-800 rounded p-2" required />
              <ErrorMessage name="type" component="div" className="text-rose-500 text-sm" />
            </div>
            <div className="flex flex-col gap-1">
              <Field name="hp" type="number" placeholder="Hp" className="bg-zinc-800 rounded p-2" required />
              <ErrorMessage name="hp" component="div" className="text-rose-500 text-sm" />
            </div>
            <div className="flex flex-col gap-1">
              <Field name="attack" type="text" placeholder="Ataque" className="bg-zinc-800 rounded p-2" required />
              <ErrorMessage name="attack" component="div" className="text-rose-500 text-sm" />
            </div>
            <div className="flex flex-col gap-1">
              <Field name="special" type="text" placeholder="Especial" className="bg-zinc-800 rounded p-2" required />
              <ErrorMessage name="special" component="div" className="text-rose-500 text-sm" />
            </div>
            <input
              type="file"
              name="image"
              className="bg-zinc-800 rounded p-2 text-sm cursor-pointer file:bg-white file:border-0 file:rounded file:text-sm file:font-semibold file:mr-2 file:py-1 file:px-2 file:cursor-pointer file:transition-colors hover:file:bg-zinc-200"
              onChange={(e) => setFieldValue('image', e.target.files[0])}
              required
            />
            <button
              type="submit"
              className="bg-cyan-300 rounded-md text-black font-medium p-2 cursor-pointer transition-colors hover:bg-white disabled:bg-white/50 disabled:cursor-progress "
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Loading 💭' : 'Crear'}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PokemonsForm;
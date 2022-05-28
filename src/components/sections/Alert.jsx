const Alert = ({ error }) => {
  const { name, message } = error;
  return (
    <section className="py-4">
      <div className="flex justify-center container mx-auto px-8 md:px-4">
        <div className="flex items-center gap-2 bg-cyan-300 rounded text-black p-2" role="alert">
          <h3 className="bg-white rounded px-2 py-1 font-bold">{name}</h3>
          <p className="font-semibold">{error.response.data.message} [{message}]</p>
        </div>
      </div>
    </section>
  );
};

export default Alert;
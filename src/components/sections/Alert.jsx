const Alert = ({ alert }) => {
  const { name, message } = alert;
  return (
    <section className="py-4">
      <div className="flex justify-center container mx-auto px-8 md:px-4">
        <div className={`flex items-center gap-2 bg-cyan-300 rounded text-black p-2 ${alert.name === 'AxiosError' && 'bg-rose-500 text-white' }`} role="alert">
          <h3 className="bg-white rounded px-2 py-1 font-bold">{name}</h3>
          <p className="font-semibold">{alert.response?.data.message} [{message}]</p>
        </div>
      </div>
    </section>
  );
};

export default Alert;
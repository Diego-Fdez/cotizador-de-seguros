import useCotizador from "../hooks/useCotizador";

const Error = () => {

  const {error} = useCotizador();

  return (
    <p className="text-red-700 font-bold">{error}</p>
  )
}

export default Error;
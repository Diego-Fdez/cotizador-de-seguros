import useCotizador from "../hooks/useCotizador";
import Formulario from "./Formulario";
import { SpinnerInfinity } from 'spinners-react';
import Resultado from "./Resultado";

const AppSeguro = () => {

  const {cargando} = useCotizador();

  return (
    <>
      <header className="my-10">
        <h1 className="text-white text-center text-4xl font-bold mb-3">
          Cotizador de Seguros de Automóviles
        </h1>
        <main className="bg-white md:w2/3 lg:w2/4 mx-auto shadow rounded-lg p-10">
          <Formulario />
          {cargando ? 
          <SpinnerInfinity className="mt-4 m-auto" size={150} thickness={100} speed={100} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" />
          : <Resultado />}
        </main>
      </header>
    </>
  )
};

export default AppSeguro;
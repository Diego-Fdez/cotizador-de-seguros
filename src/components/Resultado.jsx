import useCotizador from "../hooks/useCotizador";
import { MARCAS, PLANES } from "../constants"
import { useCallback, useMemo, useRef } from "react";

const Resultado = () => {

  const { resultado, datos } = useCotizador();
  const { marca, plan, year } = datos;
  const yearRef = useRef(year);

  const [nombreMarca] = useMemo(() => MARCAS.filter(modelo => modelo.id === Number(marca)), [resultado]);
  const [nombrePlan] = useCallback(PLANES.filter(contrato => contrato.id === Number(plan)), [resultado]);

  if(resultado === 0) return null;

  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-700 font-bold text-3xl">Resumen</h2>
      <p className="my-2">
        <span className="font-bold">Marca: </span>
        {nombreMarca.nombre}
      </p>

      <p className="my-2">
        <span className="font-bold">Año del Vehículo: </span>
        {yearRef.current}
      </p>

      <p className="my-2">
        <span className="font-bold">Plan: </span>
        {nombrePlan.nombre}
      </p>

      <p className="my-2 text-2xl">
        <span className="font-bold">Total Cotización: </span>
        {resultado}
      </p>
    </div>
  )
}

export default Resultado;
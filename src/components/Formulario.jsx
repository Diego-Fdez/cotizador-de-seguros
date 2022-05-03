import { Fragment } from "react"
import { MARCAS, YEARS, PLANES } from "../constants/index"
import useCotizador from "../hooks/useCotizador";
import Error from "./Error"

const Formulario = () => {

  const {datos, 
    handleChangeDatos, 
    error, 
    setError, 
    cotizarSeguro} = useCotizador();

  const handleSubmit = e => {
    e.preventDefault();

    if(Object.values(datos).includes('')) {
      setError('Todos los campos son obligatorios')
      return
    }
    setError('');

    cotizarSeguro();
  }

  return (
    <>
      {error && <Error />}
      <form 
        onSubmit={handleSubmit}
      >
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-700 uppercase" htmlFor="">
            Marca
          </label>
          <select name="marca" id="" 
            onChange={e => handleChangeDatos(e)}
            value={datos.marca}
            className="w-full p-3 bg-white border border-gray-500 rounded-lg"
          >
            <option value="">--Seleccione Marca--</option>
            {MARCAS.map((marca => (
              <option key = {marca.id} 
              value={marca.id}
              >{marca.nombre}</option>
            )))}
          </select>
        </div>

        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-700 uppercase" htmlFor="">
            Año
          </label>
          <select name="year" id="" 
            onChange={e => handleChangeDatos(e)}
            value={datos.year}
            className="w-full p-3 bg-white border border-gray-500 rounded-lg"
          >
            <option value="">--Seleccione Año--</option>
            {YEARS.map((year => (
              <option key = {year} 
              value={year}
              >{year}</option>
            )))}
          </select>
        </div>

        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-700 uppercase" htmlFor="">
            Elige un Plan
          </label>
          <div className="flex gap-3 items-center">
            {PLANES.map(plan => (
              <Fragment key= {plan.id}>
                <label>{plan.nombre}</label>
                <input type="radio" 
                  name="plan" 
                  onChange={e => handleChangeDatos(e)}
                  value={plan.id}/>
              </Fragment>
            ))}
          </div>
        </div>
        <input type="submit" 
          value="Cotizar"
          className="w-full border-gray-700 border-2 rounded-lg text-gray-700 
          uppercase shadow-md cursor-pointer font-bold p-3 transition-colors hover:bg-gray-700 hover:text-white"
        />
      </form>
    </>
  )
}

export default Formulario
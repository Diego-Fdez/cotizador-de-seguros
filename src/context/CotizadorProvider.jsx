import { useState, createContext } from 'react';
import { obtenerDiferenciaYear, 
  calcularMarca, 
  calcularPlan,
  formatearDinero } from '../helpers';

const CotizadorContext = createContext();

const CotizadorProvider = ({children}) => {

  const [datos, setDatos] = useState({
    marca: '',
    year: '',
    plan: '',
  });

  const [error, setError] = useState('');
  const [resultado, setResultado] = useState(0)
  const [cargando, setCargando] = useState(false);

  const handleChangeDatos = e => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    })
  };

  const cotizarSeguro = () => {
    //Una base
    let resultado = 2000;

    //obtener diferencia de años
    const diferencia = obtenerDiferenciaYear(datos.year);

    //restar el 3% por cada año
    resultado -= ((diferencia * 3) * resultado) / 100;

    //% según la marca
    resultado*= calcularMarca(datos.marca);

    //%según plan
    resultado *= calcularPlan(datos.plan)

    resultado = formatearDinero(resultado);

    setCargando(true);

    setTimeout(() => {
      setResultado(resultado);
      setCargando(false);
    }, 1500);
    
  };

  return (
    <CotizadorContext.Provider 
      value={{
        datos,
        handleChangeDatos,
        error,
        setError,
        cotizarSeguro,
        resultado,
        cargando
      }}
    >
      {children}
    </CotizadorContext.Provider>
  )
};

export {
  CotizadorProvider
}

export default CotizadorContext;
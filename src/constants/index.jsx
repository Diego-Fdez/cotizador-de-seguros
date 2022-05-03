export const MARCAS = [
  {id:1, nombre: 'Toyota Hilux'},
  {id:2, nombre: 'Nissan Navara'},
  {id:3, nombre: 'Nissan Frontier'},
  {id:4, nombre: 'Mitsubishi L200'},
];

const YEARMAX = new Date().getFullYear();
export const YEARS = Array.from(
  new Array(20),
  (valor, index) => YEARMAX - index
);

export const PLANES = [
  {id:1, nombre: 'Básico'},
  {id:2, nombre: 'Completo'},
];
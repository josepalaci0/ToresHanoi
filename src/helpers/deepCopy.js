/*  Función para poder hacer una copia
 *   profunda sobre un objeto y conservar la instancia sobre una clase ,
 *   Aplicacion de lo visto en clase de algoritmos
 */
const deepCopy = (object) => {
  return Object.assign(Object.create(Object.getPrototypeOf(object)), object);
};

export default deepCopy;

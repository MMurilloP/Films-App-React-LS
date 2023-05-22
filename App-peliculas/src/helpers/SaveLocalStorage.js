// we create a generic function about save data en LOCALSTORAGE, in this case we are using it to save data of movies when we create a new one. but we refactor it and now we can use for other data.


const saveLocalStorage = (key, element) => {
    //take previous elements saved in LocalStorage. JSON parse change JSON into object JS.
    let elements = JSON.parse(localStorage.getItem(key));
    // are the elements, an array? check it.
    if (Array.isArray(elements)) {
      // if is an array, save a new element. push.
      elements.push(element);
    } else {
      // create an array with the new film.
      elements = [element];
    }
    //save data in LocalStorage: 1 param: name-- 'movies'  2 param: what to save? use JSON.stringify to parse the data into string.
    localStorage.setItem(key, JSON.stringify(elements));
    return element;
  };


export default saveLocalStorage


/*La función saveLocalStorage se encarga de guardar elementos en el almacenamiento local del navegador utilizando el objeto localStorage. Aquí tienes una explicación línea por línea de lo que hace la función:

const saveLocalStorage = (key, element) => {: Esto define una función llamada saveLocalStorage que acepta dos parámetros: key y element. key es el nombre bajo el cual se guardarán los elementos en el almacenamiento local, y element es el elemento que se desea guardar.

let elements = JSON.parse(localStorage.getItem(key));: Esta línea obtiene los elementos previamente guardados en el almacenamiento local utilizando el método getItem del objeto localStorage. El método getItem recibe como argumento la clave (key) bajo la cual se guardaron los elementos. Luego, JSON.parse se utiliza para convertir la cadena JSON recuperada en un objeto JavaScript.

if (Array.isArray(elements)) {: Esta línea verifica si los elementos obtenidos son un arreglo utilizando el método Array.isArray(). Si elements es un arreglo, significa que ya existen elementos guardados bajo la clave key en el almacenamiento local.

elements.push(element);: Si elements es un arreglo, esto significa que ya existen elementos guardados. Entonces, este código agrega el nuevo element al final del arreglo utilizando el método push().

} else {: Si elements no es un arreglo (es decir, es null o undefined), esto significa que no hay elementos guardados bajo la clave key en el almacenamiento local.

elements = [element];: En este caso, se crea un nuevo arreglo que contiene solo el nuevo element. Esto se hace para iniciar un nuevo conjunto de elementos bajo la clave key en el almacenamiento local.

localStorage.setItem(key, JSON.stringify(elements));: Finalmente, esta línea guarda los elementos actualizados en el almacenamiento local utilizando el método setItem del objeto localStorage. Recibe dos argumentos: la clave (key) bajo la cual se guardarán los elementos y los elementos mismos, que se convierten en una cadena JSON utilizando JSON.stringify.

return element;: Por último, la función devuelve el elemento que se guardó en el almacenamiento local.

En resumen, la función saveLocalStorage guarda elementos en el almacenamiento local utilizando la clave proporcionada. Si ya hay elementos guardados bajo esa clave, agrega el nuevo elemento al arreglo existente. Si no hay elementos guardados, crea un nuevo arreglo con el nuevo elemento. Luego, guarda los elementos actualizados en el almacenamiento local y devuelve el elemento guardado. */
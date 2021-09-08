// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  return nombre.charAt(0).toUpperCase() + nombre.slice(1);
}

//other way 
// return nombre[0].toUpperCase() + nombre.slice(1);

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:ls
  var operacion1 = n1 + n2;
    cb(operacion1)
  }
 
  //other way
  // return  cd(n1,n2);

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:

//   var suma = 0;
//   for( var i=0; i < numeros.length; i ++){
//     suma = suma + numeros[i];
//   }
//   cb(suma);
// }


var sumatoria = numeros.reduce(function (acc, contador){
  return acc + contador;
})
cb(sumatoria);
}





function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
//var nuevo= array.forEach(function (array, cb) {
 //return cb(nuevo);
//});

//for(var i =0; i < array.length; i++){
 // cb(array[i]);
//}

array.forEach(function(elemento){
  cb(elemento);
})
}
 




function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:

  //let guardo = array;
  //cb(guardo);
  
var nuevoArray = array.map(cb);
return nuevoArray;
}

//another way
//var array2 = [];
// for(var i = 0; i < array.length; i++){
  //array2.push(cb(array[i]));
//}
//return array2;
//}

// var array2 = array.map(function(elemento){
// return cd(elemento);
//}
// return array2;
//}
//
//
//


function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  //other way
  //var array2=[];
  //for ( var i=0; i<array.length;i++) {
    //if(array[i][0] === 'a') {
    //  array2.push(array[i]);
    //}
   // return array2;
  //}
  
  return array.filter(function(elemento){
    return elemento[0] ==='a';
  })
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};

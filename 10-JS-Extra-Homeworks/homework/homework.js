// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var myArray = [];
  const keys = Object.keys(objeto);
  keys.forEach(k => myArray.push([k, objeto[k]]));
  return myArray;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var chars = {};
  string.split("").forEach(c => {
    var newGo = true;
    Object.keys(chars).forEach(key => {
      if (key === c) {
        chars[c]++;
        newGo = false;
      }
    });
    if (newGo) chars[c] = 1; 
  });
  return chars;
  // return string.split("");
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var upper = [];
  var lower = [];
  s.split("").forEach(c => (c === c.toUpperCase() ? upper.push(c) : lower.push(c)));
  return upper.join("")+lower.join("");
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var newStr = [];
  str.split(" ").forEach(word => newStr.push(word.split("").reverse().join("")));
  return newStr.join(" ");
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  return (numero.toString() === numero.toString().split("").reverse().join("") ? "Es capicua" : "No es capicua");
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  return cadena.split("").filter(c => c !== "a" && c !== "b" && c !== "c").join("");
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var newArr = [];
  var tempArr = [];
  for (let i = 0; i < arr.length; i++) tempArr.push([arr[i].length, arr[i]]);
  tempArr.sort((a,b) => a[0] - b[0]).forEach(word => newArr.push(word[1]));
  return newArr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var union = [];
  arreglo1.forEach(x => {
    arreglo2.forEach(y => {
      if (x === y) {
        var go = true;
        union.forEach(z => {if (x === z) go = false});
        if (go) union.push(x);
      }
    });
  });
  return union.sort((a,b) => a-b);
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};


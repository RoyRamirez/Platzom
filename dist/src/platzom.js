'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = platzom;
function platzom(str) {
  var translation = str;
  //Si la palabra termina en "ar", se le quitan esos dos caracteres
  if (str.toLowerCase().endsWith('ar')) translation = str.slice(0, -2);
  //Si la palabra empieza con Z, se le añade "pe" al final
  if (str.toLowerCase().startsWith('z')) translation += 'pe';
  //Si la palabra traducida tiene 10 o máss letras se parte a la mitad
  // con un guión
  var length = translation.length;
  if (length >= 10) {
    var firstHalf = translation.slice(0, Math.round(length / 2));
    var secondHalf = translation.slice(Math.round(length / 2));
    translation = firstHalf + '-' + secondHalf;
  }
  //Si la palabra es un palindromo ninguna regla cuenta y se devuelve
  //la misma palabra intercalando mayusculas y minusculas
  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  };
  function minMay(str) {
    var length = str.length;
    var translation = '';
    var capitalize = true;
    for (var k = 0; k < length; k++) {
      var char = str.charAt(k);
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }
    return translation;
  }
  if (str == reverse(str)) {
    return minMay(str);
  }
  return translation;
}
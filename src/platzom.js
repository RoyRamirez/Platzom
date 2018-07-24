export default function platzom(str){
  let translation = str;
  //Si la palabra termina en "ar", se le quitan esos dos caracteres
  if (str.toLowerCase().endsWith('ar'))
    translation = str.slice(0, -2);
  //Si la palabra empieza con Z, se le añade "pe" al final
  if (str.toLowerCase().startsWith('z'))
    translation += 'pe';
  //Si la palabra traducida tiene 10 o máss letras se parte a la mitad
  // con un guión
  const length = translation.length
  if (length >= 10){
    const firstHalf = translation.slice(0, Math.round(length/2));
    const secondHalf = translation.slice(Math.round(length/2));
    translation = `${firstHalf}-${secondHalf}`;
  }
  //Si la palabra es un palindromo ninguna regla cuenta y se devuelve
  //la misma palabra intercalando mayusculas y minusculas
  const reverse = (str) => str.split('').reverse().join('');
  function minMay(str){
    const length = str.length;
    let translation = '';
    let capitalize = true;
    for (let k = 0; k < length; k++){
      const char = str.charAt(k);
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize
    }
    return translation;
  }
  if (str == reverse(str)){
    return minMay(str)
  }
  return translation;
}

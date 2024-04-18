export const numerosAPalabras = (arr)=>{
    let numString = ['cero','uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve'];
    let resultado = arr.map(val => numeroLetras[val]);
    
    return resultado
}
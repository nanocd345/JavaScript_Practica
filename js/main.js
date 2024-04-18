import prompt from 'async-prompt'
import sumarRango from "./modules/sumarRangoDeNumeros.js"

let num1 = Number(await prompt("ingrese el numero 1: \n "))
let num2 = Number(await prompt("ingrese el numero 2: \n"))
console.log(sumarRango(num1, num2));
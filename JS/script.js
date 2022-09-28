// alert("estoy funcionando")

const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

const inputPassword= $(".input-generador")

const doceCaracteres = $("#doceCaracteres")
const nueveCaracteres = $("#nueveCaracteres")
const seisCaracteres = $("#seisCaracteres")

const soloLetras=$("#letras")
const lecturaSimple=$("#simple")
const todosLosCaracteres=$("#todos")

const checkMayusculas =$("#mayuscula")
const checkMinusculas= $("#minuscula")
const checkNumeros = $("#numeros")
const checkSimbolos =$("#simbolos")


let password = " "
let arrayMayusculas=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let arrayMinusculas=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"]
let arraySimbolos=["@","#","$","%","^","&","*","(",")","-","_","+","=","!",";",".","/","<",">",",","[","]","{","}"]
let arrayNumeros=["0","1","2","3","4","5","6","7","8","9"]

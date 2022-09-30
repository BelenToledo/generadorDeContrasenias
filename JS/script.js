// alert("estoy funcionando")
//*********OBJETOS**********/
const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)
const btns = document.getElementsByTagName("input")

const inputPassword= $(".input-generador")
const btnGenerador=$(".btn-regenerador")

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

let password = []
///******ARRAYS DECLARADOS*******/

// const  arrayLecturaSimple = arrayMayusculas.concat(arrayNumeros)
// const arraySoloLetras= arrayMayusculas.concat(arrayMinusculas)
// const arrayTodos= arraySoloLetras.concat(arrayNumeros).concat(arraySimbolos)

let mayusculas = "A B C D E F G H I J K L M N Ñ O P Q R S T U V W X Y Z"
let minusculas ="a b c d e f g h i j k l m n ñ o p q r s t u v w x y z"
let numeros= "0 1 2 3 4 5 6 7 8 9"
let simbolos = " ! @ $ % ^ & * ( ) - _ = + { } [ ] ; , . < > ? / *"

//*************FX SELECCION DE CARACTERES y REGLAS*****************/

for(const btn of btns){
     if(btn.addEventListener("click", (e)=>{
        prueba()
    })
) prueba()
}  


const prueba =()=>{
        for(const input of btns){
            if (input.checked){
                console.log(true)
            } else {
                        false

                     }
 }
}
prueba()




// btnGenerador.addEventListener("click", function(){
    
// })






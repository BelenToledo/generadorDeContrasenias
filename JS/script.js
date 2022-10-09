// alert("estoy funcionando")
//*********OBJETOS**********/
const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

const inputPassword= $(".input-generador")
const btnReGenerador=$(".btn-regenerador")
const btnGenerador=$(".btn-generador")

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

let mayusculas = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
let minusculas ="abcdefghijklmnñopqrstuvwxyz"
let numeros= "0123456789"
let simbolos = "!@$%^&*()-_=+{}[];,.<>?/*"
let letras = mayusculas.concat(minusculas)
let simpleRead = minusculas.concat(numeros)
let todos = minusculas.concat(mayusculas).concat(numeros).concat(simbolos)

let caracteres=[]
let password = []


//*************FX SELECCION DE CARACTERES y REGLAS*****************/
const okRadioInputs=()=>{
    if(soloLetras.checked){
        caracteres=letras
    } else if(lecturaSimple.checked){
        caracteres=simpleRead
    }else if(todosLosCaracteres.checked){
        caracteres=todos
    }
    console.log(caracteres)
}

soloLetras.addEventListener("click", okRadioInputs)
lecturaSimple.addEventListener("click", okRadioInputs)
todosLosCaracteres.addEventListener("click", okRadioInputs)

const okMayuscula =()=>{
    if(checkMayusculas.checked){
        caracteres.push(mayusculas)
    } else{
        caracteres = caracteres.filter(element=>{
            return element !== mayusculas 
        })
    }
    
    console.log(caracteres)
    
}
checkMayusculas.addEventListener("click", okMayuscula)  

const okMinusculas=()=>{
    if(checkMinusculas.checked){
        caracteres.push(minusculas)
    }else{
        caracteres = caracteres.filter(element=>{
            return element !== minusculas
        })
    }
    console.log(caracteres)
}
checkMinusculas.addEventListener("click", okMinusculas) 

const okSimbolos =()=>{
    if(checkSimbolos.checked){
        caracteres.push(simbolos)
    }else{
        caracteres= caracteres.filter(element=>{
            return element !== simbolos
        })
    }
    console.log(caracteres)
}
checkSimbolos.addEventListener("click",okSimbolos)

const okNumeros =()=>{
    if(checkNumeros.checked){
        caracteres.push(numeros)
    }else{
        caracteres = caracteres.filter(element =>{
            return element !== numeros
        })
    }
    console.log(caracteres)
}
checkNumeros.addEventListener("click",okNumeros)



///*******FX DEL BOTON PARA CORTAR LACONTRASENIA POR CANTIDAD DE CARACTERES Y MOSTRARLA EN EL INPUT */
const generar=()=>{

    if(doceCaracteres.checked){
        for(let i= 0; i <parseInt(doceCaracteres.value);i++)
        password += caracteres[Math.floor(Math.random()*caracteres.length)]
    }else if( nueveCaracteres.checked){
        for(let i = 0; i< parseInt(nueveCaracteres.value); i++)
        password += caracteres[Math.floor(Math.random()*caracteres.length)]
    }else if(seisCaracteres.checked){
        for(let i = 0; i<parseInt(seisCaracteres.value); i++)
        password += carcteres[Math.floor(Math.random()*caracteres.length)]

    }
    console.log(password)

}

doceCaracteres.addEventListener("click", generar)
nueveCaracteres.addEventListener("click",generar)
seisCaracteres.addEventListener("click",generar)



    btnGenerador.addEventListener("click", generar) 
    
    document.querySelector(".input-generador").value = "hola"
 
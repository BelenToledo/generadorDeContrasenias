const $ = (selector) => document.querySelector(selector)
const checkbox =$("#checkbox1")
const checkbox2 =$("#checkbox2")

let pass =[]
let arrinputs=[]
// iterar array de inputs para comprobar si estan chequeados
// si estan chequeados comparar con el array de caracteristicas si son iguales
//si es igual, pushearlo y sumarlo "+=" en el array pass
let mays = "ABC"
let min = "abc"
let simb = " / . ,"

const prueba =(checkbox,str)=>{
    if(checkbox.checked){
        console.log(arrinputs.push(str))
    }
}
 prueba(checkbox, mays)
console.log( arrinputs)





// for( fx in input1){
//             if(input1[fx] == true){
//                 console.log("hola")
//             }
//         }
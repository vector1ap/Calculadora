let calculadora =  require("./calculadora")

let process = require("process")

let operacion  = process.argv[2]
let numero1 = Number(process.argv[3])
let numero2 = Number(process.argv[4])
let sumar = (a,b) => a + b;
switch (operacion){
   case sumar:
       console.log(calculadora.sumar(numero1,numero2));
       break;
       }
console.log(process.argv)
console.log(sumar(numero1,numero2))

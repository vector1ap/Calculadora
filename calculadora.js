let calculadora = {
    sumar : (a,b) => a+ b,
    restar : (a,b) => a-b,
    multiplicar : (a,b) => a* b,
    dividir : (a,b) => {
        if (a !== 0 && b !== 0){
            return a/b
        }
        else {
            return "Por favor ingresa un numero mayor a cero"
        }
    }
}

module.exports = calculadora
//para crear modulos.
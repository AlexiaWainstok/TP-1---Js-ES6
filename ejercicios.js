
function formatearNombre(nombre){

    console.log(nombre[0].toUpperCase() + nombre.slice(1).toLowerCase()) 
}

function contarLetras(texto) {

    console.log(texto.replaceAll(" ", "").length)
}

function maximo(a, b, c){

    console.log([a, b, c].reduce((max,num) => num>max ? num: max))
}

function validarPassword(contraseña){

    console.log(let tieneUnNumero = contraseña.split("".some()))
    console.log
}

function formatearNombre(nombre){

    console.log(nombre[0].toUpperCase() + nombre.slice(1).toLowerCase()) 
}

function contarLetras(texto) {

    console.log(texto.replaceAll(" ", "").length)
}

function maximo(a, b, c){

    console.log([a, b, c].reduce((max,num) => num>max ? num: max))
}

function validarPassword(password) {
  console.log(password.length >= 8 && /\d/.test(password));
}


function sumarArray(numeros) {
    let suma = 0;
    for (let numero of numeros) {
        suma = suma + numero;
    }
    console.log(suma);
}


function mayorNumero(numeros){
    console.log(Math.max(...numeros));
}


function obtenerPares(numeros) {
console.log(numeros.filter(num => num % 2 === 0)) 
}


function descripcionUsuario(usuario) {
console.log(`${usuario.nombre} tiene ${usuario.edad} años`);
}

function activarUsuario(usuario) {
    usuario.activo = true;
    console.log(`${usuario.nombre} ahora está activo: ${usuario.activo}`);
}

function precioTotal(productos) {
    let total = 0;

    for (let producto of productos) {
        total += producto.precio;
    }

    console.log(`El precio total es: ${total}`);
}


const usuarios = [
{ nombre: "Ana", edad: 17 },
{ nombre: "Juan", edad: 25 },
{ nombre: "Pedro", edad: 30 }
]


function mostrarNombres() {
console.log(usuarios.map(u => u.nombre))
}


function mayorDeEdad() {
  const mayores = usuarios
    .filter(u => u.edad >= 18)
    .map(u => u.nombre);

  console.log(mayores);
}

function sumaEdades() {
const total = usuarios.reduce((acumulador, u) => acumulador + u.edad, 0);

console.log(total);
}


14


15



16 
function buscarProducto(productos, nombre) {
return productos.find(p => p.nombre === nombre);
}

const productos = [
{ nombre: "Mouse", precio: 1000 },
{ nombre: "Teclado", precio: 2000 },
{ nombre: "Monitor", precio: 5000 }
];

console.log(buscarProducto(productos, "Teclado"));



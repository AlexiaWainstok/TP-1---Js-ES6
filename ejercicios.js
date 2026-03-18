
function formatearNombre() {
  const nombre = document.getElementById("nombreInput").value;

  if (nombre.length > 0) {
    const nombreFormateado =
      nombre[0].toUpperCase() + nombre.slice(1).toLowerCase();

    document.getElementById("resultado").textContent = nombreFormateado;
  } else {
    document.getElementById("resultado").textContent = "Ingresá un nombre";
  }
}

function contarLetras() {
  const texto = document.getElementById("textoInput").value;

  if (texto.length > 0) {
    const cantidad = texto.replaceAll(" ", "").length;

    document.getElementById("resultado").textContent =
      "Cantidad de letras: " + cantidad;
  } else {
    document.getElementById("resultado").textContent =
      "Ingresá un texto";
  }
}

function maximo() {
  const a = Number(document.getElementById("num1").value);
  const b = Number(document.getElementById("num2").value);
  const c = Number(document.getElementById("num3").value);

  if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
    const mayor = [a, b, c].reduce((max, num) => num > max ? num : max);

    document.getElementById("resultado").textContent =
      "El número mayor es: " + mayor;
  } else {
    document.getElementById("resultado").textContent =
      "Ingresá los tres números";
  }
}

function validarPassword() {
  const password = document.getElementById("passwordInput").value;

  if (password.length > 0) {
   
    const esValida = password.length >= 8 && /\d/.test(password);

    document.getElementById("resultado").textContent =
      esValida ? "Contraseña válida " : "Contraseña inválida ";
  } else {
    document.getElementById("resultado").textContent =
      "Ingresá una contraseña";
  }
}

function sumarArray() {
  const input = document.getElementById("numerosInput").value;

  if (input.length > 0) {

    const numeros = input.split(",").map(num => Number(num.trim()));

    let suma = 0;
    for (let numero of numeros) {
      suma += numero;
    }

    document.getElementById("resultado").textContent =
      "La suma es: " + suma;
  } else {
    document.getElementById("resultado").textContent =
      "Ingresá algunos números";
  }
}

function mayorNumero() {
  const input = document.getElementById("numerosInput1").value;

  if (input.length > 0) {
    
    const numeros = input.split(",").map(num => Number(num.trim()));

    const mayor = Math.max(...numeros);

    document.getElementById("resultado").textContent =
      "El número mayor es: " + mayor;
  } else {
    document.getElementById("resultado").textContent =
      "Ingresá algunos números";
  }
} 


function obtenerPares() {
  const input = document.getElementById("numerosInput2").value;
  if (!input) return alert("Ingresá algunos números");

  const pares = input
    .split(",")
    .map(n => parseInt(n))      
    .filter(n => !isNaN(n) && n % 2 === 0);

  document.getElementById("resultado").textContent =
    pares.length ? "Números pares: " + pares.join(", ") : "No hay números pares";
}

function descripcionUsuario() {
  const usuario = {
    nombre: document.getElementById("nombreInput1").value,
    edad: Number(document.getElementById("edadInput").value),
  }

  document.getElementById("resultado").textContent =
    `${usuario.nombre} tiene ${usuario.edad} años`;
}

function activarUsuario() {
  
  const usuario = {
    nombre: document.getElementById("nombreInput2").value,
    edad: Number(document.getElementById("edadInput2").value),
    activo: false
  };

  usuario.activo = true;

  document.getElementById("resultado").textContent =
    `${usuario.nombre} ahora está activo`;
} 


var productos = [];

function agregarProducto() {
    let nombre = document.getElementById("nombre").value;
    let precio = Number(document.getElementById("precio").value);

    let producto = { nombre: nombre, precio: precio };

    productos.push(producto);

    document.getElementById("listaProductos").innerHTML += 
        "<li>" + producto.nombre + " - $" + producto.precio + "</li>";
}

function precioTotal() {
    let total = 0;

    for (let producto of productos) {
        total += producto.precio;
    }

    document.getElementById("resultadoP").innerText = "El precio total es: " + total;
}


const usuarios = [
{ nombre: "Ana", edad: 17 },
{ nombre: "Juan", edad: 25 },
{ nombre: "Pedro", edad: 30 }
]

function mostrarNombres() {
const nombres = usuarios.map(u => u.nombre);
  document.getElementById("resultado").innerText = nombres.join(", ");
}


function mayorDeEdad() {
  const mayores = usuarios
    .filter(u => u.edad >= 18)
    .map(u => u.nombre);

  document.getElementById("resultado").innerText = mayores.join(", ");
}

function sumaEdades() {
const total = usuarios.reduce((acumulador, u) => acumulador + u.edad, 0);

  document.getElementById("resultado").innerText = total;
}

function mostrarProducto(producto) {
    const { nombre, precio } = producto;
      document.getElementById("resultado").innerText =
      `Producto: ${nombre}, Precio: ${precio}`;
}

function copiarProductoConStock(producto) {
    const nuevoProducto = { ...producto, stock: 5 };

    document.getElementById("resultado").innerText =
        `Producto: ${nuevoProducto.nombre}, Precio: ${nuevoProducto.precio}, Stock: ${nuevoProducto.stock}`;
}

const productosEjemplo = [
{ nombre: "Mouse", precio: 1000 },
{ nombre: "Teclado", precio: 2000 },
{ nombre: "Monitor", precio: 5000 }
];

function buscarProducto() {
  const nombreBuscado = document.getElementById("NOMBRE").value;

  const producto = productosEjemplo.find(p => p.nombre === nombreBuscado);

  document.getElementById("resultado").innerText =
    producto
      ? `Producto: ${producto.nombre}, Precio: ${producto.precio}`
      : "Producto no encontrado";
}

function productosCaros() {
  const caros = productosEjemplo
    .filter(p => p.precio > 50)
    .map(p => p.nombre);

  document.getElementById("resultado").innerText = caros.join(", ");
}





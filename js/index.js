function inicializarElementos() {
    carritoDom = document.querySelector("#carrito");
}



function obtenerCarritoLS() {
    carrito = (JSON.parse(localStorage.getItem("carrito"))) ?? ({cantidad: 0, suma: 0});
    actualizarCarrito();
}

function almacenarCarritoLS() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarCarrito();
}

function actualizarCarrito() {
    carrito.cantidad < 100 ? (carritoDom.innerText = carrito.cantidad) : (carritoDom.innerText = `99+`);
}

function toastProducto(id) {
    Toastify({
        text: `${productos[id].nombre} agregado al carrito`,
        duration: 1500,
        destination: "pages/carrito.html",
        newWindow: false,
        close: false,
        gravity: "bottom",
        position: "left",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #0059ff, #e6a009)",
        },
        onClick: function(){}
      }).showToast();
}

function filtrarProductos(tipo, dom, array, seccion) {
    if(seccion != 3) {
        for(let i = 0; i < productos.length; i++) {
            productos[i].tipo == tipo && array.push(productos[i]);
        }
    }
    if(seccion == 3) {
        for(let i = 0; i < productos.length; i++) {
            array.push(productos[i]);
        }
    }
    if(seccion == 1) {
        array.sort((a, b) => {
            if(a.año < b.año) {
                return 1;
            }
            if(a.año > b.año) {
                return -1;
            }
            else {
                return 0;
            }
        })
    }
    if(seccion == 0 || seccion >= 2) {
        array.sort((a, b) => {
            if(a.ventas < b.ventas) {
                return 1;
            }
            if(a.ventas > b.ventas) {
                return -1;
            }
            else {
                return 0;
            }
        })
    }
    for(let i = 0; i < 8; i++) {
        let crearProductoDom = document.createElement("div");
        crearProductoDom.className = "producto";
        crearProductoDom.innerHTML = `<img src="img/productos/${array[i].id}.jpg" alt="imagen ${array[i].nombre}">
        <h5>${array[i].nombre}</h5><p><span class="precio">${array[i].precio}$</span></p>
        <button id="agregar-${array[i].id}-${seccion}">Agregar al carrito</button>`;
        dom.appendChild(crearProductoDom);
    }
    for(let i = 0; i < 8; i++) {
        document.querySelector(`#agregar-${array[i].id}-${seccion}`).addEventListener("click", (e) => {
            let juegoId = e.target.id.split("-")[1];
            let juegoSeleccionado = productos.find(producto => producto.id == juegoId);
            carrito.cantidad++;
            carrito.suma += productos[juegoId].precio;
            toastProducto(juegoId);
            almacenarCarritoLS();
        });
    }
}

function mostrarProductos() {
    obtenerCarritoLS();
    let productosConsolas = [];
    let productosJuegosNuevos = [];
    let productosJuegosMasVendidos = [];
    let destacados = [];
    filtrarProductos("consola", consolasDom, productosConsolas, 0);
    filtrarProductos("juego", ultimosLanzamientosDom, productosJuegosNuevos, 1);
    filtrarProductos("juego", masVendidosDom, productosJuegosMasVendidos, 2);
    filtrarProductos("producto", destacadosDom, destacados, 3);
}

let productos = [];
let carrito;
const consolasDom = document.querySelector("#consolas");
const ultimosLanzamientosDom = document.querySelector("#ultimosLanzamientos");
const masVendidosDom = document.querySelector("#masVendidos");
const destacadosDom = document.querySelector("#destacados");
let carritoDom;

function main() {
    inicializarElementos();
    obtenerProductosJson();
}

main();
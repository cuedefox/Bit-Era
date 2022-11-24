function inicializarElementos() {
    carritoDom = document.querySelector("#carrito");
}

async function obtenerProductosJson() {
    try {
        const response = await fetch("https://62e5aceede23e26379229493.mockapi.io/productos");
        const data = await response.json();
        for (item of data) {
            productos.push(item);
        }
        mostrarProductos();
    } catch (error) {
        Swal.fire({
            icon: 'error',
            color: '#e6a009',
            title: 'Lo sentimos',
            text: error,
            buttonsStyling: false
          });
    }
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

function filtrarProductos(dom, array) {
    for(let i = 0; i < productos.length; i++) {
        array.push(productos[i]);
    }
    for(let i = 0; i < array.length; i++) {
        let crearProductoDom = document.createElement("div");
        crearProductoDom.className = "producto";
        crearProductoDom.innerHTML = `<img src="../img/productos/${array[i].id}.jpg" alt="imagen ${array[i].nombre}">
        <h5>${array[i].nombre}</h5><p><span class="precio">${array[i].precio}$</span></p>
        <button id="agregar-${array[i].id}">Agregar al carrito</button>`;
        dom.appendChild(crearProductoDom);
    }
    for(let i = 0; i < array.length; i++) {
        document.querySelector(`#agregar-${array[i].id}`).addEventListener("click", (e) => {
            let juegoId = e.target.id.split("-")[1];
            carrito.cantidad++;
            carrito.suma += productos[juegoId].precio;
            toastProducto(juegoId);
            almacenarCarritoLS();
        });
    }
}

function mostrarProductos() {
    obtenerCarritoLS();
    let productosCatalogo = [];
    filtrarProductos(productosDom, productosCatalogo);
}

function toastProducto(id) {
    Toastify({
        text: `${productos[id].nombre} agregado al carrito`,
        duration: 1500,
        destination: "carrito.html",
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

let productos = [];
let carrito;
const productosDom = document.querySelector("#productos");
let carritoDom;

function main() {
    inicializarElementos();
    obtenerProductosJson();
}

main();
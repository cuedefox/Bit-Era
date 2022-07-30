async function obtenerProductosJson() {
    try {
        const response = await fetch("https://62e5aceede23e26379229493.mockapi.io/productos");
        const data = await response.json();
        for (item of data) {
            productos.push(item);
        }
    } catch (error) {
        alert("error");
    }
}

function inicializarElementos() {
    carritoDom = document.querySelector("#carrito");
    comprar = document.querySelector("#comprar");
}

function actualizarCarrito() {
    carrito.cantidad < 100 ? (carritoDom.innerText = carrito.cantidad) : (carritoDom.innerText = `99+`);
}

function obtenerCarritoLS() {
    carrito = (JSON.parse(localStorage.getItem("carrito"))) ?? ({cantidad: 0, suma: 0});
    actualizarCarrito();
}

function mostrarTotalCuenta() {
    const {cantidad, suma} = carrito;
    detallesResumenDom.innerHTML = `cantidad: <span class="precio">${cantidad}</span> productos<br>
    total sin iva: <span class="precio">${suma.toFixed(2)}</span>$<br>iva: <span class="precio">${(suma * 0.21).toFixed(2)}</span>$
    <br>total con iva: <span class="precio">${(suma + (suma * 0.21)).toFixed(2)}</span>$`
}

function inicializarEventos() {
    comprar.onclick = () => {
        if(carrito.cantidad > 0) {
            carrito = {cantidad: 0, suma: 0};
            localStorage.setItem("carrito", JSON.stringify(carrito));
            actualizarCarrito();
            mostrarTotalCuenta();
            Swal.fire({
                icon: 'success',
                color: '#e6a009',
                title: 'Compra Exitosa',
                text: 'Gracias por comprar con nosotros',
                buttonsStyling: false
              });
        }else {
            Swal.fire({
                icon: 'info',
                color: '#e6a009',
                title: 'Carrito Vacio',
                text: 'Agrega productos al carrito para poder comprar',
                buttonsStyling: false
              });
        }
    }
}

let productos = [];
const resumenProductosDom = document.querySelector("#resumenProductos");
const resumenCuentaDom = document.querySelector("#resumenCuenta");
const detallesResumenDom = document.querySelector("#detallesResumen");
let comprar;
let carrito;
let carritoDom;

function main() {
    inicializarElementos();
    obtenerCarritoLS();
    mostrarTotalCuenta();
    inicializarEventos();
}

main();
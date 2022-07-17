class Producto {
    constructor(id, nombre, tipo, precio, año, genero, desarrolladora, ventas) {
        this.id = id,
        this.nombre = nombre,
        this.tipo = tipo,
        this.precio = precio,
        this.año = año,
        this.genero = genero,
        this.desarrolladora = desarrolladora,
        this.ventas = ventas
    }
}

function inicializarProductos() {
    productos.push(new Producto(0, "Nintendo Switch", "consola", 119999.99, 2017, "consola", "Nintendo", 143));
    productos.push(new Producto(1, "PS 1", "consola", 29999.99, 1994, "consola", "Sony", 1));
    productos.push(new Producto(2, "Game boy color", "consola", 82399.99, 1998, "consola", "Nintendo", 32));
    productos.push(new Producto(3, "PSP", "consola", 29999.99, 2005, "consola", "Sony", 115));
    productos.push(new Producto(4, "XBOX", "consola", 69999.99, 2001, "consola", "Microsoft", 3));
    productos.push(new Producto(5, "DS Lite", "consola", 19999.99, 2006, "consola", "Nintendo", 7));
    productos.push(new Producto(6, "PS 2", "consola", 39999.99, 2000, "consola", "Sony", 298));
    productos.push(new Producto(7, "PS 3", "consola", 54999.99, 2006, "consola", "Sony", 2));
    productos.push(new Producto(8, "PS 4", "consola", 89999.99, 2013, "consola", "Sony", 75));
    productos.push(new Producto(9, "PS 5", "consola", 249999.99, 2020, "consola", "Sony", 38));
    productos.push(new Producto(10, "Metal Gear", "juego", 299.99, 1987, "sigilo", "Konami", 0));
    productos.push(new Producto(11, "Metal Gear 2: solid snake", "juego", 299.99, 1990, "sigilo", "Konami", 0));
    productos.push(new Producto(12, "Metal Gear solid", "juego", 1199.99, 1998, "sigilo", "Konami", 0));
    productos.push(new Producto(13, "Metal Gear solid 2: sons of liberty", "juego", 599.99, 2001, "sigilo", "Konami", 0));
    productos.push(new Producto(14, "Metal Gear solid 3: snake eater (subsistence)", "juego", 599.99, 2006, "sigilo", "Konami", 5));
    productos.push(new Producto(15, "Metal Gear solid portable ops", "juego", 499.99, 2006, "sigilo", "Konami", 0));
    productos.push(new Producto(16, "Metal Gear solid 4: guns of the patriots", "juego", 799.99, 2008, "sigilo", "Konami", 0));
    productos.push(new Producto(17, "Metal Gear solid peace walker", "juego", 499.99, 2010, "sigilo", "Konami", 0));
    productos.push(new Producto(18, "Metal Gear rising: revengance", "juego", 999.99, 2013, "accion", "Konami", 11));
    productos.push(new Producto(19, "Metal Gear solid 5: definitive experience", "juego", 1999.99, 2016, "sigilo", "Konami", 3));
    productos.push(new Producto(20, "La leyenda de Mateo", "juego", 0.00, 2020, "rpg", "cuede games", 460));
    productos.push(new Producto(21, "GTA V", "juego", 599.99, 2013, "accion", "rockstar", 204));
    productos.push(new Producto(22, "COD BO1", "juego", 299.99, 2010, "accion", "treyarch", 115));
    productos.push(new Producto(23, "Final Fantasy", "juego", 299.99, 2007, "rpg", "square enix", 32));
    productos.push(new Producto(24, "Final Fantasy 2", "juego", 299.99, 2008, "rpg", "square enix", 4));
    productos.push(new Producto(25, "Star Wars 3", "juego", 549.99, 2005, "accion", "lucas arts", 47));
    productos.push(new Producto(26, "The last of us", "juego", 849.99, 2013, "accion", "naughty dog", 200));
    productos.push(new Producto(27, "The last of us 2", "juego", 2999.99, 2020, "accion", "naughty dog", 53));
    productos.push(new Producto(28, "Crash Bandicoot Nsane trilogy", "juego", 1849.99, 2017, "plataformas", "naughty dog", 23));
    productos.push(new Producto(29, "Silent Hill 2", "juego", 649.99, 2001, "terror", "konami", 66));
    productos.push(new Producto(30, "Star Wars jedi fallen order", "juego", 2849.99, 2019, "accion", "electronic arts", 2));
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
        carrito = {cantidad: 0, suma: 0};
        localStorage.setItem("carrito", JSON.stringify(carrito));
        actualizarCarrito();
        mostrarTotalCuenta();
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
    inicializarProductos();
    inicializarElementos();
    obtenerCarritoLS();
    mostrarTotalCuenta();
    inicializarEventos();
}

main();
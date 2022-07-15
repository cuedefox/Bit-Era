let productos = [];
let carrito = {cantidad: 0, suma: 0};
const consolasDom = document.querySelector("#consolas");
const ultimosLanzamientosDom = document.querySelector("#ultimosLanzamientos");
const masVendidosDom = document.querySelector("#masVendidos");
const destacadosDom = document.querySelector("#destacados");
class producto {
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
    productos.push(new producto(0, "Nintendo Switch", "consola", 119999.99, 2017, "consola", "Nintendo", 0));
    productos.push(new producto(1, "PS1", "consola", 29999.99, 1994, "consola", "Sony", 0));
    productos.push(new producto(2, "Game boy color", "consola", 82399.99, 1998, "consola", "Nintendo", 0));
    productos.push(new producto(3, "PSP", "consola", 29999.99, 2005, "consola", "Sony", 0));
    productos.push(new producto(4, "XBOX", "consola", 69999.99, 2001, "consola", "Microsoft", 0));
    productos.push(new producto(5, "DS Lite", "consola", 19999.99, 2006, "consola", "Nintendo", 0));
    productos.push(new producto(6, "PS2", "consola", 39999.99, 2000, "consola", "Sony", 0));
    productos.push(new producto(7, "PS3", "consola", 54999.99, 2006, "consola", "Sony", 0));
    productos.push(new producto(8, "PS4", "consola", 89999.99, 2013, "consola", "Sony", 0));
    productos.push(new producto(9, "PS5", "consola", 249999.99, 2020, "consola", "Sony", 0));
    productos.push(new producto(10, "Metal Gear", "juego", 299.99, 1987, "sigilo", "Konami", 0));
    productos.push(new producto(11, "Metal Gear 2: solid snake", "juego", 299.99, 1990, "sigilo", "Konami", 0));
    productos.push(new producto(12, "Metal Gear solid", "juego", 1199.99, 1998, "sigilo", "Konami", 0));
    productos.push(new producto(13, "Metal Gear solid 2: sons of liberty", "juego", 599.99, 2001, "sigilo", "Konami", 0));
    productos.push(new producto(14, "Metal Gear solid 3: snake eater (subsistence)", "juego", 599.99, 2006, "sigilo", "Konami", 5));
    productos.push(new producto(15, "Metal Gear solid portable ops", "juego", 499.99, 2006, "sigilo", "Konami", 0));
    productos.push(new producto(16, "Metal Gear solid 4: guns of the patriots", "juego", 799.99, 2008, "sigilo", "Konami", 0));
    productos.push(new producto(17, "Metal Gear solid peace walker", "juego", 499.99, 2010, "sigilo", "Konami", 0));
    productos.push(new producto(18, "Metal Gear rising: revengance", "juego", 999.99, 2013, "accion", "Konami", 11));
    productos.push(new producto(19, "Metal Gear solid 5: definitive experience", "juego", 1999.99, 2016, "sigilo", "Konami", 3));
    productos.push(new producto(20, "La leyenda de Mateo", "juego", 0.00, 2020, "rpg", "cuede games", 460));
}

function filtrarProductos(tipo, dom, array, seccion) {
    if(seccion != "destacados") {
        for(let i = 0; i < productos.length; i++) {
            if(productos[i].tipo == tipo) {
             array.push(productos[i]);
            }
        }
    }
    if(seccion === "ultimos lanzamientos") {
        array.sort((a, b) => {
            if(a.año < b.año) {
                return -1;
            }
            if(a.año > b.año) {
                return 1;
            }
            else {
                return 0;
            }
        })
    }
    for(let i = 0; i < 8; i++) {
        let productoDom = document.createElement("div");
        productoDom.className = "producto";
        productoDom.innerHTML = `<img src="img/productos/${array[i].id}.jpg" alt="imagen ${array[i].nombre}">
        <h5>${array[i].nombre}</h5><p><span class="precio">${array[i].precio}</span></p>
        <button id="agregar${array[i].id}">Agregar al carrito</button>`;
        dom.appendChild(productoDom);
    }
}

function mostrarProductos() {
    let productosConsolas = [];
    let productosJuegosNuevos = [];
    let productosJuegosMasVendidos = [];
    filtrarProductos("consola", consolasDom, productosConsolas, "consola");
    filtrarProductos("juego", ultimosLanzamientosDom, productosJuegosNuevos, "ultimos lanzamientos");
    filtrarProductos("juego", masVendidosDom, productosJuegosMasVendidos, "mas cendidos");
}

function main() {
    inicializarProductos();
    mostrarProductos();
}

main();
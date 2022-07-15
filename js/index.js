let productos = [];
let carrito = {cantidad: 0, suma: 0, juegos: {}, cantidadjuegos: {}};
const consolasDom = document.querySelector("#consolas");
const ultimosLanzamientosDom = document.querySelector("#ultimosLanzamientos");
const masVendidosDom = document.querySelector("#masVendidos");
const destacadosDom = document.querySelector("#destacados");
let carritoDom;
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

function inicializarElementos() {
    carritoDom = document.querySelector("#carrito");
    
}

function inicializarProductos() {
    productos.push(new producto(0, "Nintendo Switch", "consola", 119999.99, 2017, "consola", "Nintendo", 143));
    productos.push(new producto(1, "PS 1", "consola", 29999.99, 1994, "consola", "Sony", 1));
    productos.push(new producto(2, "Game boy color", "consola", 82399.99, 1998, "consola", "Nintendo", 32));
    productos.push(new producto(3, "PSP", "consola", 29999.99, 2005, "consola", "Sony", 115));
    productos.push(new producto(4, "XBOX", "consola", 69999.99, 2001, "consola", "Microsoft", 3));
    productos.push(new producto(5, "DS Lite", "consola", 19999.99, 2006, "consola", "Nintendo", 7));
    productos.push(new producto(6, "PS 2", "consola", 39999.99, 2000, "consola", "Sony", 298));
    productos.push(new producto(7, "PS 3", "consola", 54999.99, 2006, "consola", "Sony", 2));
    productos.push(new producto(8, "PS 4", "consola", 89999.99, 2013, "consola", "Sony", 75));
    productos.push(new producto(9, "PS 5", "consola", 249999.99, 2020, "consola", "Sony", 38));
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
    productos.push(new producto(21, "GTA V", "juego", 599.99, 2013, "accion", "rockstar", 204));
    productos.push(new producto(22, "COD BO1", "juego", 299.99, 2010, "accion", "treyarch", 115));
    productos.push(new producto(23, "Final Fantasy", "juego", 299.99, 2007, "rpg", "square enix", 32));
    productos.push(new producto(24, "Final Fantasy 2", "juego", 299.99, 2008, "rpg", "square enix", 4));
    productos.push(new producto(25, "Star Wars 3", "juego", 549.99, 2005, "accion", "lucas arts", 47));
    productos.push(new producto(26, "The last of us", "juego", 849.99, 2013, "accion", "naughty dog", 200));
    productos.push(new producto(27, "The last of us 2", "juego", 2999.99, 2020, "accion", "naughty dog", 53));
    productos.push(new producto(28, "Crash Bandicoot Nsane trilogy", "juego", 1849.99, 2017, "plataformas", "naughty dog", 23));
    productos.push(new producto(29, "Silent Hill 2", "juego", 649.99, 2001, "terror", "konami", 66));
    productos.push(new producto(30, "Star Wars jedi fallen order", "juego", 2849.99, 2019, "accion", "electronic arts", 2));
}

function filtrarProductos(tipo, dom, array, seccion) {
    if(seccion != 3) {
        for(let i = 0; i < productos.length; i++) {
            if(productos[i].tipo == tipo) {
             array.push(productos[i]);
            }
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
        let productoDom = document.createElement("div");
        productoDom.className = "producto";
        productoDom.innerHTML = `<img src="img/productos/${array[i].id}.jpg" alt="imagen ${array[i].nombre}">
        <h5>${array[i].nombre}</h5><p><span class="precio">${array[i].precio}$</span></p>
        <button id="agregar${array[i].id}">Agregar al carrito</button>`;
        dom.appendChild(productoDom);
    }
}

function mostrarProductos() {
    if(carrito.cantidad < 100) {
        carritoDom.innerText = carrito.cantidad;
    }else {
        carritoDom.innerText = `99+`
    }
    let productosConsolas = [];
    let productosJuegosNuevos = [];
    let productosJuegosMasVendidos = [];
    let destacados = [];
    filtrarProductos("consola", consolasDom, productosConsolas, 0);
    filtrarProductos("juego", ultimosLanzamientosDom, productosJuegosNuevos, 1);
    filtrarProductos("juego", masVendidosDom, productosJuegosMasVendidos, 2);
    filtrarProductos("producto", destacadosDom, destacados, 3);
}

function main() {
    inicializarElementos();
    inicializarProductos();
    mostrarProductos();
}

main();
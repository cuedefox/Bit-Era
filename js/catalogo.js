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

function inicializarElementos() {
    carritoDom = document.querySelector("#carrito");
    agregar0 = document.querySelector("#agregar0");
    agregar1 = document.querySelector("#agregar1");
    agregar2 = document.querySelector("#agregar2");
    agregar3 = document.querySelector("#agregar3");
    agregar4 = document.querySelector("#agregar4");
    agregar5 = document.querySelector("#agregar5");
    agregar6 = document.querySelector("#agregar6");
    agregar7 = document.querySelector("#agregar7");
    agregar8 = document.querySelector("#agregar8");
    agregar9 = document.querySelector("#agregar9");
    agregar10 = document.querySelector("#agregar10");
    agregar11 = document.querySelector("#agregar11");
    agregar12 = document.querySelector("#agregar12");
    agregar13 = document.querySelector("#agregar13");
    agregar14 = document.querySelector("#agregar14");
    agregar15 = document.querySelector("#agregar15");
    agregar16 = document.querySelector("#agregar16");
    agregar17 = document.querySelector("#agregar17");
    agregar18 = document.querySelector("#agregar18");
    agregar19 = document.querySelector("#agregar19");
    agregar20 = document.querySelector("#agregar20");
    agregar21 = document.querySelector("#agregar21");
    agregar22 = document.querySelector("#agregar22");
    agregar23 = document.querySelector("#agregar23");
    agregar24 = document.querySelector("#agregar24");
    agregar25 = document.querySelector("#agregar25");
    agregar26 = document.querySelector("#agregar26");
    agregar27 = document.querySelector("#agregar27");
    agregar28 = document.querySelector("#agregar28");
    agregar29 = document.querySelector("#agregar29");
    agregar30 = document.querySelector("#agregar30");
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

function mostrarProductos() {
    obtenerCarritoLS();
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

function inicializarEventos() {
    agregar0.onclick = () => {
        carrito.cantidad++;
        carrito.suma += productos[0].precio;
        toastProducto(0);
        almacenarCarritoLS();
    }
    agregar1.onclick = () => {
        carrito.cantidad++;
        carrito.suma += productos[1].precio;
        toastProducto(1);
        almacenarCarritoLS();
    }
    agregar2.onclick = () => {
        carrito.cantidad++;
        carrito.suma += productos[2].precio;
        toastProducto(2);
        almacenarCarritoLS();
    }
    agregar3.onclick = () => {
        carrito.cantidad++;
        carrito.suma += productos[3].precio;
        toastProducto(3);
        almacenarCarritoLS();
    }
    agregar4.onclick = () => {
        carrito.cantidad++;
        carrito.suma += productos[4].precio;
        toastProducto(4);
        almacenarCarritoLS();
    }
    agregar5.onclick = () => {
        carrito.cantidad++;
        carrito.suma += productos[5].precio;
        toastProducto(5);
        almacenarCarritoLS();
    }
    agregar6.onclick = () => {
        carrito.cantidad++;
        carrito.suma += productos[6].precio;
        toastProducto(6);
        almacenarCarritoLS();
    }
    agregar7.onclick = () => {
        carrito.cantidad++;
        carrito.suma += productos[7].precio;
        toastProducto(7);
        almacenarCarritoLS();
    }
    agregar8.onclick = () => {
        carrito.cantidad++;
        carrito.suma += productos[8].precio;
        toastProducto(8);
        almacenarCarritoLS();
    }
    agregar9.onclick = () => {
        carrito.cantidad++;
        carrito.suma += productos[9].precio;
        toastProducto(9);
        almacenarCarritoLS();
    }
    agregar10.onclick = () => {
        carrito.cantidad++;
        carrito.suma += productos[10].precio;
        toastProducto(10);
        almacenarCarritoLS();
    }
    agregar11.onclick = () => {
        carrito.cantidad++;
        carrito.suma += productos[11].precio;
        toastProducto(11);
        almacenarCarritoLS();
    }
    agregar12.onclick = () => {
        carrito.cantidad++;
        carrito.suma += productos[12].precio;
        toastProducto(12);
        almacenarCarritoLS();
    }
    agregar13.onclick = () => {
        carrito.cantidad++;
        carrito.suma += productos[13].precio;
        toastProducto(13);
        almacenarCarritoLS();
    }
    agregar14.onclick = () => {
        carrito.cantidad++;
        carrito.suma += productos[14].precio;
        toastProducto(14);
        almacenarCarritoLS();
    }
    agregar15.onclick = () => {
        carrito.cantidad++;
        carrito.suma += productos[15].precio;
        toastProducto(15);
        almacenarCarritoLS();
    }
    agregar16.onclick = () => {
        carrito.cantidad++;
        carrito.suma += productos[16].precio;
        toastProducto(16);
        almacenarCarritoLS();
    }
    agregar17.onclick = () => {
        carrito.cantidad++;
        carrito.suma += productos[17].precio;
        toastProducto(17);
        almacenarCarritoLS();
    }
    agregar18.onclick = () => {
        carrito.cantidad++;
        carrito.suma += productos[18].precio;
        toastProducto(18);
        almacenarCarritoLS();
    }
    agregar19.onclick = () => {
        carrito.cantidad++;
        carrito.suma += productos[19].precio;
        toastProducto(19);
        almacenarCarritoLS();
    }
    agregar20.onclick = () => {
        carrito.cantidad++;
        carrito.suma += productos[20].precio;
        toastProducto(20);
        almacenarCarritoLS();
    }
    agregar21.onclick = () => {
        carrito.cantidad++;
        carrito.suma += productos[21].precio;
        toastProducto(21);
        almacenarCarritoLS();
    }
    agregar22.onclick = () => {
        carrito.cantidad++;
        carrito.suma += productos[22].precio;
        toastProducto(22);
        almacenarCarritoLS();
    }
    agregar23.onclick = () => {
        carrito.cantidad++;
        carrito.suma += productos[23].precio;
        toastProducto(23);
        almacenarCarritoLS();
    }
    agregar24.onclick = () => {
        carrito.cantidad++;
        carrito.suma += productos[24].precio;
        toastProducto(24);
        almacenarCarritoLS();
    }
    agregar25.onclick = () => {
        carrito.cantidad++;
        carrito.suma += productos[25].precio;
        toastProducto(25);
        almacenarCarritoLS();
    }
    agregar26.onclick = () => {
        carrito.cantidad++;
        carrito.suma += productos[26].precio;
        toastProducto(26);
        almacenarCarritoLS();
    }
    agregar27.onclick = () => {
        carrito.cantidad++;
        carrito.suma += productos[27].precio;
        toastProducto(27);
        almacenarCarritoLS();
    }
    agregar28.onclick = () => {
        carrito.cantidad++;
        carrito.suma += productos[28].precio;
        toastProducto(28);
        almacenarCarritoLS();
    }
    agregar29.onclick = () => {
        carrito.cantidad++;
        carrito.suma += productos[29].precio;
        toastProducto(29);
        almacenarCarritoLS();
    }
    agregar30.onclick = () => {
        carrito.cantidad++;
        carrito.suma += productos[30].precio;
        toastProducto(30);
        almacenarCarritoLS();
    }
}

let productos = [];
let agregar0;
let agregar1;
let agregar2;
let agregar3;
let agregar4;
let agregar5;
let agregar6;
let agregar7;
let agregar8;
let agregar9;
let agregar10;
let agregar11;
let agregar12;
let agregar13;
let agregar14;
let agregar15;
let agregar16;
let agregar17;
let agregar18;
let agregar19;
let agregar20;
let agregar21;
let agregar22;
let agregar23;
let agregar24;
let agregar25;
let agregar26;
let agregar27;
let agregar28;
let agregar29;
let agregar30;
let carrito;
const productosDom = document.querySelector("#productos");
let carritoDom;

function main() {
    inicializarElementos();
    inicializarProductos();
    mostrarProductos();
    inicializarEventos();
}

main();
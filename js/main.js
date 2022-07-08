function agregarCarrito(e, id) {
    e.preventDefault;
    let formulario = e.target;
    carrito.cantidad += formulario.children[1].value;
    suma += juegos[id].precio;
    carrito.id += formulario.children[1].value;
}
class juego {
    constructor(id, nombre, precio, genero, año, desarrolladora, plataforma) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.genero = genero;
        this.año = año;
        this.desarrolladora = desarrolladora;
        this.plataforma = plataforma;
    }
}
let carrito = {cantidad: 0, suma: 0, 0: 0, 1: 0, 2: 0, 3: 0};
let carritoDom = document.querySelector("#carrito");
let header = document.querySelector("header");
let juegosDom = document.querySelector("#juegos");
let resumenDom = document.querySelector("#resumen");
let carritoHeader = carrito.cantidad;
let juegos = [];
juegos.push(new juego(0, "Final Fantasy 1", 400, "Rol", 2007, "Square Enix", "PSP"));
juegos.push(new juego(1, "Final Fantasy 2", 400, "Rol", 2008, "Square Enix", "PSP"));
juegos.push(new juego(2, "Star Wars episodio 3", 1000, "accion", 2005, "LucasArts", "PS2"));
juegos.push(new juego(3, "Metal Gear Solid 3: subsistence", 3100, "accion", 2005, "Konami", "PS2"));
carritoDom.innerHTML = `<p>carrito: ${carritoHeader}</p>`;
header.appendChild(carritoDom);
console.log(carritoHeader);
for(let i = 0; i < juegos.length; i++) {
    let div = document.createElement("div");
    div.className = "juego";
    div.innerHTML = `<p><span class="nombre">${juegos[i].nombre}</span>
    <br><span class="precio">${juegos[i].precio}$</span><br>Genero: ${juegos[i].genero}<br>
    año: ${juegos[i].año}<br>desarrolladora: ${juegos[i].desarrolladora}<br>${juegos[i].plataforma}</p>
    <form>Cantidad:<input type="number" value="1"><br><button id="comprar${i}">Agregar al Carrito</button></form>`;
    juegosDom.appendChild(div);
}
btnComprar0 = document.querySelector("#comprar0");
btnComprar1 = document.querySelector("#comprar1");
btnComprar2 = document.querySelector("#comprar2");
btnComprar3 = document.querySelector("#comprar3");
btnComprar0.onclick = agregarCarrito(Event, 0);
function comprar(e, id) {
    e.preventDefault();
    let formulario = e.target;
    juegos[id].carrito += parseInt(formulario.children[0].value);
    carrito.cantidad += parseInt(formulario.children[0].value);
    carrito.suma += juegos[id].precio * parseInt(formulario.children[0].value);
    productos.innerHTML = "";
    agregarResumen();
}

function quitar(e, id) {
    e.preventDefault();
    carrito.cantidad -= juegos[id].carrito;
    carrito.suma -= juegos[id].carrito * juegos[id].precio;
    juegos[id].carrito = 0;
    productos.innerHTML = "";
    agregarResumen();
}
function pagar(e, cuotas) {
    e.preventDefault();
    if(cuotas == 1) {
        alert(`Su total es de ${suma(carrito.suma, iva(carrito.suma)).toFixed(2)}$, ¡gracias por comprar con nosotros!`);
        location. reload()
    }else if(cuotas == 3) {
        let total3 = suma(suma(carrito.suma, iva(carrito.suma)), multi(suma(carrito.suma, iva(carrito.suma)), 0.05)).toFixed(2);
        alert(`Su total es de ${cuotas} cuotas de ${dividir(total3, 3).toFixed(2)}$ cada una, haciendo un total de ${total3}$, ¡Gracias por comprar con nosotros!`);
        location. reload()
    }else if(cuotas == 6) {
        let total6 = suma(suma(carrito.suma, iva(carrito.suma)), multi(suma(carrito.suma, iva(carrito.suma)), 0.1)).toFixed(2);
        alert(`Su total es de ${cuotas} cuotas de ${dividir(total6, 6).toFixed(2)}$ cada una, haciendo un total de ${total6}$, ¡Gracias por comprar con nosotros!`);
        location. reload()
    }else if(cuotas == 12) {
        let total12 = suma(suma(carrito.suma, iva(carrito.suma)), multi(suma(carrito.suma, iva(carrito.suma)), 0.2)).toFixed(2);
        alert(`Su total es de ${cuotas} cuotas de ${dividir(total12, 12).toFixed(2)}$ cada una, haciendo un total de ${total12}$, ¡Gracias por comprar con nosotros!`);
        location. reload()
    }
}
function agregarResumen() {
    for (let i = 0; i < juegos.length; i++) {
        if (juegos[i].carrito > 0) {
            let div = document.createElement("div");
            div.id = `resumen${i}`;
            div.innerHTML = `<p>${juegos[i].nombre} (${juegos[i].carrito}) = ${juegos[i].carrito * juegos[i].precio}$</p>
            <form id="quitar${i}"><button type="submit">Quitar</button></form>`;
            productos.appendChild(div); 
        }
    }
    carritoDom.innerHTML = `<p>carrito: ${carrito.cantidad}</p>`;
    paga.innerHTML = `<p>Juegos: ${carrito.cantidad}<br>Total: ${carrito.suma.toFixed(2)}$<br>Iva: ${iva(carrito.suma).toFixed(2)}$</p><hr><p>Total con iva incluido: ${suma(carrito.suma, iva(carrito.suma)).toFixed(2)}$`;
}
class juego {
    constructor(id, nombre, precio, genero, año, desarrolladora, plataforma, carrito) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.genero = genero;
        this.año = año;
        this.desarrolladora = desarrolladora;
        this.plataforma = plataforma;
        this.carrito = carrito;
    }
}
const suma = (a, b) => a + b;
const multi = (a, b) => a * b;
const dividir = (a, b) => a / b;
const iva = (precio) => precio*0.21;
let carrito = {
    cantidad: 0,
    suma: 0
};
let productos = document.querySelector("#productos");
let paga = document.querySelector("#paga");
let carritoDom = document.querySelector("#carrito");
let header = document.querySelector("header");
let juegosDom = document.querySelector("#juegos");
let resumenDom = document.querySelector("#resumen");
let juegos = [];
juegos.push(new juego(0, "Final Fantasy 1", 415, "Rol", 2007, "Square Enix", "PSP", 0));
juegos.push(new juego(1, "Final Fantasy 2", 400, "Rol", 2008, "Square Enix", "PSP", 0));
juegos.push(new juego(2, "Star Wars episodio 3", 1115, "accion", 2005, "LucasArts", "PS2", 0));
juegos.push(new juego(3, "Metal Gear Solid 3: subsistence", 3100, "accion", 2005, "Konami", "PS2", 0));
carritoDom.innerHTML = `<p>carrito: ${carrito.cantidad}</p>`;
header.appendChild(carritoDom);
for (let i = 0; i < juegos.length; i++) {
    let div = document.createElement("div");
    div.className = "juego";
    div.innerHTML = `<p><span class="nombre">${juegos[i].nombre}</span>
    <br><span class="precio">${juegos[i].precio}$</span><br>Genero: ${juegos[i].genero}<br>
    año: ${juegos[i].año}<br>desarrolladora: ${juegos[i].desarrolladora}<br>${juegos[i].plataforma}</p>
    <form id="comprar${i}">Cantidad:<input type="number" value="1"><br>
    <button type="submit">Agregar al Carrito</button></form>`;
    juegosDom.appendChild(div);
}
let btnComprar0 = document.querySelector("#comprar0");
let btnComprar1 = document.querySelector("#comprar1");
let btnComprar2 = document.querySelector("#comprar2");
let btnComprar3 = document.querySelector("#comprar3");
let pagar1 = document.querySelector("#pagar");
let pagar3 = document.querySelector("#pagar3");
let pagar6 = document.querySelector("#pagar6");
let pagar12 = document.querySelector("#pagar12");
pagar1.onclick = (event) => pagar(event, 1);
pagar3.onclick = (event) => pagar(event, 3);
pagar6.onclick = (event) => pagar(event, 6);
pagar12.onclick = (event) => pagar(event, 12);
btnComprar0.onsubmit = (event) => comprar(event, 0);
btnComprar1.onsubmit = (event) => comprar(event, 1);
btnComprar2.onsubmit = (event) => comprar(event, 2);
btnComprar3.onsubmit = (event) => comprar(event, 3);

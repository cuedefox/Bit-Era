const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const iva = a => a * 0.21;
let cod = 0;
let gta = 0;
let leyen = 0;
let ff = 0;
let total = 0;
let cantidadJuegos = 0;
let entrada = parseInt(prompt(`carrito: ${cantidadJuegos}\n¡Bienvenido a Bit Era!\nTu tienda de videojuegos Argentina de confianza\n¿Que deseas hacer?\n1.Añadir juegos al carrito\n2.Quitar juegos del carrito\n3.Ver total / Finalizar compra\nIngrese ESC para salir.`));
while (entrada != "ESC") {
    switch(entrada) {
        case 1:
            let elegirJuegos;
            while (elegirJuegos != 5) {
                elegirJuegos = parseInt(prompt(`carrito: ${cantidadJuegos}\n¿Que juego deseas agregar al carrito?\n1.Call of duty\n2.GTA\n3.La leyenda de mateo\n4.Final Fantasy\n5.Presione 5 para salir.`));
            }
            break
        case 2:

        case 3:

            entrada = parseInt(prompt(`carrito: ${cantidadJuegos}\n¡Bienvenido a Bit Era!\nTu tienda de videojuegos Argentina de confianza\n¿Que deseas hacer?\n1.Añadir juegos al carrito\n2.Quitar juegos del carrito\n3.Ver total / Finalizar compra\nIngrese ESC para salir.`));
    }
}
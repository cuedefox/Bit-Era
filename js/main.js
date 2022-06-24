class Juego {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multi = (a, b) => a * b;
const div = (a, b) => a / b;
const iva = a => a * 0.21; 
const juegos = [];
juegos.push(new Juego(1, "Call of Duty", 980));
juegos.push(new Juego(2, "GTA", 550));
juegos.push(new Juego(3, "La leyenda de mateo", 1500));
juegos.push(new Juego(4, "Final Fantasy", 310));
let cod = 0;
let gta = 0;
let leyen = 0;
let ff = 0;
let total = 0;
let cantidadJuegos = 0;
let entrada;
do {
    let elegirJuegos;
    let unidades;
    entrada = parseInt(prompt(`carrito: ${cantidadJuegos}\n¡Bienvenido a Bit Era!\nTu tienda de videojuegos Argentina de confianza\n¿Que deseas hacer?\n1.Añadir juegos al carrito\n2.Quitar juegos del carrito\n3.Ver total / Finalizar compra\n4.Para salir.`));
    switch(entrada) {
        case 1:
            while (elegirJuegos != 5) {
                elegirJuegos = parseInt(prompt(`carrito: ${cantidadJuegos}\n¿Que juego deseas agregar al carrito?\n1.${juegos[0].nombre} ${juegos[0].precio}$\n2.${juegos[1].nombre} ${juegos[1].precio}$\n3.${juegos[2].nombre} ${juegos[2].precio}$\n4.${juegos[3].nombre} ${juegos[3].precio}$\n5.Presione 5 para salir.`));
                switch(elegirJuegos) {
                    case 1:
                        unidades = parseInt(prompt(`¿Cuantas unidades del juego ${juegos[0].nombre} vas a llevar?`));
                        cod = sumar(cod, unidades);
                        cantidadJuegos = sumar(cantidadJuegos ,unidades);
                        total = sumar(total, multi(unidades, juegos[0].precio));
                        break
                    case 2:
                        unidades = parseInt(prompt(`¿Cuantas unidades del juego ${juegos[1].nombre} vas a llevar?`));
                        gta = sumar(gta, unidades);
                        cantidadJuegos = sumar(cantidadJuegos ,unidades);
                        total = sumar(total, multi(unidades, juegos[1].precio));
                        break
                    case 3:
                        unidades = parseInt(prompt(`¿Cuantas unidades del juego ${juegos[2].nombre} vas a llevar?`));
                        leyen = sumar(leyen, unidades);
                        cantidadJuegos = sumar(cantidadJuegos ,unidades);
                        total = sumar(total, multi(unidades, juegos[2].precio));
                        break
                    case 4:
                        unidades = parseInt(prompt(`¿Cuantas unidades del juego ${juegos[3].nombre} vas a llevar?`));
                        ff = sumar(ff, unidades);
                        cantidadJuegos = sumar(cantidadJuegos ,unidades);
                        total = sumar(total, multi(unidades, juegos[3].precio));
                        break;
                    default: 
                        break;
                }
            }
            break;
        case 2:
            while(elegirJuegos != 5) {
                elegirJuegos = parseInt(prompt(`carrito: ${cantidadJuegos}\n¿Desea quitar algun juego del carrito?, seleccione cual y cuantos\n1.${juegos[0].nombre}       cantidad: ${cod}\n2.${juegos[1].nombre}       cantidad: ${gta}\n3.${juegos[2].nombre}       cantidad: ${leyen}\n4.${juegos[3].nombre}       cantidad: ${ff}\n5.Ingrese 5 para salir`));
                switch(elegirJuegos) {
                    case 1:
                        if (cod > 0) {
                            unidades = parseInt(prompt(`Cuantas unidades de ${juegos[0].nombre} deseas eliminar    tienes: ${cod}`));
                            if (unidades > cod) {
                                alert("No tienes esa cantidad de unidades");
                            }else if (unidades <= cod) {
                                cod = restar(cod, unidades);
                                cantidadJuegos = restar(cantidadJuegos, unidades);
                                total = restar(total, multi(unidades, juegos[0].precio));
                            }
                        }else {
                            alert(`No tienes ningun ${juegos[0].nombre} en el carrito`);
                        }
                        break;
                    case 2:
                        if (gta > 0) {
                            unidades = parseInt(prompt(`Cuantas unidades de ${juegos[1].nombre} deseas eliminar    tienes: ${gta}`));
                            if (unidades > gta) {
                                alert("No tienes esa cantidad de unidades");
                            }else if (unidades <= gta) {
                                gta = restar(gta, unidades);
                                cantidadJuegos = restar(cantidadJuegos, unidades);
                                total = restar(total, multi(unidades, juegos[1].precio));
                            }
                        }else {
                            alert(`No tienes ningun ${juegos[1].nombre} en el carrito`);
                        }
                        break;
                    case 3:
                        if (leyen > 0) {
                            unidades = parseInt(prompt(`Cuantas unidades de ${juegos[2].nombre} deseas eliminar    tienes: ${leyen}`));
                            if (unidades > leyen) {
                                alert("No tienes esa cantidad de unidades");
                            }else if (unidades <= leyen) {
                                leyen = restar(leyen, unidades);
                                cantidadJuegos = restar(cantidadJuegos, unidades);
                                total = restar(total, multi(unidades, juegos[2].precio));
                            }
                        }else {
                            alert(`No tienes ningun ${juegos[2].nombre} en el carrito`);
                        }
                        break;
                    case 4:
                        if (ff > 0) {
                            unidades = parseInt(prompt(`Cuantas unidades de ${juegos[3].nombre} deseas eliminar    tienes: ${ff}`));
                            if (unidades > ff) {
                                alert("No tienes esa cantidad de unidades");
                            }else if (unidades <= ff) {
                                ff = restar(ff, unidades);
                                cantidadJuegos = restar(cantidadJuegos, unidades);
                                total = restar(total, multi(unidades, juegos[3].precio));
                            }
                        }else {
                            alert(`No tienes ningun ${juegos[3].nombre} en el carrito`);
                        }
                        break;
                    default:
                        break;
                }
            }
            break;
        case 3:
            while(elegirJuegos != 1) {
                elegirJuegos = parseInt(prompt(`carrito: ${cantidadJuegos}\nSu precio total de videojuegos es de $${total}\nPresione:\n1.Seguir Comprando\n2.Finalizar compra.`));
                switch(elegirJuegos) {
                    case 2:
                        unidades = parseInt(prompt(`Usted esta llevando ${cantidadJuegos} Juegos por $${total}\n${juegos[0].nombre} X ${cod}: $${multi(cod, juegos[0].precio)}\n${juegos[1].nombre} X ${gta}: $${multi(gta, juegos[1].precio)}\n${juegos[2].nombre} X ${leyen}: $${multi(leyen, juegos[2].precio)}\n${juegos[3].nombre} X ${ff}: $${multi(ff, juegos[3].precio)}\niva: $${iva(total).toFixed(2)}\nTotal con iva $${sumar(total, iva(total)).toFixed(2)}\nPresione:\n1.Realizar la compra en un pago\n2.Realizar la compra en 3 cuotas con 5% de interes\n3.Realizar la compra en 6 cuotas con 10% de interes\n4.Realizar la compra en 12 cuotas con 20% de interes`));
                        switch(unidades) {
                            case 1:
                                alert(`Su total es de $${sumar(total, iva(total)).toFixed(2)}, ¡Gracias por su compra!`);
                                entrada = 4;
                                break;
                            case 2:
                                alert(`Su total es de 3 cuotas de $${div(sumar(total, sumar(iva(total), multi(total, 0.05))), 3).toFixed(2)} ¡Gracias por comprar en Bit Era!`);
                                entrada = 4;
                                break;
                            case 3:
                                alert(`Su total es de 6 cuotas de $${div(sumar(total, sumar(iva(total), multi(total, 0.1))), 6).toFixed(2)} ¡Gracias por comprar en Bit Era!`);
                                entrada = 4;
                                break;
                            case 4:
                                alert(`Su total es de 12 cuotas de $${div(sumar(total, sumar(iva(total), multi(total, 0.2))), 12).toFixed(2)} ¡Gracias por comprar en Bit Era!`);
                                entrada = 4;
                                break;
                            default:
                                break;
                        }
                        default:
                            break;
                }
                break
            }
            break;
    }
}while(entrada != 4);
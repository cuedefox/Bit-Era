const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multi = (a, b) => a * b;
const div = (a, b) => a / b;
const iva = a => a * 0.21; 
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
                elegirJuegos = parseInt(prompt(`carrito: ${cantidadJuegos}\n¿Que juego deseas agregar al carrito?\n1.Call of duty 980$\n2.GTA 550$\n3.La leyenda de mateo 1500$\n4.Final Fantasy 310$\n5.Presione 5 para salir.`));
                switch(elegirJuegos) {
                    case 1:
                        unidades = parseInt(prompt("¿Cuantas unidades del juego Call of Duty vas a llevar?"));
                        cod = sumar(cod, unidades);
                        cantidadJuegos = sumar(cantidadJuegos ,unidades);
                        total = sumar(total, multi(unidades, 980));
                        break
                    case 2:
                        unidades = parseInt(prompt("¿Cuantas unidades del juego GTA vas a llevar?"));
                        gta = sumar(gta, unidades);
                        cantidadJuegos = sumar(cantidadJuegos ,unidades);
                        total = sumar(total, multi(unidades, 550));
                        break
                    case 3:
                        unidades = parseInt(prompt("¿Cuantas unidades del juego La leyenda de mateo vas a llevar?"));
                        leyen = sumar(leyen, unidades);
                        cantidadJuegos = sumar(cantidadJuegos ,unidades);
                        total = sumar(total, multi(unidades, 1500));
                        break
                    case 4:
                        unidades = parseInt(prompt("¿Cuantas unidades del juego Final Fantasy vas a llevar?"));
                        ff = sumar(ff, unidades);
                        cantidadJuegos = sumar(cantidadJuegos ,unidades);
                        total = sumar(total, multi(unidades, 310));
                        break;
                    default: 
                        break;
                }
            }
            break;
        case 2:
            while(elegirJuegos != 5) {
                elegirJuegos = parseInt(prompt(`carrito: ${cantidadJuegos}\n¿Desea quitar algun juego del carrito?, seleccione cual y cuantos\n1.Call of duty       cantidad: ${cod}\n2.GTA       cantidad: ${gta}\n3.La leyenda de mateo       cantidad: ${leyen}\n4.Final Fantasy       cantidad: ${ff}\n5.Ingrese 5 para salir`));
                switch(elegirJuegos) {
                    case 1:
                        if (cod > 0) {
                            unidades = parseInt(prompt(`Cuantas unidades de Call of duty deseas eliminar    tienes: ${cod}`));
                            if (unidades > cod) {
                                alert("No tienes esa cantidad de unidades");
                            }else if (unidades <= cod) {
                                cod = restar(cod, unidades);
                                cantidadJuegos = restar(cantidadJuegos, unidades);
                                total = restar(total, multi(unidades, 980));
                            }
                        }else {
                            alert("No tienes ningun Call of duty en el carrito");
                        }
                        break;
                    case 2:
                        if (gta > 0) {
                            unidades = parseInt(prompt(`Cuantas unidades de GTA deseas eliminar    tienes: ${gta}`));
                            if (unidades > gta) {
                                alert("No tienes esa cantidad de unidades");
                            }else if (unidades <= gta) {
                                gta = restar(gta, unidades);
                                cantidadJuegos = restar(cantidadJuegos, unidades);
                                total = restar(total, multi(unidades, 550));
                            }
                        }else {
                            alert("No tienes ningun GTA en el carrito");
                        }
                        break;
                    case 3:
                        if (leyen > 0) {
                            unidades = parseInt(prompt(`Cuantas unidades de La leyenda de mateo deseas eliminar    tienes: ${leyen}`));
                            if (unidades > leyen) {
                                alert("No tienes esa cantidad de unidades");
                            }else if (unidades <= leyen) {
                                leyen = restar(leyen, unidades);
                                cantidadJuegos = restar(cantidadJuegos, unidades);
                                total = restar(total, multi(unidades, 1500));
                            }
                        }else {
                            alert("No tienes ningun La leyenda de mateo en el carrito");
                        }
                        break;
                    case 4:
                        if (ff > 0) {
                            unidades = parseInt(prompt(`Cuantas unidades de Final Fantasy deseas eliminar    tienes: ${ff}`));
                            if (unidades > ff) {
                                alert("No tienes esa cantidad de unidades");
                            }else if (unidades <= ff) {
                                ff = restar(ff, unidades);
                                cantidadJuegos = restar(cantidadJuegos, unidades);
                                total = restar(total, multi(unidades, 310));
                            }
                        }else {
                            alert("No tienes ningun Final Fantasy en el carrito");
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
                        unidades = parseInt(prompt(`Usted esta llevando ${cantidadJuegos} Juegos por $${total}\nCall of Duty X ${cod}: $${multi(cod, 980)}\nGTA X ${gta}: $${multi(gta, 550)}\nLa leyenda de mateo X ${leyen}: $${multi(leyen, 1500)}\nFinal Fantasy X ${ff}: $${multi(ff, 310)}\niva: $${iva(total).toFixed(2)}\nTotal con iva $${sumar(total, iva(total)).toFixed(2)}\nPresione:\n1.Realizar la compra en un pago\n2.Realizar la compra en 3 cuotas con 5% de interes\n3.Realizar la compra en 6 cuotas con 10% de interes\n4.Realizar la compra en 12 cuotas con 20% de interes`));
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
}while (entrada != 4);
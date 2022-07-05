class Juego {
    constructor(id, nombre, precio, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multi = (a, b) => a * b;
const div = (a, b) => a / b;
const iva = a => a * 0.21; 
const juegos = [];
juegos.push(new Juego(1, "Call of Duty", 980, 0));
juegos.push(new Juego(2, "GTA", 550, 0));
juegos.push(new Juego(3, "La leyemda de mateo", 1500, 0));
juegos.push(new Juego(4, "Final Fantasy", 310, 0));
let total = 0;
let cantidadJuegos = 0;
let entrada;
let carrito = document.getElementById("carrito");
let compra = false;
let precio = 0;
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
                        juegos[0].cantidad = sumar(juegos[0].cantidad, unidades);
                        cantidadJuegos = juegos.reduce((tot, el) => tot + el.cantidad, 0);
                        total = sumar(total, multi(unidades, juegos[0].precio));
                        break
                    case 2:
                        unidades = parseInt(prompt(`¿Cuantas unidades del juego ${juegos[1].nombre} vas a llevar?`));
                        juegos[1].cantidad = sumar(juegos[1].cantidad, unidades);
                        cantidadJuegos = juegos.reduce((tot, el) => tot + el.cantidad, 0);
                        total = sumar(total, multi(unidades, juegos[1].precio));
                        break
                    case 3:
                        unidades = parseInt(prompt(`¿Cuantas unidades del juego ${juegos[2].nombre} vas a llevar?`));
                        juegos[2].cantidad = sumar(juegos[2].cantidad, unidades);
                        cantidadJuegos = juegos.reduce((tot, el) => tot + el.cantidad, 0);
                        total = sumar(total, multi(unidades, juegos[2].precio));
                        break
                    case 4:
                        unidades = parseInt(prompt(`¿Cuantas unidades del juego ${juegos[3].nombre} vas a llevar?`));
                        juegos[3].cantidad = sumar(juegos[3].cantidad, unidades);
                        cantidadJuegos = juegos.reduce((tot, el) => tot + el.cantidad, 0);
                        total = sumar(total, multi(unidades, juegos[3].precio));
                        break;
                    default: 
                        break;
                }
            }
            break;
        case 2:
            while(elegirJuegos != 5) {
                elegirJuegos = parseInt(prompt(`carrito: ${cantidadJuegos}\n¿Desea quitar algun juego del carrito?, seleccione cual y cuantos\n1.${juegos[0].nombre}       cantidad: ${juegos[0].cantidad}\n2.${juegos[1].nombre}       cantidad: ${juegos[1].cantidad}\n3.${juegos[2].nombre}       cantidad: ${juegos[2].cantidad}\n4.${juegos[3].nombre}       cantidad: ${juegos[3].cantidad}\n5.Ingrese 5 para salir`));
                switch(elegirJuegos) {
                    case 1:
                        if (juegos[0].cantidad > 0) {
                            unidades = parseInt(prompt(`Cuantas unidades de ${juegos[0].nombre} deseas eliminar    tienes: ${juegos[0].cantidad}`));
                            if (unidades > juegos[0].cantidad) {
                                alert("No tienes esa cantidad de unidades");
                            }else if (unidades <= juegos[0].cantidad) {
                                juegos[0].cantidad = restar(juegos[0].cantidad, unidades);
                                cantidadJuegos = juegos.reduce((tot, el) => tot + el.cantidad, 0);
                                total = restar(total, multi(unidades, juegos[0].precio));
                            }
                        }else {
                            alert(`No tienes ningun ${juegos[0].nombre} en el carrito`);
                        }
                        break;
                    case 2:
                        if (juegos[1].cantidad > 0) {
                            unidades = parseInt(prompt(`Cuantas unidades de ${juegos[1].nombre} deseas eliminar    tienes: ${juegos[1].cantidad}`));
                            if (unidades > juegos[1].cantidad) {
                                alert("No tienes esa cantidad de unidades");
                            }else if (unidades <= juegos[1].cantidad) {
                                juegos[1].cantidad = restar(juegos[1].cantidad, unidades);
                                cantidadJuegos = juegos.reduce((tot, el) => tot + el.cantidad, 0);
                                total = restar(total, multi(unidades, juegos[1].precio));
                            }
                        }else {
                            alert(`No tienes ningun ${juegos[1].nombre} en el carrito`);
                        }
                        break;
                    case 3:
                        if (juegos[2].cantidad > 0) {
                            unidades = parseInt(prompt(`Cuantas unidades de ${juegos[2].nombre} deseas eliminar    tienes: ${juegos[2].cantidad}`));
                            if (unidades > juegos[2].cantidad) {
                                alert("No tienes esa cantidad de unidades");
                            }else if (unidades <= juegos[2].cantidad) {
                                juegos[2].cantidad = restar(juegos[2].cantidad, unidades);
                                cantidadJuegos = juegos.reduce((tot, el) => tot + el.cantidad, 0);
                                total = restar(total, multi(unidades, juegos[2].precio));
                            }
                        }else {
                            alert(`No tienes ningun ${juegos[2].nombre} en el carrito`);
                        }
                        break;
                    case 4:
                        if (juegos[3].cantidad > 0) {
                            unidades = parseInt(prompt(`Cuantas unidades de ${juegos[3].nombre} deseas eliminar    tienes: ${juegos[3].cantidad}`));
                            if (unidades > juegos[3].cantidad) {
                                alert("No tienes esa cantidad de unidades");
                            }else if (unidades <= juegos[3].cantidad) {
                                juegos[3].cantidad = restar(juegos[3].cantidad, unidades);
                                cantidadJuegos = juegos.reduce((tot, el) => tot + el.cantidad, 0);
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
                        unidades = parseInt(prompt(`Usted esta llevando ${cantidadJuegos} Juegos por $${total}\n${juegos[0].nombre} X ${juegos[0].cantidad}: $${multi(juegos[0].cantidad, juegos[0].precio)}\n${juegos[1].nombre} X ${juegos[1].cantidad}: $${multi(juegos[1].cantidad, juegos[1].precio)}\n${juegos[2].nombre} X ${juegos[2].cantidad}: $${multi(juegos[2].cantidad, juegos[2].precio)}\n${juegos[3].nombre} X ${juegos[3].cantidad}: $${multi(juegos[3].cantidad, juegos[3].precio)}\niva: $${iva(total).toFixed(2)}\nTotal con iva $${sumar(total, iva(total)).toFixed(2)}\nPresione:\n1.Realizar la compra en un pago\n2.Realizar la compra en 3 cuotas con 5% de interes\n3.Realizar la compra en 6 cuotas con 10% de interes\n4.Realizar la compra en 12 cuotas con 20% de interes`));
                        switch(unidades) {
                            case 1:
                                alert(`Su total es de $${sumar(total, iva(total)).toFixed(2)}, ¡Gracias por su compra!`);
                                entrada = 4;
                                compra = true;
                                precio = sumar(total, iva(total)).toFixed(2);
                                break;
                            case 2:
                                alert(`Su total es de 3 cuotas de $${div(sumar(total, sumar(iva(total), multi(total, 0.05))), 3).toFixed(2)} ¡Gracias por comprar en Bit Era!`);
                                entrada = 4;
                                compra = true;
                                precio = div(sumar(total, sumar(iva(total), multi(total, 0.05))), 3).toFixed(2);
                                break;
                            case 3:
                                alert(`Su total es de 6 cuotas de $${div(sumar(total, sumar(iva(total), multi(total, 0.1))), 6).toFixed(2)} ¡Gracias por comprar en Bit Era!`);
                                entrada = 4;
                                compra = true;
                                precio = div(sumar(total, sumar(iva(total), multi(total, 0.1))), 3).toFixed(2);
                                break;
                            case 4:
                                alert(`Su total es de 12 cuotas de $${div(sumar(total, sumar(iva(total), multi(total, 0.2))), 12).toFixed(2)} ¡Gracias por comprar en Bit Era!`);
                                entrada = 4;
                                compra = true;
                                precio = div(sumar(total, sumar(iva(total), multi(total, 0.2))), 3).toFixed(2);
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
let resumenFactura = document.querySelector("#resumen-factura");
if(compra) {
    let cuerpoResumen = document.querySelector("#cuerpo-resumen");
    cuerpoResumen.remove();
    let p = document.createElement("p");
    p.innerText = `Has comprado ${cantidadJuegos} juegos por ${precio} pesos`;
    resumenFactura.appendChild(p);
}
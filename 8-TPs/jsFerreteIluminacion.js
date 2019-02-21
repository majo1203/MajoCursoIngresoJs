
/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {

    var cantidadLampara = parseInt(document.getElementById('Cantidad').value);
    var marca = document.getElementById('Marca').value;

    var precioUnico = 35;
    var importeAPagar = 0;
    var importeFinal = 0;
    var descuento = 0;

    importeAPagar = cantidadLampara * precioUnico;

    switch (true) {
        case cantidadLampara > 5:
            descuento = importeAPagar * 50 / 100;
            break;
        case cantidadLampara == 5 && marca === 'ArgentinaLuz':
            descuento = importeAPagar * 40 / 100;
            break;
        case cantidadLampara == 5:
            descuento = importeAPagar * 30 / 100;
            break;
        case cantidadLampara == 4 &&
        marca === 'ArgentinaLuz' || marca === 'FelipeLamparas':
            descuento = importeAPagar * 25 / 100;
            break;
        case cantidadLampara == 4:
            descuento = importeAPagar * 20 / 100;
            break;
        case cantidadLampara == 3 &&
        marca === 'ArgentinaLuz':
            descuento = importeAPagar * 15 / 100;
            break;
        case cantidadLampara == 3 &&
        marca === 'FelipeLamparas':
            descuento = importeAPagar * 10 / 100;
            break;
        case cantidadLampara == 3:
            descuento = importeAPagar * 5 / 100;

            break;

        default:
            break;
    }

    importeFinal = importeAPagar - descuento;

    document.getElementById('precioDescuento').value = importeFinal;

    if (importeFinal > 120) {
        var ingresoBruto = importeFinal * 10 / 100;
        alert('Usted pago ' + ingresoBruto + ' de IIBB.');
    }

}










    // if (cantidadLampara > 5) {
    //     descuento = importeAPagar * 50 / 100;
    // } else if (cantidadLampara === 5) {
    //     if (marca === 'ArgentinaLuz') {
    //         descuento = importeAPagar * 40 / 100;
    //     } else {
    //         descuento = importeAPagar * 30 / 100;
    //     }
    // } else if (cantidadLampara === 4) {
    //     if (marca === 'ArgentinaLuz' || marca === 'FelipeLamparas') {
    //         descuento = importeAPagar * 25 / 100;
    //     } else {
    //         descuento = importeAPagar * 20 / 100;
    //     }
    // } else if (cantidadLampara === 5) {
    //     if (marca === 'ArgentinaLuz') {
    //         descuento = importeAPagar * 15 / 100;
    //     } else if (marca === 'FelipeLamparas') {
    //         descuento = importeAPagar * 10 / 100;
    //     } else {
    //         descuento = importeAPagar * 5 / 100;
    //     }

    // }

    // importeFinal = importeAPagar - descuento;
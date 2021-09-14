let producto = parseInt(prompt('Ingresa el valor del producto (800, 300, 250)'));
let formaPago = parseInt(prompt('¿En cuántas cuotas vas a pagar (3,6,12)?'));
let resultado;


function aPagar (objetoElegido, cuotas) {

switch (cuotas) {
    case 3:
        resultado = objetoElegido * 1;
        return 'Vas a pagar en total: $' + resultado;
    case 6: 
        resultado = objetoElegido * 1.05;
        return 'Vas a pagar en total: $' + resultado;
    case 12:
        resultado = objetoElegido * 1.10;
        return 'Vas a pagar en total: $' + resultado;
    default:
        return 'No se puede abonar en esa cantidad de cuotas';    
    }
}


aPagar(producto, formaPago);

function mostrar (mensaje){
    console.log(mensaje);
}

mostrar(resultado);

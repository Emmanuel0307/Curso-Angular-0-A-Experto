import { calculaISV, Producto } from "./06-desestruturacion-argumentos";
/*
codigo typeScript

*/

const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 250
    },
    {
        desc: 'Telefono 2',
        precio: 550
    }
];

const [total,ISV] = calculaISV(carritoCompras);

console.log('Total', total);
console.log('ISV', ISV);
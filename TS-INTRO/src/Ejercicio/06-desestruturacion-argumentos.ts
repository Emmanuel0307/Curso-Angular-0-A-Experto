/*
codigo typeScript

*/

export interface Producto{
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc:'Nokia 1',
    precio: 200
}

const tablet: Producto = {
    desc:'iPad mini',
    precio: 450
}

export function calculaISV(Producto: Producto[]):[number,number] {
    let total = 0;
    Producto.forEach(({precio}) => {
        total += precio;
    });

    return [total, total*0.15];
}

const articulos = [telefono,tablet];
const [total,isv] = calculaISV(articulos);

console.log("Total: ", total);
console.log("ISV: ", isv);
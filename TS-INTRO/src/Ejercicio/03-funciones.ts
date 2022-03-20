/*
    codigo typeScript
*/

function sumar(a: number,b: number){
    return a+b;
}

const sumarFechla = (a:number,b:number):number =>{
    return a+b;
}

function multiplicar (numero: number, otronumero?:number, base:number = 4):number{
    return numero * base;
}
//const resultado = sumar(10,parseInt('15'));
//const resultado = multiplicar(16,parseInt('15'));

//console.log(resultado);

interface personajeLOR {
    nombre: string;
    pv: number;
    mostrarPV: () => void;
}
function curar(personaje: personajeLOR, curarX: number):void{
    personaje.pv +=curarX;
    
}

const nuevoPersonaje: personajeLOR = {
    nombre: 'Frodo',
    pv: 33,
    mostrarPV (){
        console.log('Puntos de vida ', this.pv);
    }
}

curar(nuevoPersonaje,50);

nuevoPersonaje.mostrarPV();
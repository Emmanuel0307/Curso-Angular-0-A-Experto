/*
codigo typeScript

*/
interface reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles{
    autor: string;
    anio: number;
}

const reproductor:reproductor = {
    volumen: 70,
    segundo: 50,
    cancion: 'Shake That',
    detalles:{
        autor: 'Eminem',
        anio:2005,
    }
}

//esto es destructuracion de objetos
const {volumen,segundo,cancion,detalles} = reproductor;
const {autor, anio}=detalles;

/*console.log('El volumen actual: ',volumen);
console.log('El segundo actual: ',segundo);
console.log('La cancion actual: ',cancion);
console.log('El autor es: ',autor);
console.log('El anio es: ',anio);*/

//esto es desestructuracion de arreglos 

const dbz:string[] = ['Goku', 'Vegeta', 'Trunks'];
const [p1, ,p3] = dbz;
console.log("Personaje 1: ", p1);
//console.log("Personaje 2: ", p2);
console.log("Personaje 3: ", p3);

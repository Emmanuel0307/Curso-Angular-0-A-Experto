/*
    codigo typeScript
*/

let habilidades: string[]=['Emmanuel', 'Martinez','Jacobo'];

//console.log(habilidades, typeof(habilidades));

interface Personaje {
    nombre: string;
    hp: number;
    habilidades:string[];
    puebloNatal?: string;
}

const personaje:Personaje = {
    nombre: 'Emmanuel',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Pueblo Paleta';

console.log(personaje);
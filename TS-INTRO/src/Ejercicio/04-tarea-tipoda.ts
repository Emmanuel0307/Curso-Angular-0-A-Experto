/*
    codigo typeScript

*/
interface superHeroe{
    nombre: string;
    edad: number;
    direccion:direccion,
    mostrarDireccion:() => string;
}

interface direccion {
    calle:string;
    pais:string;
    ciudad:string 
}

const superHeores:superHeroe = {
    nombre: 'SpiderMan',
    edad: 30,
    direccion: {
        calle: 'Miguel Hidalgo',
        pais: 'Mexico',
        ciudad: 'Ecatepec'
    },
    mostrarDireccion(){
        return this.nombre + ', ' + this.direccion.calle + ', ' + this.direccion.pais;
    }
}

const direccion = superHeores.mostrarDireccion();
console.log(direccion);


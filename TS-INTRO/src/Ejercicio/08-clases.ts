
/*
codigo typeScript

*/
class PersonaNormal{
    constructor(
        public nombre: string,
        public direccion: string
    ){}
}


class Heroe extends PersonaNormal{


    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ){
        super(nombreReal, 'Malibu');
    }
}

const ironman = new Heroe('IronMan',50,'Tony');
console.log(ironman);
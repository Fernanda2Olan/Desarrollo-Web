interface Heroe{
    nombre: string,
    edad: number,
    apodo: string,
    poder: string
}

const persona = {
    nombre: 'Saul',
    edad: 20,
    apodo: 'saulillo',
    poder: 'volar'
}

interface CrearNuevoHeroe{
    nombre: string,
    edad: number,
    apodo: string,
    poder?: string
}

//Así se hace destructuración
const crearNuevoHeroe = ({nombre, edad, apodo, poder}: CrearNuevoHeroe) => ({
    id: 1234,
    nombre: nombre,
    edad: edad,
    apodo: apodo,
    poder: poder ?? "No tiene poderes"
})

console.log(crearNuevoHeroe({...persona,poder:'brincar'}));




//Manera 1 para imprimir
// console.log(persona.apodo);

//Manera 2 para imprimir
//console.log(persona["nombre"]);

//Manera 3 de imprimir
//console.log({
//    nombre: persona.nombre,
//    edad: persona.edad
//});

//Manera 4 de imprimir
//const {nombre, edad, apodo, poder= 'volar'} = persona;
//console.log({nombre, edad, apodo, poder});


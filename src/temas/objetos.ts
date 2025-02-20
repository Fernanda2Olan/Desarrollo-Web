export const persona1 = {
    apellido : 'Rojas',
    edad: 22,
    direccion: {
        ciudad: 'Ensenada',
        cp: 22005,
        lat: 15.22084,
        log: 12.88862
    },
};

const persona2 = structuredClone(persona1)

persona2.apellido = 'Geffroy';
persona2.direccion.ciudad = "tijuana";


console.log(persona1);
console.log(persona2);
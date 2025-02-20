//Funcion tradicional
function saludarPersona(nombre: string){
    return `Hola ${nombre}`
}

//Función de flecha
const funcionFlecha = (nombre: string) => `Hola ${nombre}`

const obtenerUsuario = (uid: string) =>({
        uid: 'ABC-12345',
        nombreUsuario: 'La abejita mágica'
})

const heroes = [
    {
        id: 1,
        nombre:'Superman'
    },
    {
        id: 2,
        nombre:'Batman'
    },
    {
        id: 3,
        nombre:'Don Ramón',
        superPoder: 'No pagar renta'
    },
]

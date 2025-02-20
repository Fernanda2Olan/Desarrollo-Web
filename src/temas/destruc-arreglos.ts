const personajes = [
    'Gato con botas', 'Lulú', 'Sherk', 'Zunni']

const [g, l, s, z] = personajes;

const regresarArray = () => {
    return [1234, 'ABCD'];
}

const [numeros,letras] = regresarArray();

console.log(numeros, letras);
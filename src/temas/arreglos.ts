const array = [0,1,2,3,4,5];

array.push(6)

const array2 = [... array];
array2.push(7);

console.log(array, array2);
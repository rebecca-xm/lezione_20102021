// Index    0    1    2    3
let arr = ['1', '2', '3', '4']

let result = arr.splice(0);

console.log(arr);

//gli sto dicendo che deve cominciare a cancellare i dati a partire dall'index 0, quindi li cancella tutti quanti

let arr = ['1', '2', '3', '4']

// splice(start, count, el, el, ...)
let result = arr.splice(2, 3, 'Rebecca'); 

console.log(arr);
console.log(result); 
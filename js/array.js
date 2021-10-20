/* METODI ARRAY
arr.push() aggiunge un elemento in coda
arr.pop() estrae un elemento dalla coda
arr.shift() estrae un elemento dalla testa
arr.unshift() aggiunge un elemento in testa
arr.splice() aggiungere e rimuovere elementi, ovunque
arr.slice() ritorna un nuovo array contenente tutti gli elementi all’interno di un range di index
arr.concat() crea un nuovo array che include valori di altri array, o elementi aggiuntivi
*/

/* ARRAY 

// Index    0    1    2    3
let arr = ['1', '2', '3', '4']

console.log(arr[1]); //in questo modo sto dicendo a JS che deve stampare il valore con indice 1 


// Index    0    1    2    3
let arr = [];

arr.push('Rebecca'); // in questo modo inserisco il valore all'interno dell'array come index 0
arr.push('Mollica'); // inserito in coda come index 1

// arr.push('dato 1', 'dato 2', 'dato 3'); sintassi alternativa

let result = arr.pop(); // estrae l'ultimo dato inserito per assegnarlo a result


console.log(arr);
console.log(result); */

let arr = ["1. cat", "2. dog", "3. goldfish", "4. panda", "5. crocodile"];
let list = arr.join('\n');
let risultato = prompt(list);
if (risultato == null){

    alert("perché non hai effettuato nessuna scelta?")

} else {
    let animal = risultato -1;
    alert(animal in arr ? `Chose $(arr[animal])` : "Animal not found");
}
// alert(animal in arr ? `Chose $(arr[animal])` : "Animal not found");
console.log(animal)


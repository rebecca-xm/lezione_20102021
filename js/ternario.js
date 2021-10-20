//let animal = prompt("Animale preferito:\n 1. Dog\n 2. Cat\n 3. Goldfish\n 4. Monkey\n 5. Panda ");

let animal = prompt("Animale preferito:\n 1. Dog\n 2. Cat\n 3. Goldfish\n 4. Monkey\n 5. Panda ");

let answer = (animal == 1) ? "Chose the Dog"
        : (animal == 2) ? "Chose the Cat"
        : (animal == 3) ? "Chose the Goldfish"
        : (animal == 4) ? "Chose the Monkey"
        : (animal == 5) ? "Chose the Panda"
        : "Animal not found";
console.log(answer)

/*      TERNARIO CON ARRAY

let animals = ["Dog", "Cat", "Goldfish", "Monkey", "Panda" ];

let input = parseInt(prompt("Animale preferito:\n 1. Dog\n 2. Cat\n 3. Goldfish\n 4. Monkey\n 5. Panda "));
console.log(animals.hasOwnProperty(input-1) ? "Chose the " + animals[input-1] : "Animal not found");

*/
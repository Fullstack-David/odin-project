let user = {
  name: "David",
  age: 30,
  "like birds": true,
};

delete user.age;

let key = "like birds";

// -------------------------------------------
//**** Square brackets ****
user[key] = true;
// same as user["like birds"] = true;

// let askUser = prompt(
//   "What do you want to know about the user?",
//   "Enter your name"
// );

// console.log(user[key]);
// console.log(user.key); // undefined

// -------------------------------------------
//**** Computed properties ****

// let fruit = prompt("what fruit to buy?", "apple");
// let bag = {
//   [fruit]: 5,
// };

// let fruits = prompt("which fruit yo buy?", "Banana");
let bags = {};

// bags[fruits] = 10;

// console.log(bags);
// console.log(bag);
// console.log(user);
// console.log(user.name);
// console.log(user.age);
// console.log(user["like birds"]);

// -------------------------------------------
//**** Property value shorthand ****
// in real code, we often use existing variables as values for property names

function makeUser(name, age) {
  return {
    name,
    age,
  };
}
let findUser = makeUser("Sara", 30);
// console.log(findUser.name);
// console.log(findUser.age);

// -------------------------------------------
//**** Property names limitations ****

// -------------------------------------------
//**** Property existence test, “in” operator ****

let user1 = { name: "david", age: 30 };

// console.log("age" in user1); // true, user.age exists
// console.log("finnsInte" in user1); // false, user.finnsInte dose not exists

let obj = {
  test: undefined,
};

// alert(obj.test); // it's undefined, so - no such property?
// alert("test" in obj); // true, the property does exist!

/* 
  i koden ovan property obj.test technically finns och så denna alert( "test" in obj ); funkar korrekt
  detta händer sällan, för att undefined ska inte explicitly användas 
  i ställer använder vi oss av "null" eller "" values
  
  */

//   The "for...in" loop
// syntax
for (key in Object) {
  // execute the body for each key among object properties
}

// EXEMPEL

let useroBobject = {
  name: "sara",
  age: 12,
  isAdmin: true,
};

for (let key in useroBobject) {
  //   console.log("keys: ", key);
  //   console.log("values: ", useroBobject[key]);
}

// EXEMPEL

const guests = {
  name: ["David", "Sofie", "Sara", "Maja"],
  age: [30, 31, 30, 35],
  isAdmin: [true, true, false, false],
};

for (let key in guests) {
  //   console.log(key);
  // console.log(guests[key][0]);
}

const codes = {
  49: "Germany",
  41: "Sweden",
  44: "Norway",
  1: "Finland",
};

for (let code in codes) {
  // console.log(code);
}

// ********************************

const person = {
  name: ["bob", "smith"],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old`);
  },
  introduceSelf: function () {
    console.log(`Hi i'm ${this.name[0]}`);
  },
};

// console.log(person.introduceSelf());

// ********************************

// Introducing constructors
// ALT-1
const container = document.querySelector(".container");
// const addUserBtn = document.querySelector(".addUser-btn");
// const addUserInput = document.querySelector(".add-user");

function createPerson(name, age) {
  const obj = {};
  obj.name = name;
  obj.age = age;
  obj.introduceSelf = function () {
    const para = document.createElement("p");
    container.appendChild(para);
    para.textContent = `Hi! i'm ${this.name} and i'm ${this.age} years old.`;
  };

  return obj;
}

const salva = createPerson("salva", 30);
salva.introduceSelf();

const frankie = createPerson("Frankie", 35);
frankie.introduceSelf();

const tony = createPerson("Tony", 50);
tony.introduceSelf();

// Better way
// ALT-1

class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.introduceSelf = function () {
      const para = document.createElement("p");
      para.textContent = `Hi! i'm ${this.name} and i'm ${this.age} years old.`;

      container.appendChild(para);
    };
  }
}

const david = new People("David", 30);
david.introduceSelf();

class Film {
  constructor(name, year, actor) {
    this.name = name;
    this.year = year;
    this.actor = actor;
    this.filmIntro = function () {
      const para = document.createElement("p");
      para.textContent = `${this.name} is made in year ${this.year} and best actor is ${this.actor}.`;

      container.appendChild(para);
    };
  }
}

const freeman = new Film("The Shawshank Redemption", 1994, "Morgan Freeman");
freeman.filmIntro();

const leonardo = new Film("Inception", 2010, "Leonardo DiCaprio");
leonardo.filmIntro();

// ********************************
// reference: i exemplet nedan "cat" innehåller en reference till samma object variabel medan
// "dog" är bara en kopia av objectet

let animal = { species: "dog" };
let dog = animal;

// reassigning animal variable with a completely new object
animal = { species: "cat" };

// console.log(animal); // { species: "cat" }
// console.log(dog); // { species: "dog" }

// ********************************

// Intermediate/advanced array magic

// function sumOfTripleEvens(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     // Step 1: If the element is an even number
//     if (array[i] % 2 === 0) {
//       const tripleEvenNumber = array[i] * 3;

//       // step 3: add the new number to total
//       sum += tripleEvenNumber;
//     }
//     return sum;
//   }
// }

// sumOfTripleEvens(array);

// ********************************
// map, filter, reduce... de behöver en "callback-function"
//* man kan skriva det som en arrow-function så: (num) => num * 2)
// eller
//* som en anonym-function: map.function(num) { return num % 2 !== 0; }
// eller
//* som en namngiven-function, skapa funcktionen och och använda det som callback
// function isOdd(num){
//  return num % 2 === 0;
// }
// const oddNums = nums.map(isOdd)

/**
 * map-method:
map is one such function. It expects a callback as an argument, which is a fancy way to say “I want you to pass another function as an argument to my function”.
 */

// function addOne(num) {
//   return num + 2;
// }
// EX-1
const arr = [1, 2, 3, 4, 5];
const mapedArr = arr.map((num) => num * 2);
// console.log(arr);
// console.log(mapedArr);

// EX-2
const names = ["david", "sofie", "sara", "ida"];
// map-metoden
const newNames = names.map((name) => name);
// console.log(newNames);

// filter-method
/**
 * Det itererar fortfarande genom arrayen och tillämpar callback-funktionen på varje objekt. Men istället för att transformera värdena i arrayen returnerar det de ursprungliga värdena från arrayen, men endast OM callback-funktionen returnerar sant.
 */

const nums = [1, 2, 3, 4, 5];
const oddNums = nums.filter((num) => num % 2 !== 0);
// console.log(oddNums);

// reduce-method
// reduce är alltså ett kraftfullt verktyg för att ta en array och omvandla den till ett enda värde!
// tar in två argument, den första håller reda på resultatet hittils och den andra är elemntet som
// loopen just nu bearbetar
// 1 är startvärde
// EX:
const numbers = [1, 2, 3, 4, 5];
const productOfAllNumbers = numbers.reduce((ackumulatorn, currentValue) => {
  return ackumulatorn + currentValue; // currentvärdet är första elemetet i arrayen första gången sen 2 sen 3 osv
}, 1); // startvärdet är 1

console.log(numbers);
console.log(productOfAllNumbers);

// EX
const favFruits = ["banana ", "kiwi ", "orange ", "melon "];

const sumOfFruits = favFruits.reduce((total, currentFruit) => {
  return total + currentFruit;
}, "Fruits: ");

console.log(sumOfFruits);

// ********************************

// ex

const nummers = [1, 2, 3, 4, 5];

const mapping = nummers.map((nummer) => nummer);

console.log(mapping);

// filter- ex

const newNums = [1, 2, 3, 4, 5];

const oddNum = newNums.filter((num) => num % 2 !== 0);

console.log(oddNum);

// reduce ex

const newErr = [1, 2, 3, 4, 5];

const sumOfErr = newErr.reduce((total, currentValueErr) => {
  return total + currentValueErr;
}, 2);

console.log(sumOfErr);

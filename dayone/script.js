// ARRAYS-METHODS
// const names = ["david", "sara", "sofie"];
// filter: return all elements that has e length bigegr than 3
// const result = names.filter((name) => name.length > 3);

// map: return a copy
// const result = names.map((name) => name);

// find: return the first element that is true
// const result = names.find((name) => name.length > 3);

// findIndex: return the first element that is true
// const result = (name) => name === "sara";

// console.log(names.findIndex(result));

// const cats = ["Leopard ", "Serval ", "Jaguar ", "Tiger ", "Caracal ", "Lion "];

// for (const cat of cats) {
//   console.log(cat);
// }

// alt-2
// for (let i = 0; i < cats.length; i++) {
//   console.log(cats[i]);
// }

// function toUpper(string) {
//   return string.toUpperCase();
// }

// MAP
// const upperCats = cats.map((cat) => cat);
// console.log(upperCats.join(" ").toUpperCase());

// FILTER
// const filtered = cats.filter((cat) => cat.startsWith("L"));
// const filtered = cats.filter((cat) => cat.includes("J"));

// console.log(filtered);

// ---------

// const calculateBtn = document.querySelector(".calculateBtn");
// const clear = document.querySelector(".clear");

// const results = document.getElementById("results");

// function calculation() {
//   for (let i = 1; i < 10; i++) {
//     const newResult = `${i} x ${i} = ${i * i} \n`;
//     results.textContent += `${newResult} \n`;
//   }

//   results.textContent += "\nFinished\n\n";
// }

// calculateBtn.addEventListener("click", calculation);
// clear.addEventListener("click", () => (results.textContent = ""));

// ---------

// let catNames = "Cat names are ";

// for (let i = 0; i < cats.length; i++) {
//   if (i === cats.length - 1) {
//     catNames += ` and ${cats[i]} `;
//   } else {
//     catNames += cats[i];
//   }
// }

// console.log(catNames);

// ---------

// const contacts = [
//   "Chris:2232322",
//   "Sarah:3453456",
//   "Bill:7654322",
//   "Mary:9998769",
//   "Dianne:9384975",
// ];

// const contctNames = ["Chris", "Sarah", "Bill", "Mary", "Dianne"];

// const para = document.querySelector("p");
// const input = document.querySelector("input");
// const btn = document.querySelector("button");
// const numbers = document.querySelector("h5");

// numbers.textContent = `Contacts names: ${contctNames.join(" - ")}`;

// btn.addEventListener("click", () => {
//   const searchName = input.value.toLowerCase();

//   for (const contact of contacts) {
//     const splitContact = contact.split(":");
//     if (splitContact[0].toLowerCase() === searchName) {
//       para.textContent = `${splitContact[0]}'s number is: ${splitContact[1]}`;
//     }
//     break;
//   }

//   if (para.textContent === "") {
//     para.textContent = "Contact not found";
//   }
// });

// ---------

// const cats = ["Leopard ", "Serval ", "Jaguar ", "Tiger ", "Caracal ", "Lion "];

// let favCats = "My favorite cats called: ";

// let i = 0;

// while (i < cats.length) {
//   if (i === cats.length - 1) {
//     favCats += `and ${cats[i]}`;
//   } else {
//     favCats += cats[i];
//   }

//   i++;
// }

// console.log(favCats);

// ---------
// Active learning: Launch countdown

// const output = document.querySelector(".output");
// output.textContent = "";

// let i = 10;

// while (i >= 0) {
//   const para = document.createElement("p");
//   if (i === 10) {
//     para.textContent = `Countdown ${i}`;
//   } else if (i === 0) {
//     para.textContent = `Blastoff ${i}`;
//   } else {
//     para.textContent = i;
//   }

//   output.appendChild(para);
//   i--;
// }

// ---------

// Active learning: Filling in a guest list
// const admitted = document.querySelector(".admitted");
// const refused = document.querySelector(".refused");

// const people = [
//   "Chris",
//   "Anne",
//   "Colin",
//   "Terri",
//   "Phil",
//   "Lola",
//   "Sam",
//   "Kay",
//   "Bruce",
// ];
// admitted.textContent = "Admit: ";
// refused.textContent = "Refuse: ";

// for (let person of people) {
//   if (person === "Lola" || person === "Phil") {
//     refused.textContent += `${person} `;
//   } else {
//     admitted.textContent += `${person} `;
//   }
//   console.log(person);
// }

// ---------
// for in loop
// let user = {
//   name: "David",
//   age: 30,
//   isAdmin: true,
// };

// for (key in user) {
// keys
//   console.log(key);

// values of the keys
//   console.log(user[key]);
// }

// for loop
// let arr = ["apple", "kiwi", "banana"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for of loop
// let fruits = ["apple", "kiwi", "banana"];
// for (let fruit of fruits) {
//   console.log(fruit);
// }

// while loop
// while (condition) {
// code
// so called loop-body
// }

// ex
// let i = 0;
// while (i < 3) {
//   //   console.log(i);
//   if (i === 0) {
//     console.log(`Zero: ${i}`);
//   } else if (i === 1) {
//     console.log(`One: ${i}`);
//   } else {
//     console.log(`Two: ${i}`);
//   }
//   i++;
// }

// do while
// let d = 0;

// do {
//   console.log(d);
//   d++;
// } while (d < 3);

// // for loop

// const names = ["david", "sara", "sofie"];

// for (let m = 0; m < names.length; m++) {
//   console.log(names[m].toUpperCase());
// }

// breaking th loop
// let sum = 0;

// while (true) {
//   let value = +prompt("Enter a number", "");
//   if (!value) break;

//   sum += value;
// }
// alert("Sum: " + sum);
// console.log(sum);

// continue to the next iteration

// for (i = 2; i < 10; i += 2) {
//   console.log(` ${i}`);
// }

// let b = 0;
// while (b < 3) {
//   alert(`number ${b}`);

//   b++;
// }

// Repeat until the input is correct

// ---------
//  DOM-MANIPULATION

const container = document.querySelector(".container");

const header = document.createElement("h2");
const para = document.createElement("p");
const input = document.createElement("input");
const btn = document.querySelector("#btn");
const link = document.querySelector("a");

const buttons = document.querySelectorAll("button");

header.classList.add("header");
para.classList.add("para");

container.appendChild(header);
container.appendChild(para);
container.appendChild(input);

header.textContent = "I'm i a div";
para.textContent = "ME TOO";

// btn.onClick = () => alert("Hello World");

function handleSubmit() {
  header.textContent = "handleSubmit";
}

function handleInput() {
  para.textContent = "keydown input";
}

btn.addEventListener("click", handleSubmit);

input.addEventListener("keydown", handleInput);

btn.addEventListener("click", (e) => {
  //   e.target.style.background = "blue";
  if (e.target) {
    e.target.style.background = "red";
    e.target.style.color = "white";
  }
});

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // e.preventDefault();
    e.stopPropagation();
    alert("Buttons eventListener");
    console.log("btn clicked");
  });
});

link.addEventListener("click", (e) => {
  console.log("clicked");
  //   e.preventDefault();
});

// ---------

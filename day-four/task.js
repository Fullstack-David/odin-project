// Hello, object
// Write the code, one line for each action:
// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.
const user = {
  name: "John",
  surname: "Smith",
};

user.name = "Pete";
delete user.name;
console.log(user);

// Check for emptiness
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }

  return true;
}

// Sum object properties
// We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Anne: 160,
  Pete: 130,
};

// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
// If salaries is empty, then the result must be 0.
let sum = 0;

for (let key in salaries) {
  sum += salaries[key];
  console.log(sum);
}

// Multiply numeric property values by 2
// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(menu) {
  for (let key in menu) {
    if (typeof menu[key] === "number") {
      menu[key] *= 2;
      console.log(menu[key]);
    }
    menu[key];
    console.log(menu[key]);
  }
}

multiplyNumeric(menu);

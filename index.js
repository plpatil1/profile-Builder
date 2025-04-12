// JavaScript Basics Demo

// 1. Variables
let name = "Pawan";
const age = 24;
var isDeveloper = true;

// 2. Function
function greet(user) {
  return `Hello, ${user}! Welcome to JavaScript.`;
}

// 3. Calling the function
console.log(greet(name));

// 4. DOM Manipulation
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("clickMe");
  const output = document.getElementById("output");

  btn.addEventListener("click", () => {
    output.innerText = greet(name);
  });
});

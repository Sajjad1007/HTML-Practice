// Write a program that will return a random letter from a string.

const myName = "Sajjadur Rahman";
const len = myName.length;
const randomIndex = Math.floor(len*Math.random());

console.log(myName.charAt(randomIndex));
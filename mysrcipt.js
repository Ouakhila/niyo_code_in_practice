console.log("hello world Code In Practice");

// Create a variable age assigned a value
// let age = 21;
// // let newAge = 45;

// // console.log("age: " + age);

// //Reassigning a variable with a new age

// age = 45;

// console.log("reassigned age: " + age);

// ///We are all learning functions

// function addNumber(num1, num2) {
//   let total = num1 + num2;
//   console.log(total);
// }

// addNumber(8, 4);

// function emptyParams() {
//   console.log("I am a developer");
// }

// emptyParams();

//We are creating function that takes strings as a parameter and return the concactnated

// function concactnate(string1, string2) {
//   let result = string1 + string2;
//   return result;
// }

// console.log(concactnate("hello ", "world"));

// function rewriteConc(string1, string2) {
//   return string1 + string2;
// }

// let result = rewriteConc("Hello ", "world");
// console.log(result);
// console.log(rewriteConc("Hello ", "world"));

// print this sentence (Hello my name is String1 I am a String2)

///We are obserbing variable

//Create a variable outside a function and another inside a function with the different name.
//Inside the function, print both variables and observe the scope.
//Outside the function, print both variables and observe the scope.

// let age = 30;

// function yourAge() {
//   const value = 25;
// }

// console.log(age);
// console.log(value);

//Create an object person that contains: age, car colour, name, surname
//And print out a sentence using the person object

const person = {
  name: "Daiane",
  surname: "Hill",
  age: 36,
  car: "Fiat 500",
  colour: "purpple",
};

console.log(
  person.name + " has a " + person.car + " with colour " + person.colour
);

//Write a program that checks if an age of a person is eligible to vote or not

//Write a program that checks if a given number is even or odd
// modulus is

// function checksNumber(num) {
//   if (num % 2 == 0) {
//     console.log("The number is even");
//   } else {
//     console.log("The number is odd");
//   }
// }

// checksNumber(3);

//Implement a countdown timer using a loop that counts down from 10 to 1.

//For Loop
// for (let number = 10; number >= 1; number--) {
//   console.log("number is: " + number);
// }
//While Loop

// let number = 10;
// while (number >= 1) {
//   console.log(number);
//   number = number - 1;
// }

/* Given an array of number
let array = [2,3,4,5,6]
Iterate over the array of numbers and calculate their sum.
 */
// //          0  1  2  3  4
// let array = [2, 3, 4, 5, 6];
// //console.log(array[1]);
// let totalNumber = 0;

// for (let index = 0; index < array.length; index++) {
//   totalNumber = totalNumber + array[index];
//   //console.log(totalNumber);
// }
// console.log(totalNumber);

/*
given an array of name:
let arrayName = [“Caroline”, “Sophia”, “Ben”, “John”,”Patience”]
Loop through the array of names(arrayName) and print a personalised greeting for each name.

 */

// const arrayName = ["Caroline", "Sophia", "Ben", "Patience"];
// const greetings = [
//   "goobye",
//   "How are you",
//   "what is your favourite colour",
//   "Hi",
// ];

// for (let i = 0; i < arrayName.length; i++) {
//   console.log(arrayName[i] + " " + greetings[i]);
// }

// let arrayName = ["Jahou", "Baba", "Neneh", "Aisha", "Ameina"];

// // //for (let i=0; i<arrayName.length; i++){
// // //     console.log("Hello " + arrayName[i] + " " +"welcome to my newsletter" );
// // // }
// arrayName.unshift("Sam", "Papa");
// console.log(arrayName);

// arrayName.push("Karim");
// console.log(arrayName);

// arrayName.pop();
// console.log(arrayName);

// let names = ["Olive", "James", "Leandra", "Micheal", "Mark"];
// let messages = [
//   "Hello",
//   "Goodbye",
//   "How are you",
//   "Hope you are fine",
//   "Wake up",
// ];

// /*
// for(let i=0;i<names.length;i++)
// {
//     console.log(names[i] + " " + messages[i]);

// }
// */

// names.unshift("Ida");
// console.log(names);

// names.pop();
// console.log(names);

// names.shift();
// console.log(names);

// names.push("June");
// console.log(names);

// Implement the FizzBuzz problem using a loop.
// Print numbers from 1 to 100
// Replace multiples of 3 with “Fizz”
// Replace multiples of 5 with “Buzz”
// Replaces multiples of both 3 and 5 with “FizzBuzz”

// HINT

// USE for loop to print  numbers from 1 to 100

for (let i = 1; i <= 100; i++) {
  // use conditional statement if(...)
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i + " FIZZBUZZ");
  } else if (i % 5 == 0) {
    console.log(i + " BUZZ");
  } else if (i % 3 == 0) {
    console.log(i + " FIZZ");
  }
}

//Check the number is multiple of 3 print Fizz
//Check the number is multiple of 5 print Buzz
//Both print Fizz and buzz

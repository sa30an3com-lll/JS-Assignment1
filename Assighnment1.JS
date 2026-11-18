//1.Convert the string "123" to a number and add 7. (0.5 Grade)• Output Example: 130
let n="123";
let nn =parseInt(n)+7;
console.log(nn);
//2.Check if the given variable is falsy and return "Invalid" if it is. (0.5 Grade)Input Example: 0 Output Example: "Invalid"
if (!0|| !null || !undefined || !NaN || !false || !"" ) {
    console.log("Invalid");
}
//3.Use for loop to print all numbers between 1 and 10, skipping even numbers using continue (0.5 Grade) Output Example:1, 3, 5, 7, 9
for(i=1;i<=10;i++){
    if (i%2==0){
        continue;
    }
    console.log(i);
}
//4.Create an array of numbers and return only the even numbers using filter method. (0.5 Grade) Input Example: [1, 2, 3, 4, 5] 
// Output Example: [2,4]
let arr=[1,2,3,4,5];
let evenn=(arr.filter((i) => i%2==0));
console.log(evenn);
//5.Use the spread operator to merge two arrays, then return the merged array. (0.5 Grade)
//Input Example: [1, 2, 3], [4, 5, 6]
//Output Example: [1, 2, 3, 4, 5, 6]
let arr1=[1,2,3];
let arr2=[4,5,6];
let mergedArr=[...arr1,...arr2]
console.log(mergedArr);
//6.Use a switch statement to return the day of the week given a number (1 = Sunday …., 7 = Saturday). (0.5 Grade)
//Input Example: 2
//Output Example: “Monday”
let dayNumber = 2;

switch (dayNumber) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("notADayyy");
}
//7.Create an array of strings and return their lengths using map method (0.5 Grade)
//  Input: ["a", "ab", "abc"] Output Example: [1, 2, 3] 
let sg = ["a", "ab", "abc"];
let lengths = sg.map((x) => x.length);
console.log(lengths);

/** *8.
Write a function that checks if a number is divisible by 3 and 5. (0.5 Grade)
•
Input Example: 15
•
Output Example: “Divisible by both” */
function isDivisible(x) {
    if (x % 3 === 0 && x % 5 === 0) {
        return "Divisible by both";
    } else {
        return "Not divisible by both";
    }
}
console.log(isDivisible(15)); 
console.log(isDivisible(9));
/*9. Write a function using arrow syntax to return the square of a number (0.5 Grade)
• Input Example: 5
• Output Example: 25*/
const Square = (num) => num * num;
console.log(Square(5)); // 25


/*10. Write a function that destructures an object to extract values and returns a formatted string. (0.5 Grade)
• Input Example: const person = {name: 'John', age: 25}
• Output Example: 'John is 25 years old' */
const person = {name: 'John', age: 25}
function format(person) {
const{name, age} = person;
console.log(`${name} is ${age} years old`); 
}
console.log(format(person)); // John is 25 years old
/*11. Write a function that accepts multiple parameters (two or more) and returns their sum. (0.5 Grade)
• Input Example: 1, 2, 3, 4, 5
• Output Example: 15*/
//resttt
function ss(...numbers){
console.log(numbers.reduce((total,num)=>total+num,0));

}
console.log(ss(1,2,3,4,5)); // 15


/*12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message. (0.5 Grade)
• Output Example: “Success”*/
function ISuccess() {
return new Promise((resolve,reject)=>{
setTimeout(()=>{
    resolve("Success");
},3000);
});

}
 ISuccess().then((message) => {
    console.log(message); // "Success" after 3 seconds}
});
/*13. Write a function to find the largest number in an array. (0.5 Grade)
• Input Example: [1, 3, 7, 2, 4]
• Output Example: 7*/
arr=[1, 3, 7, 2, 4]
let max = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log(max);

/*14. Write a function that takes an object and returns an array containing only its keys. (0.5 Grade)
• Input Example: name: "John", age: 30}
• Output Example: ["name", "age"]*/
const peron = {name: 'John', age: 25}

function keeys(obj){

 console.log(Object.keys(obj));

}
console.log(keeys(peron)); 

/*15. Write a function that splits a string into an array of words based on spaces. (0.5 Grade)
• Input: "The quick brown fox"
• Output: ["The", "quick", "brown", "fox"]*/

function sp(ss){
console.log(ss.split(" "));

}
 console.log(sp("The quick brown fox"));
 
//=============================================================================================
/* pat2
B. Part 2: Essay Questions (2.5 Grade):
1. What is the difference between forEach and for...of? When would you use each? (0.5 Grade)
forEach : is a a method that excutes a call back function ,would  use when you want to iterate the whole elements
 for...of: is a loop ,would  use when you want to control the elements and break ,contiue

2. What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples. (0.5 Grade)
hoisting is where variable and function declarations are processed before code execution
variables declared with var are hoisted and initialized with undefined
variables declared with let and const are hoisted but cannot be accessed before their declaration

(TDZ is the interval between entering the scope and declare the let , const variable,
 Accessing the variable during this period causes a ReferenceError.
 console.log(x);
var x = 10;
output: undefined
console.log(y);
let y = 20;
output: ReferenceError
sayHello();

function sayHello() {
    console.log("hello");
output: hello
3. What are the main differences between == and ===? (0.5 Grade)
== compare with just values 
=== compare with values and types
4. Explain how try-catch works and why it is important in async operations. (0.5 Grade)
try-catch is used for error handling,,,it allows us to handle errors when using async, such as API requests,
 without stopping the program unexpectedly
5. What’s the difference between type conversion and coercion? Provide examples of each. (0.5 Grade)
 type conversion:we make it explicitely,manually  ,
 coercion:automatic conversion by js
*/

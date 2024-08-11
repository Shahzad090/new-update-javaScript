// Lecture No 1
// // console check karna ka tariqa
// console.log("Apna Karachi");
// console.log("I luv javaScript");

// // variables can be declared and update. A globle scope variable
// var fullName = "Rehan";
// var age = 24;
// console.log(fullName)
// console.log(age)

// // let variable cannot be re-declared but can be update. A block scope variable
// let name =  "Rehan";
// let price = 1000;
// name = "Rafique"
// console.log(name);
// console.log(price)

// // const variable cannot be re-declared or update. A block scope variable.
// // {} brackets show new blocks
// const city = "Karachi";
// const country = "Pakistan";
// {
//     const city = "Lahore";
//     console.log(city);
// }
// console.log(city);
// console.log(country);

// // Primitive 7 Data Types in JS: Numbers, String, Boolean, Undefined, Null, Bigint, Symbol
// // objects means collection of deffrent variables

// const student = {
//     fullName: "Rehan Rafique",
//     age: 24,
//     cgpa: 8.5,
//     isPass: true,
// };
// student ["age"] = student ["age"] + 10;
// console.log(student.age);

// // Practice 1 for Lecture 1
// const product = {
// title: "Ball Pen",
// rating: 4,
// offer: 5,
// price: 270,
// };
// console.log(product);

// // Practice 2 for Lecture 1
// const profile = {
//     userName: "Rehan Rafique",
//     isFollow: false,
//     followers: 123,
//     following: 256, 
// };
// console.log(profile)



// Lecture No 2
//Artimetic opraters
// let a = 5;
// let b = 2;
// console.log("a =", a, "&", "b =", b);
// console.log("a + b =", a + b);
// console.log("a - b =", a - b);
// console.log("a * b =", a * b);
// console.log("a / b =", a / b);
// console.log("a % b =", a % b); //called Modulus given remanig value
// console.log("a ** b =", a ** b); //called Exponentiation 


//Unary Operater
// let a = 5;
// let b = 2;
// a++;//increment
// b--;//dicrement
// console.log("a =", a);
// console.log("b =", b);

// let a = 5;
// let b = 2;
// // a++;//post increment
// // ++a;//pre increment 
// // b--;//post dicrement
// // --b;//pre dicrement

// console.log("a++", a++);
// console.log("a", a);
// console.log("++a", ++a);

// console.log("b--", b--);
// console.log("b", b);
// console.log("--b", --b);


//Comparison Operator
// let a = 5;
// let b = 2;
// let c = 10;
// let d = "20";
// console.log("5 == 2", a == b); //equals to
// console.log("5 != 2", a != b); //Is not equals to
// console.log("10 === 20", c === d); //strictly equals to
// console.log("10 !== 20", c !== d); //strictly not equals to
// console.log("5 > 2", a > b); //greter then
// console.log("5 < 2", a < b); //less then


//Logical Operater
//Logical && And
// let a = 6;
// let b = 5;
// console.log("cond1 && cond2 =", a > b && a === 6);

// Logical || OR
// let a = 6;
// let b = 5;
// console.log("cond1 || cond2 =", a < b || a === 6);

// ! is not
// let a = 6;
// let b = 5;
// console.log("!(6>5)", !(6>5))


//Conditional Statment
//There are three types of Statments
//If Statment
// let age = 16;
// if (age >= 18){
//     console.log("You are eligible to vote");
// }
// if (age < 18){
//     console.log("You are !!!not eligible... to vote");
// }

//else Statment
// let mode = "dark";
// let color;
// if (mode === "dark") {
//     color = "black";
// }
// else {
//     color = "white";
// }
// console.log(color);

//else If Statment
// let mode = "pink";
// let color;

// if (mode === "dark") {
//     color = "black";
// }
// else if (mode === "blue") {
//     color = "blue";
// }
// else if (mode === "pink") {
//     color = "pink";
// }
// else {
//     color = "grey";
// }
// console.log(color);


//Ternary Operators (? , :)
// let age = 15;
// let result = age >= 18 ? "You are eligible to vote" : "You are !!!not eligible... to vote";
// console.log(result);


// Practice 1 for Lecture 2
// let num = prompt("Enter a number");
// if (num % 5 === 0){
// console.log(num, "is a multiple of 5")
// } else {
//     console.log(num, "is !!NOT... a Multiple of 5")
// }


// Practice 2 for Lecture 2
// let score = prompt("Enter your score");
// if (score >= 101){
//     console.log("This is NOT a correct score")
// }
// else if (score >= 90){
//     console.log("Your Grade is A+");  
// }
// else if (score >= 80){
//     console.log("Your Grade is A");
// }
// else if (score >= 70){
//     console.log("Your Grade is B");
// }
// else if (score >= 60){
//     console.log("Your Grade is C");
// }
// else if (score >= 50){
//     console.log("Your Grade is D");
// }
// else if (score >= 0){
//     console.log("You are !!FALI...");
// }
// else{
//     console.log("This is NOT a correct score")
// }



// Lecture No 3
// Loops 
// for loop
// for (let i = 1; i <= 5; i++){
//     console.log("Apna Karachi");
// }

// let sum = 0;
// for (let i = 1; i <= 5; i++){
//     sum = sum + i;
    
// }
// console.log("sum =", sum); 

//While Loop:
// let i = 1;
// while (i <= 5) {
// console.log("Apna Collage")
// i++;
// }

//Do while loop
// let i = 1;
// do {
//     console.log("i =", i);
//     i++;
// }while (i <= 5);

// Practice 1 for Lecture 3
// for (let num = 0; num <= 100; num++) {
//     if (num % 2 === 0) {
//     console.log("num =", num)
// } //even number print
// }

// for (let num = 0; num <= 100; num++) {
//     if (num % 2 !== 0) {
//     console.log("num =", num)
// } // odd number print
// }

// Practice 2 for Lecture 3
// let gameNum = 25;
// let userNum = prompt("Guess the game number");
// while (userNum != gameNum){
//     userNum = prompt("You enter wrong number !!Guess again!!")
// }
// document.write("Cogratulation you ...Win...");



// Strings: String length: String indices
// let str = "Rehan"
// console.log(str.length)
// console.log(str[2])



// Template Literals
// let obj = {
//     item: 'Pen',
//     price: 10,
// };
// let outPut = `the cost of ${obj.item} is ${obj.price} Rupees`;
// console.log(outPut);

//Escape caracter
// Line change\n
// console.log("Rehan\nRafique");
// // Tab \t
// console.log("Rehan\tRafique");



// Strings Methods
// toUpperCase
// let str = "Apna Karachi"
// console.log(str.toUpperCase());

// // toLowerCase
// let str1 = "Apna Karachi"
// let newStr = "Apna Karachi"
// console.log(newStr);
// console.log(str1.toLowerCase());

// // trim
// let str2 = "    Apna Karachi    Local   ";
// console.log(str2.trim());

// slice
// let str4 = "Apna Karachi";
// console.log(str4.slice(2, 7));

// concat
// let str1 = "Apna";
// let str2 = "Karachi";
// let res = str1 + str2;
// console.log(res);

// replace
// let str1 = "Apna Karachi"
// console.log(str1.replace('a', 't'));

// charAt
// let str = "Apna Karachi";
// console.log(str.charAt(5));

// Practice 3 for Lecture 3
// let fullName = prompt ("enter your full name without spaces");
// let userName = "@" + fullName + fullName.length;  
// console.log(userName);



// Array
// let marks = [96, 86, 72, 52, 38];
// console.log (marks);

// // Array indices
// let index = [96, 86, 72, 52, 38];
// index [2] = 66;
// console.log (index[2]);

// let str = ["Hello", "World", "karachi", "pakistan"];
// str [3] = 'y';
// console.log(str);

// Looping over an Array
// let heros = ['Hulk','Superman','Spiderman','Ironman','Thore','Chamatman'];
// for (let i = 0; i < heros.length; i++){
// console.log(heros[i]);
// }

// Practice 1 for Lecture 4
// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for (let val of marks) {
//     sum += val;
// }
// let avg = sum / marks.length
// console.log(`avg marks of class = ${avg}`);

// Practice 2 for Lecture 4
// for ofLoop
// let items = [250, 645, 300, 900, 50];
// let i = 0;

// for (let val of items){
//     let offer = val / 10;
//     items[i] = items[i] - offer;
// console.log(`value after offer = ${items[i]}`)
// i++;
// }

// forLoop
// let items = [250, 645, 300, 900, 50];
// for (let i = 0; i < items.length; i++){
//     let offer = items[i] / 10;
//     items[i] -= offer;
// }
// console.log(items);

// Arrays methord
// Push(): add to end
// let foods = ['chips', 'tomato', 'potato', 'apple'];
// foods.push('banana', 'graps');
// console.log(foods);

// // Pop(): delete from end and return
// let deletedItems = foods.pop();

// console.log(foods);
// console.log('deleted', deletedItems);

// // toString(): convert Array to string
// console.log(foods.toString());

// concat(): join multiple Array & returns result
// let mervalHeros = ['Hulk', 'Superman', 'Ironman'];
// let dcHeros = ['Batman', 'Thore'];
// let heros = mervalHeros.concat(dcHeros);
// console.log(heros);

// unshift
// let mervalHeros = ['Hulk', 'Superman', 'Ironman', 'Batman'];
// mervalHeros.unshift('antman');
// console.log(mervalHeros);

// shift
// let mervalHeros = ['Hulk', 'Superman', 'Ironman', 'Batman'];
// mervalHeros.shift();
// console.log(mervalHeros);

// slice(): return a piece of Array
// let mervalHeros = ['Hulk', 'Superman', 'Ironman', 'Batman', 'antman'];
// console.log(mervalHeros);
// console.log(mervalHeros.slice(1,3));

// // splice(): change orignal Array (add, remove, replace)
// let arr = [1, 2, 3, 4, 5, 6, 7,];
// arr.splice(3,2,112);
// console.log(arr);
// arr.splice(2,3,104);
// console.log(arr);

// Practice 3 for Lecture 5
// let companies = ['Bloomberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netfelx'];
// companies.shift();
// console.log(companies)
// companies.splice(1,1,'Ola');
// console.log(companies);
// companies.push('Amazon');
// console.log(companies);



// Functions
// function myFunction () {
//     console.log('Hello World');
//     console.log('Learning')
// }
// myFunction();

// function myFunction1 (msg) {
// console.log(msg);
// }
// myFunction1('I Luv JS');

// function sum (x,y) {
//     console.log(x + y);
// }

// function sum (x, y){
//     cal = x + y;
//     let localScope = ('Hello'); // jub hum koi variable ko localscope mai likhta haan too usa hum localscope mai hi return la sakta haan
//     console.log('befor return');
//     return cal;
    
// }
// let val = sum(3,7);
// console.log(val);
// console.log(localScope)

// Arrow Function =>
// let arrowSum = (a, b) => {
//     console.log(a + b);
// }
//  let arrowMult = (x, y) => {
//    return (x * y);
//  }

// Practice 4 for Lecture 5
// function countVowels (str) {
//     let count = 0;
//     for (let char of str) {
//         if (char === 'a'|| char === 'e'|| char === 'i'|| char === 'o'|| char === 'u') {
//             count++;
//         }
//     }
//     return count;
// }

// Practice arrow function
// let countVow = (str) => {
//     let count = 0;
//     for (let char of str) {
//         if (char === 'a'|| char === 'e'|| char === 'i'|| char === 'o'|| char === 'u') {
//             count++;
//         }
//     }
//     return count;
// }

// Map Array Method
// let num = [65, 50, 75, 92];
// let newArray = num.map((val) => {
//     return val * val;
// });
// console.log(newArray);

// Filter Array Method
// let array = [1,2,3,4,5,6,7,8,9];
// let evenArray = array.filter((val) => {
// return val % 2 === 0;
// });
// console.log(evenArray);

// Reduce Array Method
// let array = [1,2,3,4,5,6,7,8,9];
// let outPut = array.reduce((prev , curret) => {
//     return prev + curret;
// });
// console.log(outPut);

// Reduce Methord sai largest aur smallest array nikalna ka tarika
// let array = [1,2,3,4,5,6,7,8,9];
// let outPut = array.reduce((prev , curret) => {
//     return prev > curret ? prev : curret;
// });
// console.log(outPut);

// Practice 5 for Lecture 5
// let marks = [92, 67, 32, 49, 99, 96, 86];
// let topers = marks.filter((val)=>{
//     return val > 90;
// });
// console.log(topers);



// DOM (Document Object Model)
// DOM manipulation
// Selection with ID
// let heading = document.getElementById('heading');
// console.dir(heading)

// // Selection with Class
// let button = document.getElementsByClassName('btn');
// console.log(button);
// console.dir(button);

// // Selection with Tag Name
// let par = document.getElementsByTagName('p');
// console.log(par);
// console.dir(par);

// Query Selector
// let button = document.querySelector('button'); // only select 1 element
// console.log(button);

// let button2 = document.querySelectorAll('button'); // select all elements
// console.log(button2);

// Practice 1 for Lecture 6
// let h2 = document.querySelector('h2');
// h2.innerText = h2.innerText + " from Apna College Student";
// console.log(h2);

// Practice 2 for Lecture 6
// let divs = document.querySelectorAll('.box');
// divs[0].innerText = divs[0].innerText +' New Unique Value 1';
// divs[1].innerText = divs[1].innerText +' New Unique Value 2';
// divs[2].innerText = divs[2].innerText +' New Unique Value 3';
// console.log(divs)
// // Ab is code ko hum short kar kai lekh sakta haan loop ka zarya
// let idx = 1;
// for (div of divs) {
//     div.innerText = `New Unique Value ${idx}`
//     idx++;
// }

// DOM Attributes (getAttribute)
// let div = document.querySelector("div");
// console.log(div)

// let id = div.getAttribute('id');
// console.log(id)

// let name =div.getAttribute('name');
// console.log(name)

// let para =document.querySelector('p');
// console.log(para.getAttribute('class'))

// DOM Attributes (setAttribute)
// let change = document.querySelector("p");
// console.log(change.setAttribute("class", "newClass"))

// DOM Attributes Style
// let div = document.querySelector("div");
// div.style.backgroundColor = "green";
// div.style.backgroundColor = "pink";
// div.style.fontSize = "18px";
// div.style.fontWeight = "800"
// div.innerText = "Hello!!"

// DOM Attributes (Insert elements)
// node.append(el) == add at the end of node(inside)
// let newBtn = document.createElement("button");
// newBtn.innerText = "Click Me!!";

// let div = document.querySelector("div");
// div.append(newBtn);

// // node.prepend(el) == add at the start of node(inside)
// let newHeading = document.createElement("h2");
// newHeading.innerText = "I am new!!";

// document.querySelector("body").prepend(newHeading);

// // node.before(el) == add before the node(outside)
// let parg = document.createElement("p");
// parg.innerText = "This is paragrape";

// document.querySelector("body").before(parg);

// // node.after(el) == add after the node(outside)
// let newParg = document.createElement("p");
// newParg.innerText = "This is new paragrape";

// document.querySelector("body").after(newParg);

// // DOM Attributes (Delete elements);
// newParg.remove();

// Practice 1 for Lecture 7
// let newBtn = document.createElement("button");
// newBtn.innerText = "Click Me!";

// document.querySelector("body").prepend(newBtn);
// newBtn.style.background = "red";
// newBtn.style.color = "white";

// Practice 2 for Lecture 7
// let para = document.querySelector("p");
// para.classList.add("newClass")



// Events
// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//     console.log("Button 1 clicked!!");
//     let a = 25;
//     a++;
//     console.log(a);
// } 

// let box = document.querySelector("#div1");
// box.onmouseover = () => { 
// console.log("You are in div")
// }

// Event listeners
// addEventListener
// btn1.addEventListener('click', ()=> {
//     console.log("Button 1 clicked!!");
// });

// btn1.addEventListener('click', (evt)=> {
//     console.log("Button 1 clicked - handler2");
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// });
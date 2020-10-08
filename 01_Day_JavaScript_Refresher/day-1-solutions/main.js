// EXERCISE LEVEL 2

// 1.Create a separate countries.js file and store the countries array into this file, create a separate file web_techs.js and store the webTechs array into this file. Access both file in main.js file
let countries = require("./countries");
let web_techs = require("./web_techs");
const webTechs = require("./web_techs");

console.log(countries, web_techs);

// 2.First remove all the punctuations and change the string to array and count the number of words in the array
let text2 =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let removePunctuation = text2.replace(/[^\w\s]/gi, "");
let textArray = removePunctuation.split(" ");
console.log(textArray + "\n" + textArray.length);

// 3. In the following shopping cart add, remove, edit items
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat");
shoppingCart.pop();
shoppingCart.push("Sugar");
shoppingCart[3] = "Green Tea";
console.log(shoppingCart);

// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if (countries.includes("Ethiopia")) {
  console.log("ETHIOPIA");
} else {
  countries.push("Ethiopia");
}

// 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if (webTechs.includes("Sass")) {
  console.log("Sass is a CSS preprocessor");
} else {
  webTechs.push("Sass");
  console.log(webTechs);
}

// 6. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
let fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// EXERCISE LEVEL 3
// The following is an array of 10 students ages: js
// Sort the array and find the min and max age -
// Find the median age(one middle item or two middle items divided by two) -
// Find the average age(all items divided by number of items) -
// Find the range of the ages(max minus min) -
// Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort(function (a, b) {
  return a - b;
});
console.log(ages[0], ages[ages.length - 1]);
let range = ages[ages.length - 1] - ages[0];
console.log("The range of the ages is " + range);
let median = Math.floor(ages.length / 2);
if (ages.length % 2) {
  console.log(ages[median]);
} else {
  console.log((ages[median - 1] + ages[median]) / 2.0);
}

console.log(ages[median]);

let avg = ages.reduce((a, b) => a + b) / ages.length;
console.log(avg);

function difference(a, b) {
  return Math.abs(a - b);
}

difference(ages[0], avg);
difference(ages[ages.length - 1], avg);

//2. Slice the first ten countries from the countries array
countries.slice(0, 9);

let median2 = Math.ceil(countries.length / 2);
console.log(countries[median2 - 1]);

function divideArray(arr) {
  let half = Math.ceil(arr.length / 2.0);
  if (arr.length % 2) {
    console.log(arr.splice(0, half));
    console.log(arr);
  } else {
    console.log(arr.splice(0, half + 1));
    console.log(arr);
  }
}
divideArray(countries);

// Conditional Exercises
// Part 1
function driveEligibility() {
  let userInput = prompt("What is your age?");

  if (userInput > 18) {
    console.log("You are old enough to drive.");
  } else {
    console.log("You are left with " + (18 - userInput) + " years to drive.");
  }
}
driveEligibility();

function ageCompare() {
  let myAge = prompt("What is person1 age?");
  let yourAge = prompt("What is person2 age?");
  if (myAge > yourAge) {
    console.log(`Person1 is ${myAge - yourAge} years older than person2`);
  } else {
    console.log(`Person1 is ${yourAge - myAge} years older than person2`);
  }
}

ageCompare();

function compare(a, b) {
  if (a > b) {
    console.log(`a is greater than b`);
  } else {
    console.log(`b is greater than a`);
  }

  a > b
    ? console.log(`a is greater than b`)
    : console.log(`b is greater than a`);
}
compare(2, 5);

// Even or Odd
function checkEven(num) {
  num % 2 == 0
    ? console.log(`${num} is an even number`)
    : console.log(`${num} is an odd number`);
}
checkEven(2);
checkEven(13);

// Part 2
function gradeChecker(score) {
  score > 80
    ? console.log("A")
    : score >= 70 && score <= 79
    ? console.log("B")
    : score >= 60 && score <= 69
    ? console.log("C")
    : score >= 50 && score <= 59
    ? console.log("D")
    : console.log("F");
}
gradeChecker(67);

function seasons() {
  let monthInput = prompt("What month is it");
  let month = monthInput.toLowerCase();

  switch (month) {
    case "september":
    case "october":
    case "november":
      console.log(`Autumn`);
      break;

    case "december":
    case "january":
    case "february":
      console.log(`Winter`);
      break;

    case "march":
    case "april":
    case "may":
      console.log(`Spring`);
      break;

    case "june":
    case "july":
    case "august":
      console.log(`Summer`);
      break;

    default:
      console.log(`Invalid Month`);
      break;
  }
}

function daysInMonth() {
  let monthInput = prompt("What month is it");
  let month = monthInput.toLowerCase();

  switch (month) {
    case "september":
    case "april":
    case "june":
    case "november":
      console.log(`${monthInput} has 30 days.`);
      break;

    case "february":
      console.log(`${monthInput} has 28/29 days.`);
      break;

    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
      console.log(`${monthInput} has 31 days.`);
      break;

    default:
      console.log(`Invalid Month`);
      break;
  }
}

daysInMonth();

function daysOfWeek() {
  let dayInput = prompt("What month is it");
  let day = dayInput.toLowerCase();

  switch (day) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thusday":
    case "friday":
      console.log(`${dayInput} is a working day.`);
      break;

    case "saturday":
    case "sunday":
      console.log(`${dayInput} is a weekend.`);
      break;

    default:
      console.log(`Invalid day`);
      break;
  }
}

daysOfWeek();

// Section 7: Objects
// LEvel 1
let dog = {};
console.log(dog);

dog = {
  name: "Rainbow",
  legs: 4,
  color: "brown",
  age: 3,
  bark: function () {
    return `Woof Woof`;
  },
};

console.log(dog.name, dog.legs, dog.color, dog.age, dog.bark());

dog.breed = "Altsassian";
dog.getDogInfo = function () {
  return `I am ${this.name} and I am an ${this.breed}. I am ${this.age} years.`;
};

// Level 2
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

users;

function maxuser() {
  let arr = [];
  for (const skill in users) {
    arr.push({
      name: skill,
      stackSize: users[skill]["skills"].length,
    });
  }
  let ans = arr.reduce((a, b) => (a.stackSize > b.stackSize ? a : b));
  return ans;
}
maxuser();

function check(stuff) {
  let arr = [];
  for (const skill in stuff) {
    if (stuff[skill].isLoggedIn == true && stuff[skill].points >= 50) {
      arr.push(skill);
    }
  }
  console.log(arr);
}

check(users);

function checkSkill(stuff) {
  let arr = [];
  for (const skill in stuff) {
    if (stuff[skill].skills.includes("MongoDB", "Express", "React", "Node")) {
      arr.push(skill);
    }
  }
  console.log(arr);
}

checkSkill(users);

const copyPerson = Object.assign({}, users);
copyPerson["Emmanuel"] = { name: "SkyCoder" };

const values = Object.values(copyPerson);
console.log(values);
const keys = Object.keys(users);
console.log(keys);

// No countries object

//Level 3
const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

let personAccount = {
  firstName: "",
  lastName: "",
  incomes: "",
  expenses: "",
  totalIncome: function () {},
  totalExpense: function () {},
  accountInfo: function () {},
  addIncome: function () {},
  addExpense: function () {},
  accountBalance: function () {},
};

// Come back to it
// function signUp(name, email){
//   if (users.username )
// }

// Functions Exercises
function fullName(first = "Emmanuel", last = "Ezenwigbo") {
  return first + last;
}

function addNumbers(a, b) {
  return a + b;
}

function areaOfCircle(r) {
  return Math.PI * r ** 2;
}

function temp(celsiuse) {
  return celsiuse * (9 / 5) + 32;
}

function bmi(weight, height) {
  let weight = prompt("What is your weight in kg? (digits only)");
  let height = prompt("What is your height in metres?(digits only)");
  let bim = (weight / height ** 2)(bim > 30)
    ? console.log("Obese")
    : bim >= 25 && bim <= 29.9
    ? console.log("Overweight")
    : bim >= 18.5 && bim <= 24.9
    ? console.log("Normal Weight")
    : console.log("Underweight");
}

// 6. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
// This is done above

// Level 2
function solvequad(a, b, c) {
  let x1 = ((-b + Math.sqrt(b ** 2 - 4 * a * c)) / 2) * a;

  let x2 = ((-b - Math.sqrt(b ** 2 - 4 * a * c)) / 2) * a;

  console.log(x1, x2);
}

function printArray(arr) {
  for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
  }
}

function showDateTime() {
  return new Date().toLocaleString();
}

function swapValues(x, y) {
  let temp = y;
  y = x;
  x = temp;
  console.log(x, y);
}

function reverseArray(arr) {
  let newArr = [];
  for (let i = arr.length; i >= 0; i--) {
    newArr.push(arr[i]);
  }
}

function capitalizeArray(arr) {
  let newArr = [];
  for (let index = 0; index < arr.length; index++) {
    newArr.push(arr[index].toUpperCase());
  }
  return newArr;
}

function addItem(arr, x) {
  arr.push(x);
  return arr;
}

function removeItem(arr, x) {
  arr.slice(x, x + 1);
  return arr;
}

function sum(...x) {
  return x.reduce((a, b) => a + b);
}

function evenAndOdds(x) {
  let odd = 0;
  let even = 0;
  for (let index = 0; index <= x; index++) {
    if (index % 2 == 0) {
      even++;
    } else {
      odd++;
    }
  }
  console.log(
    `The number of evens are ${even}\n
    The number of odds are ${odds}`
  );
}

function uuidv4() {
  return 'xxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

console.log(uuidv4());


function userIDGeneratedByUser(){
  let char = prompt('HOw many characters do you want?')
  let times = prompt('how many ids do you want?')
  function uuidv4(x) {
    let el = '';
    for (let index = 0; index < x; index++) {
      el+='x';
    }
    return el.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  for (let x = 0; x < times; x++) {
    console.log(uuidv4(char));
  }
  
}

function factorial(x){
  if (x < 0) return ;
  if ( x === 0 ) return 1;
  return x * factorial(x-1);
}

function isEmpty(x){
  if (x == null){
    console.log(`${x} is Empty`);
  }else{
    console.log(`${x} is not empty`);
  } 
}

function avg(arr){
  let sum = arr.reduce((a,b) => a+b)
  let res = sum/(arr.length);
  return res;
}

function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  job: 'Instructor and Developer',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'Python',
    'D3.js',
  ],
  languages: ['Amharic', 'English', 'Suomi(Finnish)'],
}

function getPersonInfo(obj){
  const{firstName,lastName,age,country,job,skills,languages} = obj;
  console.log(`${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is ${job}. He teaches ${skills} and speaks ${languages}`)
}

getPersonInfo(person)

const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

products.forEach((x)=> console.log(`The price of ${x.name} is ${x.price} euros`));

let price = products.map((x)=> x.price)
let figures = price.filter((a)=> typeof a === "number")
let sum = figures.reduce((a,b) => a + b)

products.find((n) => typeof n.price !== 'number' )
products.findIndex((n) => typeof n.price !== 'number' )
products.some((n) => typeof n.price !== 'number' )
products.every((n) => typeof n.price == 'number' )


class Person {
  constructor(firstName, lastName, age, country, city) {
    this.name = name
    this.age = age
    this.color = color
    this.legs = legs
  }
}

class Dog extends Animal{
    constructor(name, age, color, legs) {
      super(name, age, color, legs)
    }
}

// DONE
// 1. Declare an empty array;
let empty = [];

// 2. Declare an array with more than 5 number of elements
let fiveItemArray = [1,2,3,4,5,6,7];

// 3. Find the length of your array
console.log(fiveItemArray.length);

// 4. Get the first item, the middle item and the last item of the array
console.log(fiveItemArray[0], fiveItemArray[3], fiveItemArray[6]);

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [
    'string',
    100,
    {time: 24},
    false,
    [1,2,3],
    null
]

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 7. Print the array using console.log()
console.log(itCompanies);

// 8. Print the number of companies in the array
console.log(itCompanies.length);

// 9. Print the first company, middle and last company
for (let index = 0; index < itCompanies.length; index+=3) {
    console.log(itCompanies[index]);
}

// 10. Print out each company
for (let index = 0; index < itCompanies.length; index++) {
    console.log(itCompanies[index]);
}

// 11. Change each company name to uppercase one by one and print them out
for (let index = 0; index < itCompanies.length; index++) {
    itCompanies[index][0].toUpperCase()
    console.log(itCompanies[index]);
}


// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join(', ') + ' are big IT companies.');

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let checkCompany = (arr) => {
    itCompanies.includes(arr) ? console.log(arr) : 'Not Found'
}

// 14. Filter out companies which have more than one 'o' without the filter method


// 15. Sort the array using sort() method
itCompanies.sort();

// 16. Reverse the array using reverse() method
itCompanies.reverse();

// 17. Slice out the first 3 companies from the array
let firstThree = itCompanies.slice(0,3);

// 18. Slice out the last 3 companies from the array
let lastThree = itCompanies.slice(4);

// 19. Slice out the middle IT company or companies from the array
// slice copies items
let middle = itCompanies.slice(3,3);

// 20. Remove the first IT company from the array
let first = itCompanies.shift();

// 21. Remove the middle IT company or companies from the array
let middle = itCompanies.splice(3,3);

// 22. Remove the last IT company from the array
let last = itCompanies.pop()

// 23. Remove all IT companies
let deleteItCompanies = itCompanies.splice();


// Exercise Level 2


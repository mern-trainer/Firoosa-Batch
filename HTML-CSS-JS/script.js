// // variable => container => store data
// // indentifier => name of variable, function, class, object =>
// // keyword => reserved word => can't use as identifier
// // DOM => Document Object Model => programming interface for web documents => style, content, structure
// // function => block of code => reusable => perform specific task
// // string => collection of characters => "Hello" => 'Hello' => `Hello`

// const text = "John";

// // string methods

// // length => return length of string
// // toUpperCase => convert string to uppercase
// // toLowerCase => convert string to lowercase
// // includes => check if string contains specific text => return boolean
// // slice => extract part of string => return new string
// // indexOf => return index of first occurence of specific text => return -1 if not found
// // replace => replace specific text with new text => return new string
// // replaceAll => replace all occurence of specific text with new text => return new string
// // split => split string into array of substrings => return array

// console.log(text.length);
// console.log(text.toUpperCase())
// console.log(text.toLowerCase())
// console.log(text.includes("John"))

// const res = text.slice(1,3);
// console.log(res)

// console.log(text.indexOf("h"))

// const string = "Hello World";
// console.log(string.replace("l", "i"))
// console.log(string.replaceAll("l", "i"))

// const words = string.split(" ")

// console.log(words)

// // Array => collection of elements => store multiple values

// const nums = [1, 2, 3, 4, 5]; // array of numbers

// // array methods

// // index => position of element in array => start from 0 => end at length - 1

// // length => return length of array
// // push => add element to end of array => return new length
// // pop => remove element from end of array => return removed element
// // shift => remove element from start of array => return removed element
// // unshift => add element to start of array => return new length
// // indexOf => return index of first occurence of element => return -1 if not found
// // includes => check if array contains specific element => return boolean
// // splice => add or remove element from array => return removed elements

// console.log(nums.length)

// nums.push(6, 7, 8, 9, 10)

// console.log(nums)

// console.log(nums.pop())
// console.log(nums)

// console.log(nums.shift())
// console.log(nums)

// nums.unshift(1)
// console.log(nums)

// console.log(nums.indexOf(10))
// console.log(nums.includes(6))

// const result = nums.splice(3, 0, 10, 20, 30, 40, 50)

// console.log(result)
// console.log(nums)

// *************************************** 31/12/2024 *********************************************

// variable => container
// indentifier => user defined words
// varibale name, function name, class name
// keywords => pre-reserved words
// var, let, const, funciton, class, new

// DOM => Programming interface for web documents => Document Object Model => content, style, structure

// form validation => DOM

// javascript basics

// js advanced

// synchronous => line by line execution of code => single at a time
// asynchronous => multiple at a time => parallel execution of code =>
// callbacks, promises, async/await

// function sum(a, b) {
//     setTimeout(() => {
//         return a + b
//     }, 3000);
// }

// const res = sum(10, 20)

// console.log(res);

// callback function => function which is passed as an argument to another function

// function hey(value) {
//     console.log(value);
// }

// function sum(a, b, callbackFunc) {
//     const result = a + b
//     callbackFunc(result)    
// }

// sum(10, 20, hey)

const nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

function reduce(array, initialValue, callbackFunc) {
    let sum = initialValue
    for (let i = 0; i < array.length; i++){
        sum += array[i]
    }
    callbackFunc(sum)
}

reduce(nums, 2000, function (sum) {
    console.log(sum);
})





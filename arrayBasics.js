
// Array decalaration

// array can store any data type
// array index starts from 0
let person = {
    name : "bhuvan",
    age : 22,
};
let arr = ["apple", "banana", person]

console.log(arr[2].name)

//array length function

console.log(`the length of array is ${arr.length}`)

//array add and remove elements - push() pop() shift() unshift()
//push() is used to add an element at the end of array
arr.push("orrange")
arr.push("water melon")
console.log(arr)

//pop() is used to remove an element from the end
arr.pop()
console.log(arr)

//unshift is used to add element at the beginning
arr.unshift("water melon")
arr.unshift("grapes")
console.log(arr)

//shift is used to remove the element at the beginning
arr.shift()
console.log(arr)

// looping an array

//for loop
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}  
//while loop
let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

//inbuit loop methods
const numbers = [1, 2, 3, 4, 5];
numbers.map((item, index, array) => {
    console.log(item, index, array);
})

const newNums = numbers.map((item, index, array)=> {
    return item + 5
})

console.log(newNums)

//filter() function is used to return only the required elements from an array based on the given condition

const newNumsFilter = numbers.filter((item, index, array)=> {
    return item > 4
})

console.log(newNumsFilter)

//reduce()

const sum = numbers.reduce((prev, item)=>{
    return prev+item
},0)

console.log(sum);

// every() and some() returns true or false based on the condition
const some = numbers.some((item, index, array) => {
    return item > 3
})

console.log(some)

const every = numbers.every((item, index, array) => {
    return item > 3
})

console.log(every)

//spread and rest

const no1 = [1, 2, 3]
const no2 = [4, 5, 6]

const finalNo =[...no1, ...no2]
console.log(finalNo);

//more array methods
//concate

const newArr = no1.concat(no2)
console.log(newArr);

//slice()

const slice = [0, 1, 2,3, 4,5]

const newSlice = slice.slice(-2);
console.log(newSlice);

//splice()

const splice = slice.splice(0,3,6);
console.log(splice);
console.log(slice)

//fill()
splice.fill(0)
console.log(splice)

// findindex()
const array10 =[10 , 9, 8, 7, 6]
const index = array10.findIndex((hey)=> hey === 9)
console.log(index);

//flat()
const number = [1, [ 2, 3], 4]
console.log(number);
console.log(number.flat());

//reverse
const sample = [ 1, 2, 3, 4, 5]
console.log(sample)
console.log(sample.reverse())

//sort()
console.time()
const unsorted = [ 28, 15, 24, 22, 8]
console.log(unsorted);
console.log(unsorted.sort((a, b)=> b - a));
console.timeEnd()
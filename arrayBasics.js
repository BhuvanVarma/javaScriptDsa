
// Array decalaration

// array can store any data type
// array index starts from 0
let person = {
    name : "bhuvan",
    age : 22,
};
let arr = ["apple", "banana", person]
/*
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
*/
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
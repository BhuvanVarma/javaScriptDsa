//ques 1 - Second Lasrgest Number
//Given an array Arr of size N, Print Second largest
//distinct element from an array.

//input: [12, 35, 1, 10, 34, 1] --->>> output:34
//input: [10, 5, 10] --->>> output:5
/*
function secondLargest(arr){
    const uniqueArr = Array.from(new Set(arr))
    uniqueArr.sort((a, b)=> b - a)
    if (uniqueArr.length >= 2) {
        return uniqueArr[1];
    } else {
        return -1
    }
}
console.time()
console.log(secondLargest([12, 35, 1, 10, 34, 1]))
console.timeEnd()
*/
//Optimised approach
//[12, 35, 1, 10, 34, 1]
//largest=12
//secondlargest=12

function secondLargestOptimised(arr){
    let largest = -1
    let secondLargest = -1

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i]
            
        } else if (arr[i] != largest && arr[i] > secondLargest) {
            secondLargest = arr[i]
        }
    }
    return secondLargest;
}
console.time()
console.log(secondLargestOptimised([12, 35, 1, 10, 34, 1]))
console.timeEnd()
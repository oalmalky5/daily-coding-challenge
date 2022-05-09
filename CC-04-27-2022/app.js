//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]


function mult(arr){
    return arr.filter((x,i) => x % i === 0)
}
//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

function sum(arr){
    return arr.reduce((acc, c) => acc + parseInt(c), 0)
}
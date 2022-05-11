//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

function sum(arr){
    return arr.reduce((acc, c) => acc + parseInt(c), 0)
}
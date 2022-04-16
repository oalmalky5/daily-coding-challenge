// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
    let numToString = n.toString().split('')
    let arrToNum = []
    let arrToString = []
    numToString.forEach(x => arrToNum.push(Number(x)))
    arrToNum.sort((a,b) => b-a)
    arrToNum.forEach(x => arrToString.push(x.toString()))
    
    return Number(arrToString.join(''))
   }
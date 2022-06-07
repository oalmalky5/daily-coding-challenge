
// Your mission, should you accept it, is to return the count of all integers in a given range which do not contain the digit 5 (in base 10 representation).
// You are given the start and the end of the integer range. The start and the end are both inclusive.

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> return 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> return 12
// The result may contain fives. ;-)
// The start will always be smaller than the end. Both numbers can be also negative.





function dontGiveMeFive(start, end){

    let arr = []
    for (let i = start; i <= end; i++){
      arr.unshift(i.toString())
    }
     return arr.filter(x  => !x.includes('5')).length
  }
  
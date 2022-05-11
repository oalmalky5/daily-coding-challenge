// turn a given integer into an array that contains the count of number from 1 until that the given integer

function countUntilGivenNumber(number){
    let array = []
    let current = 0
    for(let i = 0; i < number; i++){
      current += 1
      array.push(current)
    }
  return array
  }
  
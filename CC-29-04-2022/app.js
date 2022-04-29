// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples:

// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]



function number(array){
    let newArr = []
    array.forEach((x, i) => {
      newArr.push(`${i + 1}: ${x}`)
    })
    return newArr
  }
  
//   Middle Earth is about to go to war. The forces of good will have many battles 
// with the forces of evil. Different races will certainly be involved. Each race has a certain worth when battling against others. On the side of good we have the following races, with their associated worth:

function goodVsEvil(good, evil){
    let evilArr = evil.split(' ')
    let goodArr = good.split(' ')
    let goodWorth = [Number(goodArr[0]) * 1, Number(goodArr[1]) * 2, Number(goodArr[2]) * 3, Number(goodArr[3]) * 3,  Number(goodArr[4]) * 4, Number(goodArr[5]) * 10]
    let evilWorth = [Number(evilArr[0]) * 1, Number(evilArr[1]) * 2, Number(evilArr[2]) * 2, Number(evilArr[3]) * 2,  Number(evilArr[4]) * 3, Number(evilArr[5]) * 5,  Number(evilArr[6]) * 10]
    
    let evilSum = evilWorth.reduce((acc, c) => acc + Number(c), 0)
    let goodSum = goodWorth.reduce((acc, c) => acc + Number(c), 0)
  
    if (evilSum > goodSum){
      return 'Battle Result: Evil eradicates all trace of Good'
    } else if (evilSum < goodSum){
      return 'Battle Result: Good triumphs over Evil'
    } else {
      return 'Battle Result: No victor on this battle field'
    }
  }
  
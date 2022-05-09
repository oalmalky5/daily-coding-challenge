// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'


function smash (words) {
    return words.join(' ')
 };


//  In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.


function highAndLow(numbers){
    let arrNums = numbers.split(' ')
    let nums = []
    let finalStringArr = []
    let finalResult = ''
    arrNums.forEach(x => nums.push(Number(x)))
    let sorted = nums.sort((a,b) => a - b)
    sorted.forEach(x => finalStringArr.push(x.toString()))
    finalResult += finalStringArr[finalStringArr.length - 1]
    finalResult += ' '
    finalResult += finalStringArr[0]
    return finalResult
  }
  
  // compare your test points with class average points and returb true if you're score is above the class score.

  function betterThanAverage(classPoints, yourPoints) {
    classPoints.push(yourPoints)
   
     let totalClassPoints = classPoints.reduce((acc, curr) => {
       return acc + curr
     }, 0)
     let avg = totalClassPoints / classPoints.length 
     return avg > yourPoints? false : true
   }


//    Can you find the needle in the haystack?

//    Write a function findNeedle() that takes an array full of junk but containing one "needle"
   
//    After your function finds the needle it should return a message (as a string) that says:
   
//    "found the needle at position " plus the index it found the needle, so:
   
//    findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
//    should return "found the needle at position 5" (in COBOL "found the needle at position 6")
   
function findNeedle(haystack) {
  
    if (haystack.includes('needle')){
      return 'found the needle at position ' + haystack.indexOf('needle')
    }
  }
  
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(arr){
    return `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`
  }
  

  // There is an array with some numbers. All numbers are equal except for one. Try to find it!

  // findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
  // findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
  

  function findUniq(arr) {
    // do magic
    let elm1 = arr.filter((elm) => elm === arr[0]);
    let elm2 = arr.filter((elm) => elm !== arr[0]);
    
    return elm1.length > elm2.length ? elm2[0] : elm1[0]
  }
  

//   Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
// Note
// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.


function countSmileys(arr) {
  const smileysFacesVariattions = [':)', ':D', ':-)', ':~)', ':-D', ':~D', ';)', ';D', ';-)', ';~)', ';-D', ';~D'];
  let count = 0;
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < smileysFacesVariattions.length; j++) {
      if (arr[i] === smileysFacesVariattions[j]) {
        count++;
      }
    }
  }
  return count;
}





// comeback to this later on. 


// A format for expressing an ordered list of integers is to use a comma separated list of either

// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

// Example:

// solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// // returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"


function solution(list){
  //TODO: complete solution 
  let newArr = [];
  cal(list,i = 1);
  function cal(list,i){
         if(list.length > 0){  
             (list[0] + i) == list[i] ? cal(list,i += 1) : newArr.push(list.splice(0,i));
             cal(list,1);
         }else{
            return true;
         }
   }
  return newArr.map(x => {
        x.length > 2 && (x = `${x[0]}-${x[x.length-1]}`);
        return x;
   }).join(',');
}

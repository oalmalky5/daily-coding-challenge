// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

function encode(string) {
    let newArr = []
    string.split('').forEach((x) => {
      if (x === 'a' ) {
        x = '1'
        newArr.push(x)
      } else if (x === 'o') {
         x = '4'
        newArr.push(x)
      } else if (x === 'e'){
        x = '2'
        newArr.push(x)
      } else if (x === 'i'){
        x = '3'
        newArr.push(x)
      } else if (x === 'u') {
        x = '5'
        newArr.push(x)
      } else {
        newArr.push(x)
      }
  
    })
    return newArr.join('')
  }
  
  
  function decode(string) {
    let newArr = []
    string.split('').forEach((x) => {
      if (x === '1' ) {
        x = 'a'
        newArr.push(x)
      } else if (x === '4') {
         x = 'o'
        newArr.push(x)
      } else if (x === '2'){
        x = 'e'
        newArr.push(x)
      } else if (x === '3'){
        x = 'i'
        newArr.push(x)
      } else if (x === '5') {
        x = 'u'
        newArr.push(x)
      } else {
        newArr.push(x)
      }
  
    })
    return newArr.join('')
  }
  
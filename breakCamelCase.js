// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""




function solution(string) {
    let finalResult = '';
    
    for (let i = 0; i < string.length; i += 1) {
      string[i].charCodeAt() > 96 ? finalResult += string[i] : finalResult += ` ${string[i]}`
    }
    
    return finalResult;
  }
  
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.



function count(string) {  
    let arr = string.split('')
    
    let alphabet = {
      "a": 0, "b": 0, "c": 0, "d": 0, "e": 0, "f": 0, "g": 0, "h": 0, "i": 0, "j": 0, "k": 0, "l": 0, "m": 0, "n": 0, "o": 0, "p": 0, "q": 0, "r": 0, "s": 0, "t": 0, "u": 0, "v": 0, "w": 0, "x": 0, "y": 0, "z": 0
    }
  
  arr.forEach(x => {
    for (let [key, value] in alphabet){
      if (key === x){
        alphabet[key] += 1
      }
    }
  })
    for (let [key, value] in alphabet){
      if (alphabet[key] === 0) {
        delete alphabet[key]
      }
    }
    return alphabet
  }
  
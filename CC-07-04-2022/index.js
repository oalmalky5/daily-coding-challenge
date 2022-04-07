// write a function that removes the first and last number from a string


function removeChar(str){
    let removeFirst = str.substr(1)
    let removeLast = removeFirst.substr(0, removeFirst.length - 1)
    return removeLast
  };
  
  
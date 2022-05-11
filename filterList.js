//   In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filterList(l) {
    let numList = []
    l.forEach(x => {
      if(typeof x === "number"){
        numList.push(x)
      }
    })
    return numList
  }
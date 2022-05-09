// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).


function countSheeps(arrayOfSheep) {
    let num = 0
    arrayOfSheep.forEach(x => {
      if (x === true){
        num += 1
      }
    })
    return num
  }

//   In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
    let numList = []
    l.forEach(x => {
      if(typeof x === "number"){
        numList.push(x)
      }
    })
    return numList
  }
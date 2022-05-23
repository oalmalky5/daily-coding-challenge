// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
    if (array[0] === undefined){
      return 0
    } else {
        let num = array.reduce((acc, crr) => acc + crr, 0)
        return num / array.length
    }
  }
  
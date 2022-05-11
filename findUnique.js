  // There is an array with some numbers. All numbers are equal except for one. Try to find it!

  // findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
  // findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
  

  function findUniq(arr) {
    // do magic
    let elm1 = arr.filter((elm) => elm === arr[0]);
    let elm2 = arr.filter((elm) => elm !== arr[0]);
    
    return elm1.length > elm2.length ? elm2[0] : elm1[0]
  }

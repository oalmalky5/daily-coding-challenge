
// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
// This image will illustrate things more clearly:


// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].






snail = function(array) {
    if(array.length === 0) return [];
    if(array.length === 1) return array[0];
    let top = array[0].slice(0,-1);
    let right = array.map(a => a[a.length - 1]);
    let bottom = array[array.length - 1].slice(0, -1).reverse();
    let left = array.slice(1, -1).map(b => b[0]).reverse();
    let inner = array.slice(1, -1).map(c => c.slice(1, -1));
    return [].concat(top, right, bottom, left, snail(inner));
  }
  
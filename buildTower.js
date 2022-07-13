
// Build Tower
// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]






function towerBuilder(floors) {
    var result = [];
    var rowLength = floors + (floors-1);
    for(var i = 0; i < floors; i++) {
      var spaces = "";
      for(var j = 0; j < i; j++) {
        spaces += " ";
      }
      var row = "";
      for(var k = rowLength; k > 0; k--) {
        row += "*";
      }
      rowLength -= 2;
      result.unshift(spaces + row + spaces);
    }
    return result;
  }
  
  towerBuilder(6);
  
  
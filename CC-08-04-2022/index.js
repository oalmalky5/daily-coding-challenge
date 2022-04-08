// We need a function that can transform a number into a string.

// What ways of achieving this do you know?

function numberToString(num) {
    return num.toString()
}


// Write a function called repeatStr which repeats the given string string exactly n times.

function repeatStr (n, s) {
    let repeated = ''
    for (let i = 1; i <= n; i++){
      repeated += s
    }
    return repeated
  }
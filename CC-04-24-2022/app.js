// Write a function that returns a string in which firstname is swapped with last name.

// nameShuffler('john McClane'); => "McClane john"


function nameShuffler(str){
    let arr = str.split(' ')
    let shuff = ''
    shuff += arr[1]
    shuff += ' '
    shuff += arr[0]
    return shuff
  }
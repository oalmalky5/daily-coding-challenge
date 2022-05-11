// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true


function setAlarm(employed, vacation){
    return vacation !== true & employed === true ? true : false
  }


//   Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

//   Examples (Input -> Output):
//   * "String"      -> "SSttrriinngg"
//   * "Hello World" -> "HHeelllloo  WWoorrlldd"
//   * "1234!_ "     -> "11223344!!__  "
  


function doubleChar(str) {
    let doubleStr = ''
    for (let i = 0; i < str.length; i++){
      doubleStr += str[i] += str[i]
    }
    return doubleStr
  }
  
  
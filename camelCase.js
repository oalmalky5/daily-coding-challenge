// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"



function toCamelCase(str){
    let mainStr = str
    if(str.includes("-")){
      mainStr = mainStr.split("-")
    } else if(str.includes("_")){
      mainStr = mainStr.split("_")
    } else {
      mainStr = mainStr.split("")
    }
    let firstVal = mainStr[0]
  
    let newArr = mainStr.map(x => x.charAt(0).toUpperCase()+ x.substring(1))
    let removeFirst = newArr.shift()
    let addFirst = newArr.unshift(firstVal)
    let camel = newArr.join('')
    return camel
  }


// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
    let withoutVowels = ''
    let strArr = str.split('')
      
    strArr.forEach((x,i) => {
      if (x.toLowerCase() != 'a' & x.toLowerCase() != 'o' & x.toLowerCase() != 'e' & x.toLowerCase() != 'i' & x.toLowerCase() != 'u' ){
        withoutVowels += x
      }
      
    })
    return withoutVowels
  }
  
  
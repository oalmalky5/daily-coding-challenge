
  // Trial division. Note that we just check from 2 to the square root of num
  // See https://en.wikipedia.org/wiki/Primality_test
  // and http://www.javascripter.net/faq/numberisprime.htm
  function isPrime(num) {
    if (num <= 1) return false
    for (let i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return false
    return true
  }
  
  module.exports = sumOfDivided
  Object.assign(module.exports, { getPrimeFactors, isPrime })
  
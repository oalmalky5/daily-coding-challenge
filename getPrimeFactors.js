function getPrimeFactors(value) {
    const re = []
    let num = Math.abs(value)
  
    for (let i = 2; i <= num; i++) {
      if (!isPrime(i)) continue
  
      if (i === num) {
        re.push(i)
        break
      }
  
      if (num % i === 0) {
        re.push(i)
        do { num = num / i } while (num % i === 0)
      }
    }
  
    return re
  }

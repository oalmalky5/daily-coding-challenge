
// sum by factor

function sumOfDivided(list) {
    const factorMap = {}
    for (const num of list) {
      for (const f of getPrimeFactors(num)) factorMap[f] = (factorMap[f] || 0) + num
    }
  
    return Object.keys(factorMap)
      .map(Number)
      .sort((a, b) => a - b)
      .map(i => [i, factorMap[i]])
  }
  
  
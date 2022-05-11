  // compare your test points with class average points and returb true if you're score is above the class score.

  function betterThanAverage(classPoints, yourPoints) {
    classPoints.push(yourPoints)
   
     let totalClassPoints = classPoints.reduce((acc, curr) => {
       return acc + curr
     }, 0)
     let avg = totalClassPoints / classPoints.length 
     return avg > yourPoints? false : true
   }



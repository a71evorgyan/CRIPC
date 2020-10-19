const sumOfMultiples = (num, m1, m2) => {
    const countOfM1 = Math.floor((num - 1)  / m1);
    const countOfM2 = Math.floor((num - 1)  / m2);
  
    const sumOfM1 = (m1 * countOfM1 * (countOfM1 + 1) ) / 2;
    const sumOfM2 = (m2 * countOfM2 * (countOfM2 + 1) ) / 2;
    return sumOfM1 + sumOfM2;
}

console.log(sumOfMultiples(1000, 3, 5)); // 266333

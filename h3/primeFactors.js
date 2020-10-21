const primeFactorsOfNum = (num) => {
    const primeFactors = [];
    if(num < 2) {
        primeFactors.push(2);
    }
    while(num % 2 === 0) {
        num = Math.floor(num / 2);
        primeFactors.push(2);
    }

    for(let i = 3; i <= Math.sqrt(num); i += 2){
        while(num % i === 0) {
            num = Math.floor(num / i);
            primeFactors.push(i);
        }
    }

    return primeFactors;
}

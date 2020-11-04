const findLargestPalindrome = (countOfDigits) => {
    let largestNum = 9;
    for(let i = 1; i < countOfDigits; i++) {
        largestNum += 9 * Math.pow(10, i);
    }
    return largestNum;
}

const checkPalindrome = (num) => {
    let changableNum = num;
    let reverseNum = 0; 
    while (changableNum > 0) { 
        reverseNum = reverseNum * 10 + changableNum % 10;         
        changableNum = Math.floor(changableNum / 10); 
    } 
    return reverseNum === num; 
}

const findLargestPalindromeProduct = (countOfDigits) => {
    const largestNum = findLargestPalindrome(countOfDigits);
    
    for (let i = largestNum; i > 0; i--) {
        for(let j = largestNum; j > 0; j--) {
            let product = i * j;
            if(checkPalindrome(product)) {
                return product;
            }
        }
    }
}

console.log(findLargestPalindromeProduct(3)); //90909

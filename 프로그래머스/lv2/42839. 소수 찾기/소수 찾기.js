function isPrime(n) {
	if (n < 2) return false;
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) return false;
	}
	return true;
}

function solution(numbers) {
    let numbers_arr = numbers.split('');
    let nums = new Set();
    
    function getPermutation(numbersArray, fixedNumber) {
        console.log(fixedNumber)
        if (numbersArray.length) {
          for (let i = 0; i < numbersArray.length; i++) {
            const temp = [...numbersArray];

            temp.splice(i, 1);

            if (isPrime(parseInt(fixedNumber + numbersArray[i]))) {
              nums.add(parseInt(fixedNumber + numbersArray[i]));
            }
            getPermutation(temp, fixedNumber + numbersArray[i]);
          }
        }
    }
    
    getPermutation(numbers_arr, '')
    
    return nums.size;
}
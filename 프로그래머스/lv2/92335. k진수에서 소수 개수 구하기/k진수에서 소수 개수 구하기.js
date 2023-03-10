function solution(n, k) {
    const isPrime = (num) => {
        if(num === 1) return false;
        for(let i=2; i<=Math.sqrt(num); i++) {
            if(num % i === 0) return false;
        }
        return true;
    }
    
    n = n.toString(k);
    
    let result = 0;
    let arr = n.split('0');
    
    for(let item of arr) {
        if(item !== '' && isPrime(Number(item))) {
            result++
        }
    }
    
    return result;
}
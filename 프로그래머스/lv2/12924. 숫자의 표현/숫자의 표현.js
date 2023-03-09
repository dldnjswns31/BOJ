function solution(n) {
    // sliding window
    if(n === 1) return 1;
    
    const arr = new Array(n+1).fill((_,idx) => idx)
    let start = 1;
    let end = 2;
    let result = 0;
    while(start !== end) {
        let sum = 0;
        for(let i=start; i<=end; i++) {
            sum += i;
        }
        
        if(sum === n) {
            result++;
            end++;
        } else if (sum > n) {
            start++;
        } else {
            end++;
        }
    }
    
    // 숫자 자기자신 더하기
    return result + 1;
}
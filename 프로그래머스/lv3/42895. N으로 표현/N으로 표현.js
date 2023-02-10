function solution(N, number) {
    if(N === number) return 1
    let dp = new Array(9).fill(0).map(() => new Set());
    
    let operator = [(a,b) => a+b, (a,b) => a-b, (a,b) => a*b, (a,b) => Math.floor(a/b)]
    
    for(let i=1; i<9; i++) {
        dp[i].add(Number(String(N).repeat(i)));
        
        for(let j=1; j<i; j++) {
            for(const arg1 of dp[j]){
                for(const arg2 of dp[i-j]){
                    for(let k=0; k<operator.length; k++) {
                        dp[i].add(operator[k](arg1, arg2))
                    }
                }
            }
        }
        if(dp[i].has(number)) return i;
    }
    return -1;
    
    return -1;
}

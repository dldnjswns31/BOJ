function solution(n, s) {
    if(s < n) return [-1]
    
    let divide = parseInt(s/n);
    let remain = s%n;
    
    let result = new Array(n).fill(divide)
    
    for(let i=0; i<remain; i++) {
        result[i] += 1;
    }
    
    return result.sort((a,b) => a-b)
}
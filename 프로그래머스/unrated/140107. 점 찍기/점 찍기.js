function solution(k, d) {
    let answer = 0;
    for(let i=0; i<=d; i += k) {
        let num = (d**2 - i**2) ** 0.5;
        answer += Math.ceil(num / k) + (num % k === 0 ? 1 : 0)
    }
    
    return answer;
}
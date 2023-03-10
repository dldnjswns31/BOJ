function solution(n, left, right) {
    let answer = [];
    for(let i=left; i<=right; i++) {
        let divide = Math.floor(i/n);
        let remain = i%n;
        answer.push(Math.max(divide,remain)+1)
    }
    return answer;
}
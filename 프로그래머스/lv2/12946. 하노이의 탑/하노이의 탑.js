function solution(n) {
    // recursion
    let answer = [];
    
    function hanoi (num, start, to, via) {
        if(num === 1) {
            move(start, to);
        }
        else {
            hanoi(num-1, start, via, to);
            move(start, to);
            hanoi(num-1, via, to, start);
        }
    }
    
    function move (start, to) {
        answer.push([start, to])
    }
    
    hanoi(n, 1, 3, 2);
    
    return answer;
}
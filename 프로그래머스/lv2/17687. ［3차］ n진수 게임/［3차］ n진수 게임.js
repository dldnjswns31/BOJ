function solution(n, t, m, p) {
    // stack 사용
    let stack = [];
    // 게임의 횟수
    let gameCount = t*m;
    // 순서
    let turn = 1;
    // 이번 숫자
    let num = 0;
    // 정답
    let answer = []
    for(let i=0; i<gameCount; i++) {
        // stack에 숫자가 없다면 채워놓고 다음 숫자 체크
        if(stack.length === 0) {
            stack = num.toString(n).split('');
            num++;
        }
        
        let currentNum = stack.shift(); 
        if(turn === p) {
            answer.push(currentNum);
        }
        turn++;
        
        if(turn > m) turn = 1;
    }
    
    return answer.join('').toUpperCase();
}


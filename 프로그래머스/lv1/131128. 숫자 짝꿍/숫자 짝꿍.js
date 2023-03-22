function solution(X, Y) {
    var answer = '';
    X = X.split('');
    Y = Y.split('');
    
    // 0부터 9까지 모든 숫자의 갯수를 셈
    // 갯수 중 적은 수만큼 반복하여 answer 문자열어 추가함
    for(let i=0; i<10; i++) {
        const currentX = X.filter(x => x === String(i)).length;
        const currentY = Y.filter(y => y === String(i)).length;
        answer += String(i).repeat(Math.min(currentX, currentY));
    }
    if(answer === '') return '-1';
    if(Number(answer) === 0) return '0';
    
    return answer.split('').reverse().join('');
}
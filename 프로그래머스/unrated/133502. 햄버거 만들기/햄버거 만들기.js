function solution(ingredient) {
    let answer = 0;
    const stack = [];
    
    // 아이템 스택에 저장
    for(let item of ingredient) {
        stack.push(item);
        
        // 스택의 길이가 4 이상일경우 마지막 4개 아이템 확인
        if(stack.length >= 4) {
            let str = stack.slice(-4).join('');
            
            // 순서가 맞다면 재료 pop후 answer 증가
            if(str === '1231') {
                stack.pop();
                stack.pop();
                stack.pop();
                stack.pop();
                answer++;
            }
        }
    }
    return answer;
}
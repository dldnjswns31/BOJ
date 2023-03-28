function solution(ingredient) {
    let answer = 0;
    const stack = [];
    
    for(let item of ingredient) {
        stack.push(item);
        
        if(stack.length >= 4) {
            let str = stack.slice(-4).join('');
            
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
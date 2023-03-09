function solution(s) {
    const stack = [];
    
    for(let item of s) {
        stack.push(item);
        
        if(stack.length > 1 && stack[stack.length-1] === stack[stack.length-2]) {
            stack.pop();
            stack.pop();
        }
    }
    
    return stack.length ? 0 : 1;
}
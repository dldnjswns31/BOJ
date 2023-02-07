function solution(number, k) {
    const stack = [number[0]];
    
    let pop = 0;
    for(let i=1; i<number.length; i++) {
        if(stack[stack.length-1] < number[i]) {
            while(stack[stack.length-1] < number[i] && stack.length) {
                stack.pop();
                pop++;
                if(pop === k) return stack.join('') + number.slice(i);
            }
        }
        stack.push(number[i])
    }
    
    if(stack.length === number.length) {
        return number.slice(0, number.length-k);
    }
}
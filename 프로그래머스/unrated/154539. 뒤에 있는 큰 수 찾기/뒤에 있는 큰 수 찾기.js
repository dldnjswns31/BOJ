function solution(numbers) {
    let stack = [];
    let result = [];
    
    for(let i=0; i<numbers.length; i++) {
        // [숫자, 인덱스]
        if(!stack.length) {
            stack.push([numbers[i],i]);
        } else {
            while(stack.length) {
                let lastStackItem = stack[stack.length-1]
                if(lastStackItem[0] < numbers[i]) {
                    result[lastStackItem[1]] = numbers[i];
                    stack.pop();
                } else {
                    break;
                }
            }
            stack.push([numbers[i], i]);
        }
    }
    
    while(stack.length) {
        let [num,idx] = stack.pop();
        result[idx] = -1;
    }
    
    return result;
}
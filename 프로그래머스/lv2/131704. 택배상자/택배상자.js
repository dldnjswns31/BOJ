function solution(order) {
    const stack = [];
    const firstBelt = new Array(order.length).fill(0).map((_,idx) => idx+1);
    
    let firstBeltIdx = 0;
    let orderIdx = 0;
    let result = 0;
    
    for(let item of firstBelt) {
        stack.push(firstBelt[firstBeltIdx]);
        firstBeltIdx++;
        
        const length = stack.length;
        for(let i=0; i<length; i++) {
            if(order[orderIdx] === stack[stack.length-1]) {
                stack.pop();
                result++;
                orderIdx++;
            } else {
                break;
            }
        }
    }
    
    return result;
}
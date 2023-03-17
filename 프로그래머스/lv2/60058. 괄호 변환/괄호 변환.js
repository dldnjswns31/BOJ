function solution(p) {
    // 1번
    if(p.length === 0) return '';
    
    // 2번
    let open = 0;
    let close = 0;
    let index = 0;
    for(let item of p) {
        if(item === '(') open++;
        else close++;
        index++;
        
        if(open === close) break;
    }
    
    let u = p.slice(0,index);
    let v = p.slice(index);
    
    // 3번
    if(rightBracket(u)) {
        return u.concat(solution(v))
    } 
    
    // 4번
    else {
        
        let str = '(';
        str += solution(v);
        str += ')';
        let newU = u.split('');
        newU.shift();
        newU.pop();
        
        for(let i=0; i<newU.length; i++) {
            newU[i] === '(' ? newU[i] = ')' : newU[i] = '(';
        }
        
        return str + newU.join('');
    }
    
    // 올바른 괄호 문자열 판별
    function rightBracket(u) {
        let stack = [];
        
        for(let item of u) {
            if(item === ')' && stack[stack.length-1] === '(') stack.pop();
            else stack.push(item);
        }
        
        return stack.length ? false : true;
    }
}
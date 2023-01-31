function solution(brown, yellow) {
    let total = brown + yellow;
    let sqrt = Math.sqrt(total);
    if(Number.isInteger(sqrt)) {
        return [sqrt, sqrt]
    }
    
    for(let i=total; i>=3; i--) {
        if(!Number.isInteger(total/i)) continue;
        let width = i;
        let height = total/i;
        
        let yellow_w = width-2;
        let yellow_h = height-2;
        
        if(yellow_w * yellow_h === yellow) {
            return [width, height]
        }
    }
}
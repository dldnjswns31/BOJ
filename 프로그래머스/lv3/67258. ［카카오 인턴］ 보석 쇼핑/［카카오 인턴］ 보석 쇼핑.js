function solution(gems) {
    let size = new Set(gems).size;
    let left = 0;
    let right = 0;
    
    let gemMap = new Map();
    gemMap.set(gems[right], 1)
    let answer = [1, gems.length]
    
    while(right<gems.length) {
        if(gemMap.size === size) {
            if(answer[1]-answer[0] > right-left) {
                answer = [left+1, right+1];
            }
            let num = gemMap.get(gems[left])
            if(num === 1) gemMap.delete(gems[left])
            else gemMap.set(gems[left], num-1);
            left++;
            continue;
        }
        
        right++;
        let num = gemMap.get(gems[right]) 
        gemMap.set(gems[right], num ? num+1 : 1)
        
    }
    
    return answer
}
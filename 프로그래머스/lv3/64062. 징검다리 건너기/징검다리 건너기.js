function solution(stones, k) {
    let left = 1;
    let right = 200000000;
    
    while(left <= right) {
        let mid = Math.floor((left+right) / 2);
        
        let count = 0;
        for(let item of stones) {
            if(item - mid <= 0) count++;
            else count = 0;
            
            if(count === k) break;
        }
        
        if(count === k) right = mid-1;
        else left = mid+1;
    }
    
    return left
}
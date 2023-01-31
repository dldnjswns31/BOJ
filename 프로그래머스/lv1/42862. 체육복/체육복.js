function solution(n, lost, reserve) {
    let new_lost = lost.filter(item => !reserve.includes(item)).sort((a,b) => a-b)
    let new_reserve = reserve.filter(item => !lost.includes(item)).sort((a,b) => a-b)
    
    for(let i=0; i<new_lost.length; i++) {
        
        let new_lost_idx = new_lost.indexOf(new_lost[i]);
        let reserve_minus = new_reserve.indexOf(new_lost[i]-1);
        let reserve_plus = new_reserve.indexOf(new_lost[i]+1);
        
        if(reserve_minus !== -1) {
            new_lost.splice(new_lost_idx,1);
            new_reserve.splice(reserve_minus, 1);
            i--;
            continue;
        } 
        
        if(reserve_plus !== -1) {
            new_lost.splice(new_lost_idx,1);
            new_reserve.splice(reserve_plus, 1);
            i--;
            continue;
        }
    }
    
    return n-new_lost.length;
}
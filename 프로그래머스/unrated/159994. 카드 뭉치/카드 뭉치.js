function solution(cards1, cards2, goal) {
    let cards1Idx = 0;
    let cards2Idx = 0;
    
    for(let item of goal) {
        if(cards1Idx<cards1.length && cards1[cards1Idx] === item) {
            cards1Idx++;
            continue;
        } else if(cards2Idx<cards2.length && cards2[cards2Idx] === item) {
            cards2Idx++;
            continue;
        } else {
            return 'No'
        }
    }
    
    return 'Yes'
}
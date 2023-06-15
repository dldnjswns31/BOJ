function solution(cap, n, deliveries, pickups) {
    let answer = 0;
    while(deliveries[deliveries.length-1] === 0 && pickups[pickups.length-1] === 0) {
        deliveries.pop();
        pickups.pop();
        n--;
    }
    
    let distance = n;
    let box = 0;
    while(deliveries.length !== 0 || pickups.length!==0) {
        while(deliveries.length !== 0) {
            box += deliveries.pop();
            if(box > cap) {
                deliveries.push(box-cap);
                break;
            }
        }
        box = 0;
        while(pickups.length !== 0) {
            box += pickups.pop();
            if(box > cap) {
                pickups.push(box-cap);
                break;
            }
        }
        box = 0;
        answer += distance * 2;
        distance = Math.max(deliveries.length, pickups.length);
    }
    
    return answer
    
}
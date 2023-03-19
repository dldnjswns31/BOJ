function solution(n, times) {
    // 이분탐색으로 시간 체크
    times = times.sort((a,b) => a-b);
    
    // 최소는 1분, 최대는 가장 심사가 긴 심사관한테 모두가 입국심사 받는 경우
    let left = 1;
    let right = times[times.length-1] * n;
    let answer = right;
    
    while(left<=right) {
        let mid = Math.floor((left+right) / 2);
        let count = 0;
        
        for(let item of times) {
            // 심사관이 시간동안 처리할 수 있는 사람 수
            let people = Math.floor(mid/item)
            count += people
        }
        
        if(count >= n) {
            answer = Math.min(answer,mid);
            right = mid-1;
        }
        else left = mid+1;
    }
    return answer;
}
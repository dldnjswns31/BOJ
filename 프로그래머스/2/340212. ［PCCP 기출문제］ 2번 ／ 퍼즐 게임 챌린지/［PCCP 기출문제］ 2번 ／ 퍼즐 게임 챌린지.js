// 적정 level을 찾기
// level을 계속해서 바꿔가며 찾아야하므로 이분탐색 사용
// 1부터 limit 사이 이분탐색 (1 시작)

function solution(diffs, times, limit) {
    
    // 시간 구하기
    const getTime = (diffs, times, level) => {
        const length = diffs.length;
        let total = 0;
        
        for(let i=0; i<length; i++) {
            let prevSum = times[i] +times[i-1]
            
            if(level >= diffs[i]) {
                total += times[i];
            } else {
                let gap = diffs[i] - level;
                
                total += gap * prevSum + times[i]
            }
        }
        
        return total;
    }
    
    // 이분탐색
    
    let level = Infinity;
    
    const binarySearch = (left, right) => {
        while(left<=right) {
            const mid = parseInt((left+right)/2);
            const result = getTime(diffs, times, mid);
            
            if(result <= limit){
                level = Math.min(level, mid);
                right = mid-1;
            } else {
                left = mid+1;
            }
        }
    }
    
    binarySearch(1, limit);
    
    return level;
}


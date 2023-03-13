function solution(storey) {
    storey = String(storey).split('').map(Number);
    
    let answer = 0;
    for(let i=storey.length-1; i>=0; i--) {
        if(storey[i] === 0) continue;
        if(i !== 0) {
            // 다음 자리가 5 이상인지 미만인지 체크
            if(storey[i-1] >=5) {
                if(storey[i] >= 5) {
                    answer += 10-storey[i];
                    storey[i-1] += 1;
                } else {
                    answer += storey[i];
                }
            } else {
                if(storey[i] > 5) {
                    answer += 10-storey[i];
                    storey[i-1] += 1;
                } else {
                    answer += storey[i];
                }
            }
        } else {
            if(storey[i] > 5) {
                answer += 10-storey[i]+1;
            } else {
                answer += storey[i];
            }
        }
    }
    return answer;
}


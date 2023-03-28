function solution(n, lost, reserve) {
    // 여벌 체육복이 있지만 자기 체육복은 잃어버린 학생 제거 후 오름차순으로 정렬
    let new_lost = lost.filter(item => !reserve.includes(item)).sort((a,b) => a-b)
    let new_reserve = reserve.filter(item => !lost.includes(item)).sort((a,b) => a-b)
    
    for(let i=0; i<new_lost.length; i++) {
        // console.log(i)
        // let new_lost_idx = new_lost.indexOf(new_lost[i]);
        // console.log(new_lost_idx)
        // 잃어버린 학생의 앞뒤 번호 저장
        let reserve_minus = new_reserve.indexOf(new_lost[i]-1);
        let reserve_plus = new_reserve.indexOf(new_lost[i]+1);
        
        // 잃어버린 학생의 앞 번호가 여벌 체육복이 있다면 빌려줄 수 있으니 둘다 배열에서 아이템 제거
        if(reserve_minus !== -1) {
            new_lost.splice(i,1);
            new_reserve.splice(reserve_minus, 1);
            i--;
            continue;
        } 
        
        // 똑같음
        if(reserve_plus !== -1) {
            new_lost.splice(i,1);
            new_reserve.splice(reserve_plus, 1);
            i--;
            continue;
        }
    }
    
    // 총 학생 수에서 여벌 체육복을 다 빌려주고 난 뒤 남아있는 체육복 잃어버린 학생 수 빼면 정답
    return n-new_lost.length;
}
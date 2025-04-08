// 요격 횟수 최소화 하려면?
// 가장 많이 겹치는 부분 찾아야 함
// 칸 수가 적은 기준으로 정렬

function solution(targets) {
    const sortedArr = targets.sort((a,b) => a[1]-b[1]);
    let shootingSpot = -Infinity;
    let shootingCount = 0;
    
    sortedArr.forEach(coord => {
        if(shootingSpot < coord[0]) {
            shootingSpot = coord[1]-0.1;
            shootingCount += 1;
        }
    })
    
    return shootingCount;
}


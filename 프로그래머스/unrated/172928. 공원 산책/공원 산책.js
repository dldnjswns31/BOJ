function solution(park, routes) {
    let position;
    // 공원 직사각형이므로 길이 따로 구함
    const xLength = park[0].length;
    const yLength = park.length;
    
    // 현재 포지션 찾기
    park.forEach((item,idx) => {
        item.split('').forEach((item2,idx2) => {
            if(item2 === 'S') position = [idx, idx2]
        })
    })
    
    // 동서남북 움직임 object
    const move = {N:[-1,0],S:[1,0],W:[0,-1],E:[0,1]}
    
    for(let route of routes) {
        const [direction, num] = route.split(' ');
        const [moveX, moveY] = [move[direction][1]*Number(num),move[direction][0]*Number(num)];
        const [nextX, nextY] = [position[1]+moveX, position[0]+moveY];
        
        // 공원 범위 벗어나는지 체크
        if(nextX >= xLength || nextX < 0 || nextY >= yLength || nextY < 0) continue;
        // 동선 내 장애물이 있는지 체크
        let isBlock = false;
        
        // 동쪽이나 남쪽은 인덱스 증가하며 장애물 검사
        if(direction === 'E' || direction === 'S'){
            // x축 장애물 판별 (x축으로 움직일 거리까지)
            for(let x=position[1]; x<=position[1]+moveX; x++) {
                if(park[position[0]][x] === 'X') {
                    isBlock = true;
                    break;
                }
            }
            // y축 장애물 판별 (y축으로 움직일 거리까지)
            for(let y=position[0]; y<=position[0]+moveY; y++) {
                if(park[y][position[1]] === 'X') {
                    isBlock = true;
                    break;
                }
            }    
        }
        
        // 서쪽이나 남쪽은 인덱스 감소하며 장애물 검사
        if(direction === 'W' || direction === 'N'){
            // x축 장애물 판별 (x축으로 움직일 거리까지)
            for(let x=position[1]; x>=position[1]+moveX; x--) {
                if(park[position[0]][x] === 'X') {
                    isBlock = true;
                    break;
                }
            }
            // y축 장애물 판별 (y축으로 움직일 거리까지)
            for(let y=position[0]; y>=position[0]+moveY; y--) {
                if(park[y][position[1]] === 'X') {
                    isBlock = true;
                    break;
                }
            }    
        }
        console.log(isBlock)
        if(isBlock) continue;
        
        position = [nextY, nextX]
    }
    return position
}
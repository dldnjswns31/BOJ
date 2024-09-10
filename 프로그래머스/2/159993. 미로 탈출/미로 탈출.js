function solution(maps) {
    // BFS 2번 돌리기 (1: 레버 최단거리찾기, 2: 출구 최단거리찾기)
    const newMap = maps.map(row => row.split(''));
    const rows = newMap.length;
    const cols = newMap[0].length;
    
    let start, lever, exit;
    let leverDistance = 0;
    let exitDistance = 0;
    
    for(let i=0; i<newMap.length; i++) {
        for(let j=0; j<newMap[i].length; j++) {
            if(newMap[i][j] === "S") start = [i,j];
            else if(newMap[i][j] === "L") lever = [i,j];
            else if(newMap[i][j] === "E") exit = [i,j];
        }
    }
    
    const bfs = (start, goalString) => {
        const direction = [[0,1],[0,-1],[1,0],[-1,0]];
        const queue = [[start, 0]];
        const visited = new Array(rows).fill(0).map(item => new Array(cols).fill(false))
    
        
        while(queue.length) {
            const [pos,distance] = queue.shift();
            const [x,y] = pos;
            
            if(newMap[x][y] === goalString) {
                
                return distance;
            }
            
            direction.forEach(dir => {
                const [dx, dy] = dir;
                const nextX = x+dx;
                const nextY = y+dy;
                
                if(nextX >= 0 && nextX < rows && nextY >= 0 && nextY < cols && newMap[nextX][nextY] !== 'X' && visited[nextX][nextY] !== true) {
                    visited[nextX][nextY] = true;
                    queue.push([[nextX,nextY], distance+1])
                }
            })
        }
        
        return -1;
    }
    
    leverDistance = bfs(start, "L");
    if(leverDistance === -1) return -1;
    exitDistance = bfs(lever, "E");
    if(exitDistance === -1) return -1;
    
    return leverDistance + exitDistance
    
}
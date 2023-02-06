function solution(maps) {
    let answer = 1;
    let visited = maps;
    let queue = [];
    let dx = [-1,1,0,0], dy = [0,0,-1,1]
    let n = maps.length, m = maps[0].length
    
    queue.push([0,0])
    visited[0][0] = 0
    while(queue.length > 0) {
        let size = queue.length;
        
        for(let i=0; i<size; i++) {
            let [x,y] = queue.shift();
            
            for(let j=0; j<4; j++) {
                let nx = x+dx[j];
                let ny = y+dy[j];
                
                if(ny >= 0 && ny < m && nx >= 0 && nx < n && visited[nx][ny] === 1) {
                    if(ny == m-1 && nx == n-1) {
                        return ++answer;
                    }
                    queue.push([nx, ny])
                    visited[nx][ny] = 0;
                }
            }
        }
        answer++;
    }
    return -1;
}
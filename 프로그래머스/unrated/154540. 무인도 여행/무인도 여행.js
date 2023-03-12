function solution(maps) {
    maps = maps.map(item => item.split('').map(item2 => {
        if(item2 === 'X') return 0;
        else return Number(item2);
    }))
    
    const move = [[1,0],[-1,0],[0,1],[0,-1]];
    
    let result = [];
    let num = 0;
    const dfs = (n1,n2) => {
        num += maps[n1][n2];
        maps[n1][n2] = 0;
        
        for(let mv of move) {
            const [x,y] = mv;
            const [nextX, nextY] = [n1+x,n2+y];
            
            if(nextX>=0 && nextX<maps.length && nextY>=0 && nextY<maps[0].length) {
                if(maps[nextX][nextY] === 0) continue;
                dfs(nextX, nextY, num);
            }
        }
    }
    
    for(let i=0; i<maps.length; i++) {
        for(let j=0; j<maps[0].length; j++) {
            if(maps[i][j]) {
                dfs(i,j);
                result.push(num);
                num = 0;
            }
        }
    }
    result = result.sort((a,b) => a-b);
    
    return result.length ? result : [-1]
    
}
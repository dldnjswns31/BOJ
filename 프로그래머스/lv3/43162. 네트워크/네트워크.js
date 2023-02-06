function solution(n, computers) {
    let answer = 0;
    let check = []
    
    for(let item of computers) {
        check.push(false);
    }
    
    function dfs (idx) {
        check[idx] = true;
        
        for(let i=0; i<computers[idx].length; i++) {
            if(computers[idx][i] === 1 && !check[i]) {
                dfs(i);
            }
        }
    }
    
    for(let i=0; i<computers.length; i++) {
        if(!check[i]) {
            dfs(i);
            answer++;
        }
    }
    return answer;
}
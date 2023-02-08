function solution(tickets) {
    tickets.sort();
    let length = tickets.length;
    let visited = [];
    let answer = [];
    
    function dfs (cur, cnt, path) {
        if(cnt === length) {
            answer.push(path);
        }
        
        for(let i=0; i<length; i++) {
            if(visited[i]) continue;
            if(cur === tickets[i][0]) {
                visited[i] = true;
                dfs(tickets[i][1], cnt+1, [...path, tickets[i][1]]);
                visited[i] = false;
            }
        }
    }
    
    dfs("ICN", 0, ["ICN"]);
    
    return answer[0]
}
function solution(tickets) {
    tickets = tickets.sort();
    console.log(tickets);
    let length = tickets.length;
    let nodes = [];
    
    function dfs (cur, visited, arr) {
        for(let i=0; i<length; i++) {
            if(tickets[i][0] === cur && !visited[i]) {
                visited[i] = true
                arr.push(tickets[i][0])
                
                if(arr.length === length) {
                    arr.push(tickets[i][1]);
                    nodes.push(arr);
                }
                
                dfs(tickets[i][1],[...visited], [...arr]);
            }
        }
    }
    
    
    
    for(let i=0; i<length; i++) {
        if(tickets[i][0] === 'ICN') {
            let visited = new Array(length).fill(false);
            dfs('ICN', visited, []);
        }
    }
    return nodes[0]
    
}
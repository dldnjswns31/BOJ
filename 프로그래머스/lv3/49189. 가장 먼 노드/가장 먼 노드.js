function solution(n, edge) {
    let graph = new Array(n+1).fill(0).map(() => new Array());
    for(let v of edge) {
        let [first, second] = v;
        graph[first].push(second);
        graph[second].push(first);
    }
    
    let queue = [1]
    let visited = [0,1]
    
    while(queue.length) {
        let cur = queue.shift();
        
        for(let v of graph[cur]) {
            if(!visited[v]) {
                visited[v] = visited[cur] + 1;
                queue.push(v);
            }
        }
    }
    
    let max = Math.max(...visited);
    return visited.filter(item => item === max).length;
}
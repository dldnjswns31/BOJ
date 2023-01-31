function solution(n, wires) {
    // 초기 전력망은 하나의 트리형태
    // wire의 두 원소를 트리의 시작점으로 생각
    // 무조건 2개의 트리가 나옴
    function makeGraph (arr, graph) {
        for(let item of arr) {
            let [n1,n2] = item;
            graph[n1].push(n2)
            graph[n2].push(n1)
        }
        
        return graph;
    }
    
    let abs_arr = []
    
    for(let i=0; i<wires.length; i++) {
        let new_wires = [...wires];
        let [[first,second]] = new_wires.splice(i,1);
        let visited = new Array(n+1).fill(false);
        
        let graph = makeGraph(new_wires, new Array(n+1).fill(0).map(() => new Array()));
        let count = 0;
        
        function checkGraph (graph, arr, visited) {
            for(let item of arr) {
                if(visited[item]) {
                    continue;
                } else {
                    visited[item] = true;
                    count++;
                    checkGraph(graph, graph[item], visited);
                }
            }
        }
        
        checkGraph(graph, graph[first], visited);
        if(count === 0) count = 1;
        let rest = n-count;
        abs_arr.push(Math.abs(count-rest))
    }
    
    return Math.min(...abs_arr)
}
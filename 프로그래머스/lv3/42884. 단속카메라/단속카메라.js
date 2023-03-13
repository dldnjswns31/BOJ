function solution(routes) {
    routes.sort((a,b) => a[1]-b[1])
    
    let cctv = routes[0][0]-1;
    let answer = 0;
    for(let item of routes) {
        const [start, end] = item;
        if(cctv < start) {
            answer++;
            cctv = end;
        }
    }
    
    return answer;
}
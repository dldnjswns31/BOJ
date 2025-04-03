// 생성점 : 들어오는 간선 x 나가는 간선 2 이상
// 도넛 : 들어오는 간선 1, 나가는 간선 1
// 막대 : 들어오는 간선 0, 나가는 간선 1
// 8자 : 

function solution(edges) {
    // 정점, 도넛, 막대, 8자
    const answer = [0,0,0,0];
    let vertex = 0;
    let donut = 0;
    let stick = 0;
    let eight = 0;
    
    const edgesCheck = {}
    
    edges.forEach(item => {
        const [edgeIn,edgeOut] = item;
        
        if(!edgesCheck[edgeIn]) edgesCheck[edgeIn] = [0,0];
        if(!edgesCheck[edgeOut]) edgesCheck[edgeOut] = [0,0];
        
        edgesCheck[edgeIn][0] += 1;
        edgesCheck[edgeOut][1] += 1;
    })
    
    for(const [k,v] of Object.entries(edgesCheck)) {
        const [edgeOut, edgeIn] = v;
        
        if(edgeIn === 0 && edgeOut >= 2) {
            vertex = Number(k);
        } else if (edgeIn >= 1 && edgeOut === 0) {
            stick += 1;
        } else if (edgeIn >= 2 && edgeOut >= 2) {
            eight += 1;
        }
    }
    
    donut = edgesCheck[vertex][0] - stick - eight;
    
    return ([vertex, donut, stick, eight])
}
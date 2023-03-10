function solution(n, m, section) {
    let answer = 1;
    let lastPaintStart = section[0];
    let lastPaintEnd = lastPaintStart + m - 1;
    
    for(let i=1; i<section.length; i++) {
        if(section[i] > lastPaintEnd) {
            lastPaintStart = section[i];
            lastPaintEnd = lastPaintStart + m - 1;
            answer++;
        }
    }
    
    return answer;
}
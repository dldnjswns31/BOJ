function solution(jobs) {
    jobs = jobs.sort((a,b) =>  a[0]-b[0]);

    // 소요 시간 총합
    let sum = 0;
    // 현재 시간
    let time = 0;
    let queue = [];
    let i = 0;
    
    while(jobs.length > i || queue.length) {
        if(jobs.length > i && time >= jobs[i][0]) {
            queue.push(jobs[i++]);
            queue.sort((a,b) => a[1]-b[1])
            continue;
        }
        
        if(queue.length) {
            let shift = queue.shift();
            time += shift[1];
            sum += time - shift[0];
        } else {
            time = jobs[i][0]
        }
    }
    
    return Math.floor(sum/jobs.length)
}
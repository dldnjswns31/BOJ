const convert = (num) => {
    const hour = parseInt(num / 100);
    const minute = num % 100;
    const time = hour * 60 + minute;
    
    return time;
}

function solution(schedules, timelogs, startday) {
    const newSchedules = schedules.map(convert);
    const prizeWinner = Array(newSchedules.length).fill(true);
    
    for(let i=0; i<newSchedules.length; i++) {
        const limitTime = newSchedules[i];
        
        for(let j=0; j<timelogs[i].length; j++) {
            const dotw = (startday + j) % 7;
            
            if(dotw === 6 || dotw === 0) continue;
            
            const startTime = convert(timelogs[i][j]);
            
            if(startTime > limitTime + 10) {
                prizeWinner[i] = false;
                break;
            }
        }
    }
    
    return prizeWinner.filter(item => item).length;
}
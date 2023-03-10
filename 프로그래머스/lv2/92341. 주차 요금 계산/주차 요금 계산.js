function solution(fees, records) {
    let timeObj = {}
    let obj = {}
    const getTime = (i, o) => {
        let [ih, im] = i.split(':').map(Number);
        let [oh, om] = o.split(':').map(Number);
        im += ih*60;
        om += oh*60;

        return om-im;
    }

    for (let item of records) {
        let [time, number, action] = item.split(' ');

        if(action === 'IN') {
            obj[number] = time;
        } else {
            let parkingTime = getTime(obj[number], time);
            delete obj[number];
            timeObj[number] ? timeObj[number] += parkingTime : timeObj[number] = parkingTime;

        }
    }

    for (let [number,time] of Object.entries(obj)){
        let parkingTime = getTime(time, '23:59');
        timeObj[number] ? timeObj[number] += parkingTime : timeObj[number] = parkingTime;
    }

    let timeArr = Object.entries(timeObj).sort((a,b) => a[0]-b[0]);
    let answer = [];

    // 기본시간 / 기본요금 / 단위시간 / 단위요금
    const [bt, bm, ut, um] = fees

    for(let item of timeArr) {
        let [number, time] = item;
        if(time <= bt) {
            answer.push(bm)
        } else {
            time -= bt;
            time = Math.ceil(time/ut);
            answer.push(bm + time*um);
        }
    }

    return answer;
}
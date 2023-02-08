function solution(s) {
    let zero = 0;
    let count = 0;
    while(s !== '1') {
        s = s.split('').filter(x => {
            if(x === '1') return true;
            else {
                zero++;
                return false;
            }
        });
        let length = s.length;
        s = length.toString(2)
        count++
    }
    return [count, zero]
}
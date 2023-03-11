function solution(s, n) {
    let lower = 'abcdefghijklmnopqrstuvwxyz';
    let upper = lower.toUpperCase();
    
    s = s.split('');
    let result = [];
    for(let item of s) {
        let length = 25;
        if(lower.includes(item)) {
            let idx = lower.indexOf(item);
            idx + n > length ? result.push(lower[idx+n-length-1]) : result.push(lower[idx+n]);
        } else if(upper.includes(item)) {
            let idx = upper.indexOf(item);
            idx + n > length ? result.push(upper[idx+n-length-1]) : result.push(upper[idx+n]);
        } else {
            result.push(item)
        }
    }
    
    return result.join('')
}
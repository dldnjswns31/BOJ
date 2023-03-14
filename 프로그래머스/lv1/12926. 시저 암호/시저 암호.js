function solution(s, n) {
    // 소문자 대문자 문자열
    let lower = 'abcdefghijklmnopqrstuvwxyz';
    let upper = lower.toUpperCase();
    
    // 주어진 문자를 배열로 변환
    // ABC
    // [A,B,C]
    s = s.split('');
    
    // 정답 문자열을 담을 배열
    let result = [];
    
    // 배열 순회
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
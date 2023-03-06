function solution(s) {
    s = s.split('').map(str => {
        if(str === "{") {
            return "["
        } else if (str === "}") {
            return "]"
        } else {
            return str;
        }
    })
    
    s = JSON.parse(s.join('')).sort((a,b) => a.length - b.length);
    
    let map = new Map();
    s.forEach(item => {
        item.forEach(str => {
            if(map.has(str)) return;
            map.set(str, true);
        })
    })
    
    let answer = [];
    map.forEach((v, k) => {
        answer.push(k);
    })
    
    return answer;
    
}
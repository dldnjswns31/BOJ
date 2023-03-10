function solution(topping) {
    let obj = {};
    let objSize = 0;
    for(let item of topping) {
        // obj[item] ? obj[item] += 1 : obj[item] = 1;
        if(obj[item]) {
            obj[item] += 1;
        } else {
            obj[item] = 1;
            objSize++;
        }
    }
    let set = new Set;
    let answer = 0;
    for(let item of topping) {
        set.add(item);
        // obj[item] !== 1 ? obj[item] -= 1 : delete obj[item];
        if(obj[item] !== 1) {
            obj[item] -= 1;
        } else {
            delete obj[item]
            objSize--;
        }
        if(objSize === set.size) answer++;
    }
    
    return answer;
}
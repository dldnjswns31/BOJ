function solution(my_string) {
    let answer = 0;
    for(let item of my_string) {
        if(!isNaN(item)) {
            answer += Number(item);
        }
    }
    return answer;
}
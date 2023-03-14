function solution(d, budget) {
    let answer = 0;
    let sorted_arr = d.sort((a,b) => a-b);
    
    let sum = 0;
    
    for(let i=0; i<sorted_arr.length; i++){
        if(sum + sorted_arr[i] <= budget) {
            sum += sorted_arr[i]
            answer++
        } else {
            break;
        }
    }
    
    return answer;
}
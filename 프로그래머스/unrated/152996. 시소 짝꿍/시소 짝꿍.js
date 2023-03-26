function solution(weights) {
    weights = weights.sort((a,b) => a-b);
    let answer=0;
    let opers = [1,2/3,3/4,1/2]
    let twin = {};
    
    for(let weight of weights) {
        for(let oper of opers) {
            if(twin[weight*oper]) {
                answer += twin[weight*oper];   
            }
        }
        
        if(!twin[weight]) twin[weight] = 1;
        else twin[weight]++;
    }
    
    return answer;    
}

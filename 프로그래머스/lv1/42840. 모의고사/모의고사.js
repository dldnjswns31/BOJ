function solution(answers) {
    let first = [1,2,3,4,5];
    let second = [2,1,2,3,2,4,2,5];
    let third = [3,3,1,1,2,2,4,4,5,5];
    
    let count = new Array(3).fill(0);
    
    for(let i=0; i<answers.length; i++) {
        if(answers[i] === first[i%first.length]) count[0]++;
        if(answers[i] === second[i%second.length]) count[1]++;
        if(answers[i] === third[i%third.length]) count[2]++;
    }
    
    let max_count = Math.max(...count);
    let answer = [];
    count.forEach((v,i) => {
        if(v === max_count) answer.push(i+1);
    })
    
    return answer;
}
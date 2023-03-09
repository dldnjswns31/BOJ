function solution(n,a,b) {
    let answer = 1;
    while(1){
        if(Math.ceil(a/2) === Math.ceil(b/2) && Math.abs(a-b) === 1) return answer;
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        answer++;
    }
}
function solution(n) {
    // 슬라이딩 윈도우
    if(n === 1) return 1;
    
    // 해당 숫자+1만큼 채워진 배열 생성
    const arr = new Array(n+1).fill((_,idx) => idx)
    let start = 1;
    let end = 2;
    let result = 0;
    while(start !== end) {
        let sum = 0;
        for(let i=start; i<=end; i++) {
            sum += i;
        }
        
        if(sum === n) {
            result++;
            end++;
        } else if (sum > n) {
            start++;
        } else {
            end++;
        }
        
//         if(sum === n) result++
//         if(sum > n) start++;
//         else end++;
    }
    
    // 숫자 자기자신 더하기
    return result + 1;
}
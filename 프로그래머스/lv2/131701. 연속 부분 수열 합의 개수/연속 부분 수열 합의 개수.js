function solution(elements) {
    // set 사용
    const set = new Set();
    const length = elements.length
    
    // 부분수열의 길이
    for(let i=0; i<=length; i++) {
        elements.push(elements[i]);
        
        //부분수열의 시작점
        for(let j=0; j<=elements.length-i; j++) {
            //부분수열의 길이 합
            let sum = 0;
            for(let k=j; k<j+i; k++) {
                sum += elements[k];
            }
            // console.log(i, sum);
            set.add(sum);
        }
        // console.log(set);
    }
    return set.size-1
}
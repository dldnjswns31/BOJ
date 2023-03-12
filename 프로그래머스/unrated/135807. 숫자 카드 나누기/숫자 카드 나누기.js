function solution(arrayA, arrayB) {
    arrayA = arrayA.sort((a,b) => a-b);
    arrayB = arrayB.sort((a,b) => a-b);

    let aNum = 0;
    // 1번 조건 arrayA가 다 나눠지고 arrayB는 다 나눠지지 않을 때
    for(let i=arrayA[0]; i>1; i--) {
        if(arrayA.every(item => item % i === 0) && !arrayB.some(item => item % i === 0)) {
            aNum = i
            break;
        }
    }
    
    let bNum = 0;
    // 2번 조건 arrayB가 다 나눠지고 arrayA는 다 나눠지지 않을 때
    for(let i=arrayB[0]; i>1; i--) {
        if(arrayB.every(item => item % i === 0) && !arrayA.some(item => item % i === 0)) {
            bNum = i
            break;
        }
    }
    
    return Math.max(aNum, bNum);
}
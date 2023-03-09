function solution(n) {
    let num1 = n.toString(2).split('').filter(item => item === '1').length;
    
    while(1) {
        n++;
        let num2 = n.toString(2).split('').filter(item => item === '1').length;
        if(num1 === num2) return n;
    }
}
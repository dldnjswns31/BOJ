function solution(arr) {
    const LCM = (a,b) => {
        let lcm = 1;
        while(1) {
            if(lcm%a === 0 && lcm%b === 0) {
                break;
            }
            lcm++;
        }
        return lcm;
    }
    
    let result = 1;
    
    for(let i=0; i<arr.length; i++) {
        result = LCM(result, arr[i])
    }
    
    return result;
}
function solution(want, number, discount) {
    let obj = {};
    
    for(let i=0; i<want.length; i++) {
        obj[want[i]] = number[i];
    }
    
    let result = 0;
    for(let i=0; i<=discount.length-10; i++) {
        let newObj = {...obj}
        for(let j=i; j<i+10; j++) {
            let item = discount[j];
            // item이 사고 싶은 목록에 없다면 즉시 순회 종료
            if(!newObj[item]) break;
            
            newObj[item] !== 1 ? newObj[item] -= 1 : delete newObj[item]
        }
        
        if(!Object.keys(newObj).length) result++;
    }
    
    return result;
}
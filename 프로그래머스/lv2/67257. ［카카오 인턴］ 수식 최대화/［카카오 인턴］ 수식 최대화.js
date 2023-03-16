function solution(expression) {
    const getPermutation = (arr, selectedNum) => {
        if(selectedNum === 1) return arr.map(item => [item]);
        
        const result = [];
        arr.forEach((fixed,index,origin) => {
            const rest = [...origin.slice(0,index), ...origin.slice(index+1)]
            const permutations = getPermutation(rest, selectedNum-1);
            const attached = permutations.map(item => [fixed, ...item])
            result.push(...attached);
        })
        
        return result
    }
    
    const operator = getPermutation(["+","-","*"],3)
    const result = []
    for(let op of operator) {
        let arr = expression.split(/(\D)/)
        for(let i=0; i<op.length; i++) {
            for(let j=0; j<arr.length; j++) {
                if(op[i] === arr[j]) {
                    const calc = eval(`${arr[j-1]}${op[i]}${arr[j+1]}`)
                    arr.splice(j-1, 3, calc)
                    j -= 2;
                }
            }
        }
        result.push(Math.abs(arr[0]));
    }
    return Math.max(...result)
}
function solution(orders, course) {
    function getCombinations (arr, selectedNum) {
        if(selectedNum === 1) return arr.map(item => [item])
        
        const result = [];
        arr.forEach((fixed,index,origin) => {
            const rest = origin.slice(index+1);
            const combinations = getCombinations(rest, selectedNum-1)
            const attached = combinations.map(item => [fixed, ...item])
            result.push(...attached);
        })
        return result;
    }
    
    let result = [];
    
    for(let num of course) {
        let obj = new Map();
        for(let order of orders) {
            if(order.length < num) continue;
            const combinations = getCombinations(order.split(''), num).map(item => item.sort().join(''));
            combinations.forEach(item => {
                obj.has(item) ? obj.set(item, obj.get(item) + 1) : obj.set(item, 1)
            })
        }
        if(obj.size === 0) continue;
        
        
        const max = Math.max(...obj.values())

        if(max === 1) {
            continue;
        } else {
            let keys = obj.keys();
            
            for(let key of keys) {
                if(obj.get(key) === max) result.push(key);
            }
        }
    }
    
    return result.sort();
}
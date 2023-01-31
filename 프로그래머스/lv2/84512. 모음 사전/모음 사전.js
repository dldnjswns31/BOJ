function solution(word) {
    let aeiou = 'AEIOU';
    let collection = new Set();
    
    function recursion (idx, str) {
        if(!idx) {
            collection.add(str);
            return;
        }
        
        for(let i=0; i<6; i++) {
            if(i===5) recursion(idx-1, str)
            else {
                recursion(idx-1, str+aeiou[i])
            }
        }
    }
    
    recursion(5, '')
    collection = [...collection].sort();
    return collection.indexOf(word)
}
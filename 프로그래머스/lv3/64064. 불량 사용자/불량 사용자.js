function solution(user_id, banned_id) {
    // 모든 경우의 수 확인해야하므로 순열로 접근
    const getPermutations = (arr, selectedNum) => {
        if(selectedNum === 1) return arr.map(item => [item]);
        const result = [];
        
        arr.forEach((fixed, index, origin) => {
            const rest = [...origin.slice(0, index), ...origin.slice(index+1)];
            const permutations = getPermutations(rest, selectedNum-1);
            const attached = permutations.map(item => [fixed, ...item])
            result.push(...attached);
        })
        
        return result
    }
    
    const checkId = (uid,bid) => {
        uid = uid.sort((a,b) => a.length - b.length);
        bid = bid.sort((a,b) => a.length - b.length);
        
        // 1. 길이 다르면 false
        // 2. 문자 다르되 '*'가 아니면 false
        
        for(let i=0; i<uid.length; i++) {
            if(uid[i].length !== bid[i].length) return false;
            
            for(let j=0; j<uid[i].length; j++) {
                if(uid[i][j] !== bid[i][j] && bid[i][j] !== '*') return false;
            }
        }
        return true;
    }
    
    const permutations = getPermutations(user_id, banned_id.length)
    const filterUser = permutations.filter((item) => checkId(item, banned_id));
    
    // 중복 제거위해 정렬 후 하나의 문자열로 압축.
    // 그 후 Set에 저장
    
    const bannedUser = [...new Set(filterUser.map(item => item.sort().join(' ')))]
    return bannedUser.length
}
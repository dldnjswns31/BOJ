function solution(begin, target, words) {
    if(!words.includes(target)) return 0;
    let length = words.length;
    let count_arr = [];
    
    function dfs (word, count, check) {
        for(let i=0; i<length; i++) {
            if(compare(word,words[i]) && !check[i]) {
                if(words[i] === target) {
                    count_arr.push(++count);
                    break;
                }
                check[i] = true;
                dfs(words[i], count+1, [...check]);
            }
        }
    }
    
    for(let i=0; i<length; i++) {
        let check = new Array(length).fill(false);
        dfs(begin,0,check);
    }
    
    return Math.min(...count_arr);
}

function compare(str1, str2) {
    const length = str1.length;
    let count = 0;
    for(let i=0; i<length; i++) {
        if(str1[i] !== str2[i]) count++;
    }
    
    return count === 1 ? true : false;
}
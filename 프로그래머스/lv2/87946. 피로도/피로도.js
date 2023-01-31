function solution(k, dungeons) {
    let t_arr = [];
    function p (arr, temp_arr) {
        if(!arr.length) {
            t_arr.push(temp_arr);
            return;
        }
        
        for(let i=0; i<arr.length; i++) {
            let copy_arr = [...arr];
            let new_temp_arr = [...temp_arr];
            
            new_temp_arr.push(...copy_arr.splice(i,1));
            p(copy_arr, [...new_temp_arr])
        }
    }
    
    p(dungeons, []);
    
    let answer = new Set();
    
    for(let item of t_arr) {
        let copy_k = k;
        let count = 0;
        for(let item2 of item) {
            let [req, consum] = item2;
            if(copy_k >= req) {
                copy_k -= consum;
                count++
            } else {
                break;
            }
        }
        answer.add(count);
    }
    
    return Math.max(...answer);
}
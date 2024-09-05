function solution(sequence, k) {
    // sliding window?
    
    let left = 0, right = 0;
    let sum = sequence[0];
    let result = [0, sequence.length - 1];
    
    while(right < sequence.length) {
        if(sum === k) {
            if(right - left < result[1] - result[0]) {
                result = [left, right]
            }
            sum -= sequence[left];
            left++;
        } else if (sum < k) {
            right++;
            if(right < sequence.length) {
                sum += sequence[right];
            }
        } else {
            sum -= sequence[left];
            left++;
        }
    }
    
    return result;
}
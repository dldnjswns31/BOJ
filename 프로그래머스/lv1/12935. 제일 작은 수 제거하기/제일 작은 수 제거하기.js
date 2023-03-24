function solution(arr) {
    const min = Math.min(...arr);
    arr = arr.filter(item => item !== min);
    
    return arr.length ? arr : [-1]
}
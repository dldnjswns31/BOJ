function solution(sizes) {
    let width = sizes.map(item => Math.max(...item))
    let height = sizes.map(item => Math.min(...item))
    
    return Math.max(...width) * Math.max(...height)
}
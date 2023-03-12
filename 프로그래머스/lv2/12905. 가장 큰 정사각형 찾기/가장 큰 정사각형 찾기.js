function solution(board) {
    // dp로 접근
    const length = board.length
    const length2 = board[0].length;
    let max = 0;
    
    if(board.length === 1) return Math.max(...board[0])
    
    for(let i=1; i<length; i++) {
        for(let j=1; j<length2; j++) {
            if(board[i][j] === 0) continue;
            let num = Math.min(board[i][j-1], board[i-1][j], board[i-1][j-1])+1;
            board[i][j] = num;
            num > max ? max = num : null;
        }
    }
    
    return max**2
}
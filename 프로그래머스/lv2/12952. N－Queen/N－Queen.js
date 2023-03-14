function solution(n) {
    // 백트래킹
    let answer = 0;
    
    // 다음 가로줄의 각 세로줄마다 queen 놓을 수 있는 지 확인.
    // 놓을 수 있으면 다시 dfs 실행
    // 없으면 dfs 중단 (가지치기)
    const dfs = (board, row) => {
        if(row === n) answer++
        else {
            for(let i=1; i<=n; i++) {
                board[row+1] = i;
                if(varidationCheck(board, row+1)) dfs(board,row+1);
            }
        }
    }
    
    const varidationCheck = (board, row) => {
        for(let i=1; i<row; i++) {
            // 가로 세로 겹치는지 확인
            if(board[i] === board[row]) return false;
            // 대각선 겹치는지 확인 (두 말의 가로 길이 차와 세로 길이 차가 같다면 대각선 겹침)
            if(Math.abs(board[i] - board[row]) === Math.abs(i-row)) return false;
        }
        return true;
    }
    
    
    for(let i=1; i<=n; i++) {
        // 1차원 배열로 2차원 배열 나타냄
        // 배열의 index는 가로줄 번호
        // 배열의 item은 세로줄 번호
        // 첫번째 가로줄의 각 세로줄 마다 말을 놓고 백트래킹 시작
        const board = new Array(n+1).fill(0);
        board[1] = i;
        dfs(board, 1)
    }
    
    return answer;
}
function solution(players, callings) {
    const ranking = {};
    const player = {};
    
    players.forEach((item, idx) => {
        ranking[idx] = item;
        player[item] = idx;
        
    })
    
    callings.forEach((p, idx) => {
        const currentRanking = player[p];
        const frontPlayer = ranking[currentRanking-1];
        
        ranking[currentRanking-1] = p;
        ranking[currentRanking] = frontPlayer;
        
        player[p] = currentRanking-1;
        player[frontPlayer] = currentRanking
    })
    
    const answer = Object.values(ranking);
    
    return answer;
}
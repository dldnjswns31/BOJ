// DP
function solution(info, n, m) {
    const maxBTrace = m;
    
    let dp = Array(maxBTrace).fill(Infinity);
    dp[0] = 0;

    for (const [aTrace, bTrace] of info) {
        const nextDp = Array(maxBTrace).fill(Infinity);

        for (let b = 0; b < maxBTrace; b++) {
            if (dp[b] === Infinity) continue;
            
            // A
            const newATrace = dp[b] + aTrace;
            if (newATrace < n) {
                nextDp[b] = Math.min(nextDp[b], newATrace);
            }

            // B
            const newBTrace = b + bTrace;
            if (newBTrace < m) {
                nextDp[newBTrace] = Math.min(nextDp[newBTrace], dp[b]);
            }
        }

        dp = nextDp; 
    }

    const result = Math.min(...dp);
    return result !== Infinity ? result : -1;
}
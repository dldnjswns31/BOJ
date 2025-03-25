function solution(n, q, ans) {
    let validCount = 0;

    function isValid(secret) {
        for (let i = 0; i < q.length; i++) {
            let count = q[i].filter(num => secret.has(num)).length;
            if (count !== ans[i]) return false;
        }
        return true;
    }

    function backtrack(start, secret) {
        if (secret.size === 5) {
            if (isValid(secret)) validCount++;
            return;
        }

        for (let i = start; i <= n; i++) {
            secret.add(i);
            backtrack(i + 1, secret);
            secret.delete(i);
        }
    }

    backtrack(1, new Set());
    return validCount;
    
}
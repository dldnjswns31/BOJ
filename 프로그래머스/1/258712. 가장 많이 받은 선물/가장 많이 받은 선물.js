function solution(friends, gifts) {
    const n = friends.length;
    const giftMap = new Map();
    const giftCount = Array(n).fill(0).map(() => Array(n).fill(0));
    const indexMap = new Map(friends.map((name, idx) => [name, idx]));

    // 주고받은 선물 기록 저장
    gifts.forEach(log => {
        const [giver, receiver] = log.split(" ");
        const giverIdx = indexMap.get(giver);
        const receiverIdx = indexMap.get(receiver);
        giftCount[giverIdx][receiverIdx] += 1;
    });

    // 각 친구별 선물 지수 계산
    const giftScore = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        let given = 0, received = 0;
        for (let j = 0; j < n; j++) {
            given += giftCount[i][j];
            received += giftCount[j][i];
        }
        giftScore[i] = given - received;
    }

    // 다음 달 받을 선물 계산
    const receiveCount = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (giftCount[i][j] > giftCount[j][i]) {
                receiveCount[i] += 1;
            } else if (giftCount[i][j] < giftCount[j][i]) {
                receiveCount[j] += 1;
            } else {
                if (giftScore[i] > giftScore[j]) {
                    receiveCount[i] += 1;
                } else if (giftScore[i] < giftScore[j]) {
                    receiveCount[j] += 1;
                }
            }
        }
    }

    return Math.max(...receiveCount);
}
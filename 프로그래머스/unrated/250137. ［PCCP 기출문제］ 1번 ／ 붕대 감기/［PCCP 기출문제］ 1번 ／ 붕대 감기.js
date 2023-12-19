function solution(bandage, health, attacks) {
    let time = 0;
    let currentHp = health;
    let continuity = 0;
    
    while(attacks.length) {
        time++
        
        // 공격 체크
        if(time === attacks[0][0]) {
            const [t,d] = attacks.shift();
            currentHp -= d;
            continuity = 0;
            
            // 공격당했다면 체력 체크
            if(currentHp <= 0) return -1;
        } else {
            // 붕대 체크
            let [casting, hps, bonus] = bandage;
            currentHp += hps;
            continuity++;
        
            // 보너스 회복량 체크
            if(continuity === casting) {
                currentHp += bonus;
                continuity = 0;
            }
        
            // 최대 체력 체크
            if(currentHp > health) currentHp = health;
        }
        
        console.log(currentHp);
    }
    
    return currentHp;
}
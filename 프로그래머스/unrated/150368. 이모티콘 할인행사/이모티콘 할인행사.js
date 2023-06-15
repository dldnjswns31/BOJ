function solution(users, emoticons) {
    // 할인율 배열 다 만들기
    const DISCOUNT = [10,20,30,40]
    const discountArr = [];
    
    const recursive = (arr, num) => {
        if(num === 0) {
            discountArr.push(arr);
            return
        }
        
        for(let discount of DISCOUNT) {
            recursive([...arr,discount], num-1);
        }
    }
    
    recursive([],emoticons.length);
    
    let resultArr = [0,0]
    let tempArr = [];
    
    // 모든 할인배율 배열 탐색
    for(let discount of discountArr) {
        // 할인된 이모티콘 가격 배열
        // const emoticonsDC = emoticons.map((item,idx) => item * (100-discount[idx]) / 100);
        let money=0;
        let signUp=0;
        // 유저 마다 이모티콘 살지 안살지 탐색
        for(let i=0; i<users.length; i++) {
            const [userDC, userMoney] = users[i];
            let userBuy = 0;
            // 유저가 원하는 할인율과 이모티콘 할인율 비교 및 구매
            for(let i=0; i<discount.length; i++) {
                // 할인율이 유저 할인율 이상 높다면 구매
                // 여기서 문제
                if(discount[i] >= userDC) {
                    userBuy += emoticons[i] * (100-discount[i]) / 100;
                }
            }
            
            if(userBuy >= userMoney) signUp++
            else money += userBuy;
        }
        
        
        if(resultArr[0] < signUp || (resultArr[0] === signUp && resultArr[1] < money)) {
            resultArr = [signUp, money];
            tempArr.push([signUp,money])
        }
    }
    
    return resultArr;

}
function solution(msg) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const obj = {}
    for(let i=0; i<alphabet.length; i++) {
        obj[alphabet[i]] = i+1;
    }
    
    let string = '';
    // 다음 색인 번호
    let index = 27;
    // 문자열 시작 위치
    let startIndex = 0;
    let answer = [];
    
    while(startIndex < msg.length) {
        for(let i=startIndex; i<msg.length; i++) {
            // 해시에 이전문자 + 현재문자 등록이 되어있을때
            if(obj[string + msg[i]]) {
                string += msg[i];
                startIndex++;
            } else {
                answer.push(obj[string]);
                obj[string+msg[i]] = index;
                index++;
                string = '';
                break;
            }
        }
    }
    
    if(string) answer.push(obj[string])
    return answer;
}
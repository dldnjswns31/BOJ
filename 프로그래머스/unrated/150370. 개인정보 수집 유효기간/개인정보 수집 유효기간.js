function solution(today, terms, privacies) {
    // 한달 28일
    // 1년 336일
    const Y = 336;
    const M = 28;
    today = today.split('.').map(Number)
    
    const dayConverter = (arr) => {
        const [year, month, day] = arr;
        
        return (year-2000)*Y + month*M + day;
    }
    
    const todayToDay = dayConverter(today);
    
    const termsToDay = {};
    for(let term of terms) {
        const [type, month] = term.split(' ').map(item =>{
            if(typeof item === 'number') return Number(item);
            return item;
        })
        
        termsToDay[type] = month*28;
    }
    
    let answer = [];
    let idx = 1;
    
    for(let privacy of privacies) {
        const [date, type] = privacy.split(' ');
        const dateArr = date.split('.').map(Number);
        const dateToDay = dayConverter(dateArr);
        
        // 시작날짜 + 정보보호기간 < 오늘날짜 라면 파기
        if(dateToDay + termsToDay[type] <= todayToDay) {
            answer.push(idx);
        }
        
        idx++;
    }
    
    return answer;
}
function solution(records) {
    const names = {};
    const actions = [];
    
    for(let record of records) {
        let [action, id, name] = record.split(' ');
        if(action === 'Change') {
            names[id] = name;
            continue;
        }
        actions.push([action, id]);
        
        if(action === 'Enter') {
            names[id] = name;   
        }
    }
    
    const answer = [];
    for(let item of actions) {
        let [action, id] = item;
        if(action === 'Enter') {
            answer.push(`${names[id]}님이 들어왔습니다.`)
        } else {
            answer.push(`${names[id]}님이 나갔습니다.`)
        }
    }
    
    return answer;
}
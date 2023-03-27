function solution(s) {
    s = s.split(' ');
    for(let i=0; i<s.length; i++) {
        let copy = s[i].split('');
        
        for(let j=0; j<copy.length; j++) {
            if(j % 2 === 0) {
                copy[j] = copy[j].toUpperCase();
            } else {
                copy[j] = copy[j].toLowerCase();
            }
        }
        
        s[i] = copy.join('');
    }
    
    return s.join(' ')
}
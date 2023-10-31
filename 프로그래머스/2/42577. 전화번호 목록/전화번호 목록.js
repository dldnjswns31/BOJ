function solution(phone_book) {
    const sortArr = phone_book.sort();
    
    for(let i=0; i<sortArr.length-1; i++){
        if(sortArr[i+1].startsWith(sortArr[i])) return false;
    }
    
    return true;
}
function solution(book_time) {
    const getTime = (arr) => {
        let [hotelIn,hotelOut] = arr;
        
        hotelIn = hotelIn.split(':').map(Number);
        hotelOut = hotelOut.split(':').map(Number);
        
        return [hotelIn[0]*60 + hotelIn[1], hotelOut[0]*60 + hotelOut[1]];
    }
    
    book_time = book_time.map(getTime).sort((a,b) => a[0]-b[0])
    const rooms = [];
    
    for(let item of book_time) {
        let [hotelIn, hotelOut] = item;
        
        if(!rooms.length) {
            rooms.push(hotelOut+10);
            continue;
        }
        
        let isChange = false;
        for(let i=0; i<rooms.length; i++) {
            if(rooms[i] <= hotelIn) {
                rooms[i] = hotelOut+10;
                isChange = true;
                break;
            }
        }
        
        if(!isChange) rooms.push(hotelOut+10);
    }
    return rooms.length;
}
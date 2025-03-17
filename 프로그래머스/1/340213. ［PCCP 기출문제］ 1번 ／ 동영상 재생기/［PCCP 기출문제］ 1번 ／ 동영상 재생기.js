function solution(video_len, pos, op_start, op_end, commands) {
    const formatting = (time) => {
        if(typeof time === 'string') {
            const [minute, second] = time.split(':').map(Number);
        
            return (minute * 60) + second;    
        } else {
            const minute = parseInt(time / 60);
            const second = time % 60;
            
            return `${String(minute).padStart(2,"0")}:${String(second).padStart(2,"0")}`
        }
    }
    
    video_len = formatting(video_len);
    pos = formatting(pos);
    op_start = formatting(op_start);
    op_end = formatting(op_end);
    
    commands.forEach(command => {
        
        if(pos >= op_start && pos <= op_end) {
             pos = op_end;
        }
        
        switch(command) {
            case 'next':
                pos += 10;
                
                if(pos > video_len) {
                    pos = video_len;
                }
                break;
            case 'prev':
                pos -= 10;
                
                if(pos < 0) {
                    pos = 0;
                }
                
                break;
            default:
                break;
        }
        
        if(pos >= op_start && pos <= op_end) {
             pos = op_end;
        }
    })
    
    return formatting(pos);
}
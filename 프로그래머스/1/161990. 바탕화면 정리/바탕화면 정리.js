function solution(wallpaper) {
    const arr = [];
    let nw = [Infinity, Infinity];
    let se = [-Infinity, -Infinity];
    
    // 우측 아래 꼭지점은 1씩 더해줘야함
    
    wallpaper.forEach(item => {
        arr.push(item.split(''));
    })
    
    arr.forEach((height, h) => {
        height.forEach((width, w) => {
            if(arr[h][w] === '#') {
                if(h < nw[0]) nw[0] = h;
                if(w < nw[1]) nw[1] = w;
                if(h > se[0]) se[0] = h;
                if(w > se[1]) se[1] = w;
            }
        })
    })
    
    return [nw[0], nw[1], se[0]+1, se[1]+1];
}
function solution(cacheSize, cities) {
    let count = 0;
    let cache = [];
    
    if(cacheSize === 0) {
        return cities.length * 5
    }
    
    for(let city of cities) {
        city = city.toLowerCase();
        if(cache.includes(city)) {
            let idx = cache.indexOf(city);
            cache.splice(idx,1);
            cache.push(city);
            count++;
        } else {
            if(cache.length < cacheSize) {
                cache.push(city);
            } else {
                cache.shift();
                cache.push(city);
            }
            count += 5;
        }
    }
    
    return count;
}
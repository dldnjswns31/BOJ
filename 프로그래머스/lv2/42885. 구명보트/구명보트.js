function solution(people, limit) {
    // 2명까지 태워서 보내되, 최대 무게까지 꽉 채워야댐
    // 정렬한 뒤 맨앞 사람 + 뒤부터 체크했을 때 100을 안넘는 사람
    // 100을 넘으면 어차피 태울사람 없는데 보트 하나에 보내자
    people = people.sort((a,b) => a-b);
    
    let boat = 0;
    let left = 0;
    let right = people.length - 1;
    
    while(left<right) {
        let sum = people[left] + people[right];
        if(sum > limit) {
            right--;
        } else {
            left++;
            right--;
        }
        boat++;
    }
    if(left === right) boat++;
    
    return boat;
}
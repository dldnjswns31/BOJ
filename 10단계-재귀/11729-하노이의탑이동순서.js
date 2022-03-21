const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());

// 3번 원반을 C로 옮기기 위해서는 1번, 2번 원반을 B로 옮겨야한다. 이것은 2개짜리 하노이 탑이다. (C를 경유하여 B로 이동. A to B via C)
// 그 후 3번 원반을 C로 옮긴다. (move)
// B로 옮겼던 1번, 2번 원반을 다시 C로 옮긴다. 이것도 2개짜리 하노이 탑이다. (A를 경유하여 C로 이동. B to C via A)
// 3개짜리 하노이 탑은 이렇게 쪼갤 수 있다.

let count = 0;
let str = "";
function Hanoi(n, start, to, via) {
  if (n === 1) {
    move(1, start, to);
  } else {
    Hanoi(n - 1, start, via, to);
    move(n, start, to);
    Hanoi(n - 1, via, to, start);
  }
}

function move(n, start, to) {
  str += `${start} ${to}\n`;
  count++;
}

Hanoi(input, 1, 3, 2);
str = str.trim();
console.log(count);
console.log(str);

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const test_num = Number(input.shift());

function getMax(queue) {
  let max = 0;
  queue.forEach((item) => {
    max = Math.max(item[0], max);
  });
  return max;
}

for (let i = 0; i < test_num; i++) {
  let [length, goal_idx] = input[i * 2].split(" ").map((item) => Number(item));
  const arr = input[i * 2 + 1].split(" ").map((item) => Number(item));
  const goal_num = Number(arr[goal_idx]);
  let cnt = 0;
  const queue = new Array(length).fill("").map((item, idx) => {
    return [arr[idx], idx === goal_idx ? true : false];
  });
  let max = 0;
  max = getMax(queue);

  if (length === 1) {
    console.log(1);
    continue;
  }

  while (1) {
    const firstEl = queue.shift();
    // 중요도가 높은 문서가 남아있을 때
    if (max !== goal_num) {
      // 중요도가 가장 높은 문서가 shift 됐을때
      if (max === firstEl[0]) {
        cnt++;
        max = getMax(queue);
      }
      // 중요도가 낮은 문서가 shift 됐을때 => 다시 queue에 저장
      else {
        queue.push(firstEl);
      }
    }
    // 목표 문서보다 중요도가 높은 문서가 없을 때
    else {
      if (firstEl[1]) {
        cnt++;
        console.log(cnt);
        break;
      } else {
        if (firstEl[0] === max) {
          cnt++;
        } else {
          queue.push(firstEl);
        }
      }
    }
  }
}

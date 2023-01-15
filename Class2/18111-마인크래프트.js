const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, M, B] = input
  .shift()
  .split(" ")
  .map((item) => Number(item));

let blocks = input.map((item) => item.split(" ").map((block) => Number(block)));

// [시간, 최고층]
let answer = [Infinity, -1];

// 현재 층
for (let i = 0; i <= 256; i++) {
  let inventory = 0;
  let remove_blocks = 0;

  // 가로
  for (let j = 0; j < N; j++) {
    // 세로
    for (let k = 0; k < M; k++) {
      // 현재 층과 비교해서 음수면 낮은층 양수면 높은층
      let current_height = blocks[j][k] - i;
      // 음수면 낮은만큼 인벤토리에서 블록을 꺼내 채워줘야 함. 이 갯수를 메모해둠.
      if (current_height < 0) inventory -= current_height;
      // 양수면 높은만큼 블록을 제거해줘야 됨.
      else remove_blocks += current_height;
    }
  }

  // 제거한 블록과 원래 가지고있던 블록의 양이 메모한 블록의 양보다 클 때
  if (remove_blocks + B >= inventory) {
    // 제거한 블록들의 시간과 채워야하는 블록들의 시간을 계산
    let time = 2 * remove_blocks + inventory;
    // 걸리는 시간의 최소시간과 최대층을 기록
    if (answer[0] >= time) {
      answer[0] = time;
      answer[1] = i;
    }
  }
}

console.log(answer[0], answer[1]);

// let blocks = input
//   .map((item) => item.split(" ").map((block) => Number(block)))
//   .flat();

// let total = 0;

// while (1) {
//   let max = Math.max(...blocks);

//   if (blocks.every((item) => item === max)) {
//     console.log(`${total} ${max}`);
//     break;
//   }

//   let fill_count = 0;
//   for (let i of blocks) {
//     fill_count += max - i;
//   }

//   if (inventory >= fill_count) {
//     // 파는/채우는 시간 비교 해야됨
//     let dig_time = 0;

//     blocks.forEach((item) => {
//       if (item === max) {
//         dig_time += 2;
//       }
//     });
//     if (fill_count <= dig_time) {
//       total += fill_count;
//       console.log(`${total} ${max}`);
//       break;
//     }
//   }
//   blocks = blocks.map((item) => {
//     if (item === max) {
//       total += 2;
//       inventory++;
//       return item - 1;
//     } else {
//       return item;
//     }
//   });
// }

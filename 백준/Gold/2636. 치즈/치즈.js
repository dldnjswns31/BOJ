const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [H, W] = input.shift().split(" ").map(Number);
let cheeseMap = [];
for (let item of input) {
  cheeseMap.push(item.split(" ").map(Number));
}

const move = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
let cheeseNum = 0;
cheeseMap.map((item) => item.map((item2) => (cheeseNum += item2)));
let time = 0;

while (1) {
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (i === 0 || i === H - 1 || j === 0 || j === W - 1) {
        if (cheeseMap[i][j] === 0) {
          cheeseMap[i][j] = false;
          dfs(i, j);
        }
      }
    }
  }

  let meltedCheese = 0;

  cheeseMap = cheeseMap.map((item) =>
    item.map((item2) => {
      if (item2 === false) item2 = 0;
      else if (item2 === "M") {
        item2 = 0;
        meltedCheese++;
      }

      return item2;
    })
  );
  time++;

  if (cheeseNum - meltedCheese === 0) {
    console.log(time);
    console.log(cheeseNum);
    break;
  } else {
    cheeseNum -= meltedCheese;
  }
}

function dfs(y, x) {
  for (let mv of move) {
    const [nextY, nextX] = [y + mv[1], x + mv[0]];
    // 범위 체크
    if (nextY < 0 || nextY >= H || nextX < 0 || nextX >= W) continue;
    // 조건 체크
    if (cheeseMap[nextY][nextX] === false) continue;
    if (cheeseMap[nextY][nextX] === 1) {
      cheeseMap[nextY][nextX] = "M";
    } else if (cheeseMap[nextY][nextX] === 0) {
      cheeseMap[nextY][nextX] = false;
      dfs(nextY, nextX);
    }
  }
}

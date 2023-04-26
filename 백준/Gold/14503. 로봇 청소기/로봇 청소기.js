const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const position = input.shift().split(" ").map(Number);
const map = input.map((item) => item.split(" ").map(Number));

// 1: 벽 / 0: 청소되지 않은 빈칸
// 현재 칸이 아직 청소되지 않은 경우, 현재 칸을 청소한다.
// 현재 칸의 주변 4칸 중 청소되지 않은 빈 칸이 없는 경우,
// 바라보는 방향을 유지한 채로 한 칸 후진할 수 있다면 한 칸 후진하고 1번으로 돌아간다.
// 바라보는 방향의 뒤쪽 칸이 벽이라 후진할 수 없다면 작동을 멈춘다.
// 현재 칸의 주변
// 4칸 중 청소되지 않은 빈 칸이 있는 경우,
// 반시계 방향으로 90도 회전한다.
// 바라보는 방향을 기준으로 앞쪽 칸이 청소되지 않은 빈 칸인 경우 한 칸 전진한다.
// 1번으로 돌아간다.

// 0:북 / 1:동 / 2:남 / 3:서
const move = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

function dfs(pos) {
  const [y, x, head] = pos;
  let isClear = true;

  // 주변 4칸 중 청소되지 않은 빈 칸이 없는 경우
  for (let mv of move) {
    const [nextY, nextX] = [y + mv[0], x + mv[1]];

    if (map[nextY][nextX] === 0) {
      isClear = false;
      break;
    }
  }

  if (isClear) {
    const [nextY, nextX] = [y + move[head][0] * -1, x + move[head][1] * -1];

    if (map[nextY][nextX] !== 1) {
      map[nextY][nextX] = 2;
      dfs([nextY, nextX, head]);
    } else {
      return;
    }
  } else {
    const nextHead = (head + 3) % 4;
    const [nextY, nextX] = [y + move[nextHead][0], x + move[nextHead][1]];

    if (map[nextY][nextX] === 0) {
      map[nextY][nextX] = 2;
      dfs([nextY, nextX, nextHead]);
    } else {
      dfs([y, x, nextHead]);
    }
  }
}

map[position[0]][position[1]] = 2;
dfs(position);

let count = 0;
map.forEach((item) =>
  item.forEach((item2) => {
    if (item2 === 2) count++;
  })
);

console.log(count);

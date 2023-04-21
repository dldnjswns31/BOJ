const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const hexagram = input.map((item) => item.split(""));
const alp = [0, ..."ABCDEFGHIJKL".split("")];
const visited = [0, ..."ABCDEFGHIJKL".split("")];
const arr = [];
let isFind = false;

hexagram.forEach((item, idx) =>
  item.forEach((item2, idx2) => {
    if (item2 !== "." && item2 !== "x") {
      const alpIdx = visited.indexOf(item2);
      visited[alpIdx] = 0;
      hexagram[idx][idx2] = alpIdx;
    }

    if (item2 === "x") {
      arr.push([idx, idx2]);
    }
  })
);

function dfs(num) {
  if (num === arr.length) {
    if (check()) {
      const answer = hexagram.map((item) =>
        item.map((item2) => {
          if (item2 !== ".") {
            item2 = alp[item2];
          }
          return item2;
        })
      );
      isFind = true;
      console.log(answer.map((item) => item.join("")).join("\n"));
    }
    return;
  }

  if (isFind) return;

  for (let i = 0; i < visited.length; i++) {
    if (visited[i] !== 0) {
      const alphabet = visited[i];
      hexagram[arr[num][0]][arr[num][1]] = i;
      visited[i] = 0;
      dfs(num + 1);
      hexagram[arr[num][0]][arr[num][1]] = "x";
      visited[i] = alphabet;
    }
  }
}

function check() {
  if (hexagram[0][4] + hexagram[1][3] + hexagram[2][2] + hexagram[3][1] !== 26)
    return false;
  if (hexagram[0][4] + hexagram[1][5] + hexagram[2][6] + hexagram[3][7] !== 26)
    return false;
  if (hexagram[1][1] + hexagram[1][3] + hexagram[1][5] + hexagram[1][7] !== 26)
    return false;
  if (hexagram[1][1] + hexagram[2][2] + hexagram[3][3] + hexagram[4][4] !== 26)
    return false;
  if (hexagram[1][7] + hexagram[2][6] + hexagram[3][5] + hexagram[4][4] !== 26)
    return false;
  if (hexagram[3][1] + hexagram[3][3] + hexagram[3][5] + hexagram[3][7] !== 26)
    return false;
  return true;
}

dfs(0);

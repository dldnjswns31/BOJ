const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());

// 현재 노드에서 연결되어있는 노드들의 그래프(from 기준이 아니라 to 기준)
const graph = new Array(N + 1).fill(0).map((item) => new Array());
// 노드 별 연결되어있는 차수
const indegrees = new Array(N + 1).fill(0);
const buildTime = new Array(N + 1).fill(0);
const result = new Array(N + 1).fill(0);
const queue = new Array();

for (let i = 0; i < N; i++) {
  const building = input[i].split(" ").map(Number);
  building.pop();
  const [time, ...preceding] = building;
  buildTime[i + 1] = time;

  for (let item of preceding) {
    graph[item].push(i + 1);
    indegrees[i + 1]++;
  }
}

for (let i = 1; i < indegrees.length; i++) {
  if (indegrees[i] === 0) {
    queue.push(i);
    result[i] = buildTime[i];
  }
}

while (queue.length) {
  const shiftItem = queue.shift();
  for (let next of graph[shiftItem]) {
    indegrees[next]--;

    if (indegrees[next] === 0) {
      queue.push(next);
    }

    // 같은 차수일 경우 두번 더하는것이 아닌 시간이 오래걸리는거 하나만 더해주면 됨.
    result[next] = Math.max(result[next], result[shiftItem] + buildTime[next]);
  }
}

result.shift();
console.log(result.join("\n"));

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, V, S] = input.shift().split(" ").map(Number);

let nodes = new Array(N + 1).fill(0).map(() => new Array());

for (let i = 0; i < V; i++) {
  let [n1, n2] = input[i].split(" ").map(Number);

  nodes[n1].push(n2);
  nodes[n2].push(n1);
}

nodes = nodes.map((item) => item.sort((a, b) => a - b));

let d_visited = new Array(N + 1).fill(false);
let d_arr = [];
function dfs(cur) {
  if (d_visited[cur]) return;

  d_arr.push(cur);
  d_visited[cur] = true;

  for (let item of nodes[cur]) {
    dfs(item);
  }
}

dfs(S);

let b_visited = new Array(N + 1).fill(false);
let b_arr = [];
let queue = [S];

while (queue.length) {
  let length = queue.length;

  for (let i = 0; i < length; i++) {
    let shift_item = queue.shift();
    if (!b_visited[shift_item]) {
      b_arr.push(shift_item);
      b_visited[shift_item] = true;

      for (let item of nodes[shift_item]) {
        queue.push(item);
      }
    }
  }
}

console.log(d_arr.join(" "));
console.log(b_arr.join(" "));

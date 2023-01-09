const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const test_num = input.shift();

for (let i = 0; i < test_num; i++) {
  const tc = input[i].split(" ").map((item) => Number(item));
  const [x1, y1, r1, x2, y2, r2] = tc;
  const d = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  const r_sum = r1 + r2;
  const r_gap = Math.abs(r1 - r2);
  // 1. 두 원이 두 점에서 만날 때
  if (d > r_gap && d < r_sum) {
    console.log(2);
  }
  // 2. 두 원이 한 점에서 만날 때 (외접)
  // 3. 두 원이 한 점에서 만날 때 (내접)
  else if (d === r_sum || (d === r_gap && d !== 0)) {
    console.log(1);
  }
  // 4. 한 원이 다른 한 원을 포함 할 때
  // 5. 두 원이 만나지 않을 때
  else if (d > r_sum || d < r_gap) {
    console.log(0);
  }
  // 6. 두 원이 같을 때
  else if (d === 0) {
    if (r1 === r2) {
      console.log(-1);
    } else {
      console.log(0);
    }
  }
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(filePath).toString().trim();

const [N,T] = input.split(' ').map(Number);

const money = N*100;

money >= T ? console.log('Yes') : console.log('No')
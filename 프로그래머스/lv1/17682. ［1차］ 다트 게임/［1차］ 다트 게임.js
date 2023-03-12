function solution(dartResult) {
  let result = 0;
  const arr = [];
  let arrItem = "";
  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] === "*" || dartResult[i] === "#") {
      arrItem += dartResult[i];
      arr.push(arrItem);
      arrItem = "";
      continue;
    } else if (isNaN(Number(dartResult[i]))) arrItem += dartResult[i];
    else if (!isNaN(Number(dartResult[i]))) {
      if (arrItem === "" || !isNaN(Number(arrItem.slice(-1))))
        arrItem += dartResult[i];
      else if (arrItem !== "") {
        arr.push(arrItem);
        arrItem = "" + dartResult[i];
      }
    }
    if (i === dartResult.length - 1) {
      arr.push(arrItem);
    }
  }
  let prev = 0;
  arr.forEach((item) => {
    // let score = Number(item[0]),
    //   bonus = item[1];
    // option = item[2];
    let score, bonus, option;
    for (let char of item) {
      if (!isNaN(Number(char))) {
        if (score) score += char;
        else score = char;
      } else if (isNaN(Number(char))) {
        if (char === "#" || char === "*") option = char;
        else bonus = char;
      }
    }
    if (bonus === "S") bonus = 1;
    if (bonus === "D") bonus = 2;
    if (bonus === "T") bonus = 3;

    if (option === "*") {
      result += Math.pow(score, bonus) * 2 + prev;
      prev = Math.pow(score, bonus) * 2;
    } else if (option === "#") {
      result += Math.pow(score, bonus) * -1;
      prev = Math.pow(score, bonus) * -1;
    } else {
      result += Math.pow(score, bonus);
      prev = Math.pow(score, bonus);
    }
  });

  return result;
}
function solution(numbers, hand) {
  let answer = "";
  const rightNum = [3, 6, 9, "#"];
  const middle = [2, 5, 8, 0];
  const leftNum = [1, 4, 7, "*"];
  let leftHand = "*";
  let rightHand = "#";

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
        // 숫자가 369면 오른손 타이핑 후 오른손 이동
      answer += "R";
      rightHand = numbers[i];
    } else if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
        // 숫자가 147이면 왼손 타이핑 후 왼손 이동
      answer += "L";
      leftHand = numbers[i];
    } else {
        // 아닌 경우 어느 손 움직일지 계산
        // index를 빼서 절대값으로 처리
      let leftTry, rightTry;
      if (
        middle.includes(leftHand) === true &&
        middle.includes(rightHand) === true
      ) {
        // 두 손이 middle
        leftTry = Math.abs(
          middle.indexOf(leftHand) - middle.indexOf(numbers[i])
        );
        rightTry = Math.abs(
          middle.indexOf(rightHand) - middle.indexOf(numbers[i])
        );
      } else if (middle.includes(leftHand) === true) {
        // 왼손이 middle
        leftTry = Math.abs(
          middle.indexOf(leftHand) - middle.indexOf(numbers[i])
        );
        rightTry =
          1 +
          Math.abs(rightNum.indexOf(rightHand) - middle.indexOf(numbers[i]));
      } else if (middle.includes(rightHand) === true) {
        // 오른손이 middle
        leftTry =
          1 + Math.abs(leftNum.indexOf(leftHand) - middle.indexOf(numbers[i]));
        rightTry = Math.abs(
          middle.indexOf(rightHand) - middle.indexOf(numbers[i])
        );
      } else {
        // 둘다 middle에 없음
        leftTry = Math.abs(
          leftNum.indexOf(leftHand) - middle.indexOf(numbers[i])
        );
        rightTry = Math.abs(
          rightNum.indexOf(rightHand) - middle.indexOf(numbers[i])
        );
      }

      if (leftTry === rightTry) {
        // answer += hand.slice(0,1).toUpperCase();
        if (hand === "left") {
          leftHand = numbers[i];
          answer += "L";
        } else {
          rightHand = numbers[i];
          answer += "R";
        }
      } else if (leftTry < rightTry) {
        answer += "L";
        leftHand = numbers[i];
      } else {
        answer += "R";
        rightHand = numbers[i];
      }
    }
  }

  return answer;
}
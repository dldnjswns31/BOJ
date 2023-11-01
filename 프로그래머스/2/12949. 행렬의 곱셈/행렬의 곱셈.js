function solution(arr1, arr2) {
  const row1 = arr1.length;
  const col1 = arr1[0].length;
  const col2 = arr2[0].length;
  const result = [];

  for (let i = 0; i < row1; i++) {
    result.push([]);
    for (let j = 0; j < col2; j++) {
      let sum = 0;
      for (let k = 0; k < col1; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      result[i].push(sum);
    }
  }

  return result;
}
## 문제

봉우리 높이의 정보가 담긴 N\*N 지도
각 격자판의 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역이다.
봉우리 지역이 몇 개 있는 지 알아내는 로직을 작성하라.

```
function solution(arr) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const length = arr.length;

  let answer = 0;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      let flag = true;

      for (let k = 0; k < 4; j++) {
        const nx = i + dx[k];
        const ny = j + dy[k];

        if (nx >= 0 && nx < length && ny >= 0 && ny < length && arr[nx][ny] >= arr[i][j]) {
          flag = false;
          break;
        }
      }
      flag && answer++;
    }
  }
  return answer;
}
```

let arr = [
[5, 3, 7, 2, 3],
[3, 7, 1, 6, 1],
[7, 2, 5, 3, 4],
[4, 3, 6, 4, 1],
[8, 7, 3, 5, 2],
];
console.log(solution(arr));

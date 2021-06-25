/*
N일 동안의 매출기록이 기재되어 있는 배열 arr이 있다.
K일 동안의 초대 매출액이 얼마인지 구하는 로직을 작성하라.
*/

// TODO
/*
Sliding Window를 이용해서 풀자!

1. K일 동안의 매출액을 구하는 for문 작성
2. K번째부터 배열의 길이만큼 반복문을 돌면서
2.1 다음 매출액을 구한다.
2.1.1 k번째부터 배열을 탐색하기 때문에 현재 매출액인 i를 더해주고
2.1.2 i에서 k번째를 뺀 값을 빼준다.
=> 12, 15, 16이 K일 동안의 매출이라고 하면 다음 K일 동안의 매출은 15, 16, 15
=> 2.1.2에서 k를 빼준 이유는 12는 빼고 다음 값인 15는 더해줘야 하기 때문에 !!
2.2 이전 매출액과 현재의 매출액을 비교해서 더 큰 값을 저장한다.
*/

function solution(k, arr) {
  let answer = 0;
  let sum = 0;

  for(let i = 0; i < k; i++) sum += arr[i];

  for(let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];

    answer = Math.max(answer, sum);
  }

  return answer;
}

const k = 3;
const arr = [12,15,16,15,22,10,24,19,13,20];
console.log(solution(k, arr));
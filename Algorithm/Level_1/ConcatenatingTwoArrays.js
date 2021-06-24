/*
오름차순으로 정렬된 두 배열을 오름차순으로 합치는 로직을 작성하라!
*/


// 방법 1 => 시간복잡도 O(n log n)
function solution(arr1, arr2) {
  return [...arr1, ...arr2].sort((a,b) => a - b);
}

// 방법 2 => 시간복잡도 O(n + m)
function solution(arr1, arr2) {
  // 투 포인트로 해결하자 !

  let answer = [];

  // arr1을 가르키는 포인터 -> p1 = 0
  // arr2를 가르키는 포인터 -> p2 = 0
  let p1 = 0;
  let p2 = 0;

  // p1과 p2가 0보다 클 때 까지 while문을 돌면서
  // arr1의 p1과 arr2의 p2를 비교한다.

  while (p1 < arr1.length && p2 < arr2.length) {
    // 비교하여 더 작은 값을 answer 배열에 push를 한다.
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }

  // 배열의 길이가 다를 경우를 생각해서 while문을 2번 더 돈다.

  // p1의 길이가 0보다 클 경우 arr1의 나머지 원소를 answer에 push
  while (p1 < arr1.length) answer.push(arr1[p1++]);
  // p2의 길이가 0보다 클 경우 arr2의 나머지 원소를 answer에 push
  while (p2 < arr2.length) answer.push(arr2[p2++]);

  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
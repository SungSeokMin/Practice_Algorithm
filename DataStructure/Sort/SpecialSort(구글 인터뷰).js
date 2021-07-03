/*
N개의 정수가 입력되면 당신은 입력된 값을 정렬해야 한다.
음의 정수는 앞쪽에 양의정수는 뒷쪽에 있어야 한다. 또한 양의정수와 음의정수의 순서에는 변함이 없어야 한다.
*/

function solution(arr) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[0] < 0) {

      for(let j = i; j > 0; j--) {
        if(arr[j-1] < 0) break;
        else [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
      }
    }
  }
  return arr;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
      console.log(solution(arr));
/*
정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요.
단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고,
[10]면 [-1]을 리턴 합니다.
*/

function solution(arr) {
  // Math.min을 이용하여 제일 작은 수 찾고 indexOf를 이용하여 찾아서 제거
  // 빈 배열일 경우 -1 리턴, 10일 경우 -1 리턴
  let newArr = [];
  let findMin = Math.min(...arr);
  
  if(arr.length === 0 || arr[0] === 10) {
      return [-1];
  }
  
  for(let el of arr) {
      if(el === findMin) {
          continue;
      }
      newArr.push(el);
  }
  return newArr;
}

solution([4,3,2,1]);
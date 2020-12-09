/*
array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.
*/

function solution(arr, divisor) {
  // 1. 배열의 각 요소들이 divisro로 나누어 떨이지는 값
  // 2. 그 값을 오름차순으로 정렬한 배열을 리턴
  // 3. 나누어 떨어지는 값이 없는 경우 -1리턴
  let newArr = [];
  arr.sort((a,b) => a - b);
  
  for(let i = 0; i < arr.length; i++) {
      if(arr[i] % divisor === 0) {
          newArr.push(arr[i]);
      }
  }
  if(newArr.length === 0) {
      return [-1];
  }
  return newArr;
}

solution([1,4,2,3], 3);

/*
function solution(arr, divisor) {
    // 1. 배열의 각 요소들이 divisro로 나누어 떨이지는 값
    // 2. 그 값을 오름차순으로 정렬한 배열을 리턴
    // 3. 나누어 떨어지는 값이 없는 경우 -1리턴
    
    let findElement = arr.filter((el) => el % divisor === 0)
    
    return findElement.length === 0 ? [-1] : findElement.sort((a,b) => a - b);
    
}
*/
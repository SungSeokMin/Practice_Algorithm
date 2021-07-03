/*
N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요.
정렬하는 방법은 삽입정렬입니다.
*/

/*
삽입 정렬은 두 번째 자료부터 시작하여 그 앞(왼쪽)의 자료들과 비교하여 삽입할 위치를 지정한 후
자료를 뒤로 옮기고 지정한 자리에 자료를 삽입하여 정렬하는 알고리즘이다.
*/

function solution(arr) {
  for(let i = 0; i < arr.length; i++) {
    let temp = arr[i];

    let j;

    for(j = i - 1; j >= 0; j--) {
      if(arr[j] > temp) arr[j+1] = arr[j];
      else break;
    }
    arr[j + 1] = temp;
  }
  return arr;
}

let arr = [11, 7, 5, 6, 10, 9];
      console.log(solution(arr));
/*
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수,
solution을 만들어 보세요.
소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)
*/

function solution(n) {
  // 1. 1부터 입력받은 n 사이에 있는 소수의 개수
  // 1.1 cnt 변수 생성 시 1을 할당
  // 1.2 i = 3 부터 n만큼 반복문
  // 1.3 j = 3 부터 Math.sqrt(n)만큼 반복
  
  // 2. 소수는 1과 자기 자신으로만 나눠지는 수
  let cnt = 0;
  
  if(n > 1) {
      cnt = 1;
  }
  
  for(let i = 3; i <= n; i+=2) {
      let isPrime = true;
      let sqrt = Math.sqrt(i);
      for(let j = 3; j <= sqrt; j+=2) {
          if(i % j === 0) {
              isPrime = false;
              break;
          }
      }
      if(isPrime) {
          cnt++;
      }
  }
  return cnt;
}

solution(10); // 4
/*
N개의 자연수가 입력되면 각 자연수를 뒤집은 수가 소수이면 출력하라.

단 200 같은 경우에는 뒤집으면 002 이지만 숫자형태의 2로 표현한다.
*/

/*
어떠한 숫자의 제곱근이 나누어 떨어진다면 소수가 아니다.

ex) 16의 제곱근 4는 2로 나누어진다.
ex) 5의 제곱근 2.23606797749979는 어떠한 숫자로 나누어지지 않는다.
*/

function isPrime(num) {
  if(num === 1) return false;

  for(let i = 2; i < parseInt(Math.sqrt(num)); i++) {
    if( num % i === 0) return false;
  }

  return true;
}

/* 
arr의 각 요소들을 배열화 시킨 후 뒤집고 다시 문자화 시킨다.
해당 요소를 isPrime 함수를 호출해 소수를 판명하고
return 된 값에 따라 로직을 수행한다.
*/
function ReversePrimeNumber(arr) {
  let answer = [];

  for(let i = 0; i < arr.length; i++) {
    const reverseEl = Number(arr[i].toString().split('').reverse().join(''));

    if(isPrime(reverseEl)) {
      answer.push(reverseEl);
    }
  }

  return answer;
}
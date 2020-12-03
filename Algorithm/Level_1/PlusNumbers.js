/*
정수 배열 numbers가 주어집니다.
numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 
더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아
return 하도록 solution 함수를 완성해주세요.

*/

function solution(numbers) {
  // 1. 서로 다른 인덱스에 있는 두 개의 수를 뽑아서 더한다.
  // 1-1. 2중 반복을 이용해 i와 j의 합을 sum에 담고
  // 1-2. if(answer배열에 includes sum) ? continue : push (sum)
  // 1-3. sum은 0으로 초기화
  
  // 2. 만들 수 있는 모든 수를 배열에 오름차순
  // 2-1. sort를 이용해 a-b(오름차순)
  
  // 3. return answer;
  
let answer = [];
let sum = 0;
for(let i = 0; i < numbers.length; i++) {
    for(let j = i + 1; j < numbers.length; j++) {
        sum = numbers[i] + numbers[j];
        if(answer.includes(sum)) {
          continue;
        } else {
          answer.push(sum);
        }
        sum = 0;
    }
}
answer.sort((a,b) => a- b);
return answer;
}
solution();
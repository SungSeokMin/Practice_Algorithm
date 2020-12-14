/*
팀에서는 기능 개선 작업을 수행 중입니다. 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.
또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고,
이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.
먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 
speeds가 주어질 때 각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.
*/

function solution(progresses, speeds) {
  // 1. queue, progresses가 100이 되면 unshift를 해줄 것이기 때문에 
  // 2. while(progresses길이가 0보다 클 때)
  // 3. for문을 이용해 progresses의 전체적인 요소에 speeds의 요소를 더해주고
  // 4. progresses가 100이 넘었는지 검사 ... while(progresses >= 100)
  // 5. 100이 넘었다면 progresses, speeds배열 shift후 cnt 1 증가
  // 6. cnt변수가 while문 안에 있으므로 6번 조건이 성사되지 않는다고 해도 0이 push가 된다 
  // 6.1 그러므로 cnt가 0 이상일 때 Push
  
  
  
  let newArr = [];
  
  while(progresses.length > 0) {
    for(let i = 0; i < progresses.length; i++) {
      if(progresses[i] < 100) {
        progresses[i] += speeds[i];
      }
    }

    let cnt = 0;
    while(progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      cnt++;
    }
    
    if(cnt > 0) {
      newArr.push(cnt); 
    }
  }
    return newArr;
}

solution(	[93, 30, 55], [1, 30, 5]);
// [2,1]
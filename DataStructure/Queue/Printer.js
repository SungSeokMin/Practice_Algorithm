// 문제설명

/*
프린터의 성능을 테스트하여 새로운 프린터를 장만할지 결정하려고 합니다.
프린터의 인쇄 작업 목록의 크기와 최대 용량을 가정하고 각기 다른 용량의 문서를 차례대로 인쇄하여 모든 문서가 인쇄되는데 
최소 몇 초가 걸리는지 테스트하기로 했습니다.
프린터 인쇄 작업 목록의 제한사항은 다음과 같습니다.

[제한사항]

1. 인쇄 작업 목록은 칸으로 이루어져 있습니다.
2. 각 칸에는 한 개의 문서만 위치할 수 있습니다.
3. 문서는 1초에 한 칸만 이동할 수 있습니다.
4. 인쇄 작업 목록의 크기는 bufferSize이고 최대 용량 capacities 만큼 문서를 담을 수 있습니다.
*/

// 수도코드

/*
변수 선언
 0. 초를 나타내는 time, bufferSize만큼의 배열 생성, 총 용량을 구하는 queueSum

1. while(반복문)을 돌기전에 처음에 queue에 값을 추가할 경우를 작성
 1.1 documents의 첫 번째 요소를 꺼낸다 => documents.shift();
 1.2 꺼낸 값을 queue에 집어 넣는다 => queue.unshift();
 1.3 queue의 마지막 값을 삭제 => queue.pop();
 1.4 queueSum과 1.1에서 꺼낸 첫 번째 요소를 더한다.
 1.5 time을 1 증가시킨다.


2. while(총 용량이 0이 될 때 까지)
 2.1 documents의 첫 번째 요소를 꺼낸다 => documents.shift();
 2.2 총 용량을 구한다. queueSum += 2.1에서 꺼낸 첫 번째 요소
 2.3 if(총 용량의 합이 capacties보다 작으면) => queue에 추가 가능
   2.3.1 queue.unshift(2.1에서 구한 첫 번째 요소)
   2.3.2 queueSum은 queueSum + 2.1에서 구한 첫 번째 요소
 2.4 else => queue에 추가 불가능
   2.4.1 2.1에서 꺼낸 첫 번째 요소를 다시 documents의 맨 앞에 집어 넣는다.
   2.4.1 queue에는 0을 집어 넣는다. => 이전 요소를 밀어내기 위해서
 2.5 time을 1 증가시킨다.

3. time을 return 한다.
*/

// 문제해결

function queuePrinter(bufferSize, capacities, documents) {
  
  let time = 0;
  let queue = Array(bufferSize).fill(0);
  let queueSum = 0;

  let firstElement = documents.shift();

  queue.unshift(firstElement);
  queue.pop();

  queueSum += firstElement;

  time++;

  while(queueSum) {
    queueSum -= queue.pop();

    firstElement = documents.shift();

    if(queueSum + firstElement <= capacities) {
      queue.unshift(firstElement);
      queueSum += firstElement;
    } else {
      documents.unshift(firstElement);
      queue.unshift(0);
    }
    time++;
  }
  return time;
}
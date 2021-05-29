// 문제 설명

/*
→ 동화책 전문 회사 동화스테이츠의 출간팀은 동화책 출간 작업을 하고 있습니다. 
각 동화책 출간 진도가 100%일 때 출간할 수 있습니다.
각 동화책 출간 담당자는 다르며, 담당자의 업무 속도도 다르기 때문에 커리큘럼 순서 상 뒤에 있는 책이 앞에 있는 책보다
먼저 출간이 완료될 수 있습니다.
이때, 뒤에 있는 책은 앞에 있는 책이 출간될 때 함께 출간됩니다.
*/

// 수도코드

/*
1. books의 length만큼 반복문을 돌면서 완료되는 시간을 구한다.
 1.1 몫 => Math.floor((100 - books[i]) / speed[i]);
 1.2 나머지 => (100 - books[i]) % speed[i];
 1.3 나머지가 있을 경우에 몫을 1을 더한다. 이유는 ? 하루를 더해줘야 하기 때문에

1번에서 구한 배포까지의 걸리는 시간을 구했다면

2. 1번에서 구한 배열의 길이만큼 while(반복문)을 돈다.
 2.1 배열의 첫 요소보다 큰 요소가 있다면 해당 index를 반환한다. => findIndex 활용
 2.2 findIndex가 -1 즉, 큰 요소를 찾지 못했다면 배열의 첫 번째 요소가 제일 오래 걸리는 경우
   2.2.1 answer에 workDay의 길이를 push, workDay의 요소를 전부 삭제
 2.3 findIndex가 1 즉, 큰 요소를 찾은 경우 배열의 첫 번째 요소보다 더 오래걸리는 경우
   2.3.1 answer에 2.1에서 찾은 index를 push, workDay의 0부터 index까지 자른다 => splice 활용

3. 마지막으로 answer를 리턴한다.
*/

// 문제 해결

function deployBook(books, speeds) {
  let answer = [];
  let workDay = [];
  let quotient = 0;
  let remainder = 0;

  for(let i = 0; i < books.length; i++) {
    quotient = Math.floor((100 - books[i]) / speeds[i]);
    remainder = (100 - books[i]) % speeds[i];

    if(remainder > 0) {
      quotient += 1;
    }
    workDay.push(quotient);
  }

  while(workDay.length > 0) {
    let findIdx = workDay.findIndex(item => workDay[0] < item);

    if(findIdx === -1) {
      answer.push(workDay.length);
      workDay.splice(0, workDay.length);
    } else {
      answer.push(findIdx);
      workDay.splice(0, findIdx);
    }
  }
  return answer;
}
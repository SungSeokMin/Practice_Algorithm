/*
수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다.
수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때,
가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.
  */

function solution(answers) {
  // 각각의 패턴을 조사 ... a, b, c
  // 각각 count를 해줄 변수 생성
  
  // answers.length 조건으로 반복문
  // i1 = i % 1번 수포자의 길이
  // i2 = i % 2번 수포자의 길이
  // i3 =  % 3번 수포자의 길이
  // 각각 if문은 a[i1,2,3]와 answers[i]를 비교 
  // 맞으면 count++
  
  // return 하는 값을 오름차순 ... [1,2,3]
  // if(a_count와 b_count가 같으면)
  var answer = [];
  let a = [1,2,3,4,5];
  let b = [2,1,2,3,2,4,2,5];
  let c = [3,3,1,1,2,2,4,4,5,5];
  
  let count = [0, 0, 0];

  for(let i = 0; i < answers.length; i++) {

    let i1 = i % a.length;
    let i2 = i % b.length;
    let i3 = i % c.length;

    if(answers[i] === a[i1]) {
      count[0]++;
    }
    if(answers[i] === b[i2]) {
      count[1]++;
    }
    if(answers[i] === c[i3]) {
      count[2]++;
    }
  }

  let maxNum = Math.max.apply(null, count);

  answer = count.reduce((acc, cur, idx) => {
    if(maxNum === cur) {
      acc.push(idx+1);
      return acc;
    } else {
      return acc;
    }
  },[]);

  return answer;
}

solution([1,2,3,1,4,2,3,2,4,1,4,2,4,1,3,2,3,4,1,3]);

/*
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요.
단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

*/

function solution(s) {
  // 1. 단어 s의 가운데 글자를 반환하는 함수
  // 2. 단어의 길이가 짝수라면 가운데 두 글자를 반환
  // 2.1 !s.length % 2 => slice((s.length / 2) -1 ,(s.length / 2) +1);
  // 3. 단어의 길이가 홀수라면 가운데 한 글자를 반환
  // 3.1 s.length % 2 => s[s.length / 2]
  let percent = s.length / 2;
  
  return s.length % 2 ? s[Math.floor(s.length / 2)] : s.slice(percent-1, percent+1);
}

solution('abcde');
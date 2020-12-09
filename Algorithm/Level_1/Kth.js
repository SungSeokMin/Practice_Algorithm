/*
배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
2에서 나온 배열의 3번째 숫자는 5입니다.
배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때,
commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요
*/

function solution(array, commands) {
    // commands의 값은 array의 순번과 다르게 0부터 시작 => commands.map을 이용해 -1
    // 위의 결과값을 배열 변수에 담아준 후 => let mapping = commadns.map
    // mapping배열로 반복문을 돌면서 => for(mapping.length;)
    // array배열을 mapping의 0번째와 1번째로 자라주고 => array.slice(start, end)
    // 그 값을 sort해서 정렬 => copyArray.sort();
    // 2번째의 index를 이용해 잘라주기 => copyArray[findIndex]
    // answer.push 후 리턴
      
  let answer = [];

  let mapping = commands.map(function(el) {
    let newArr = [];
    
    for(let key of el) {
        key = key -1;
        newArr.push(key);
      }
    return newArr;
  });

  for(let i = 0; i < mapping.length; i++) {
    let start = mapping[i][0];
    let end = mapping[i][1]+1;
    let findIndex = mapping[i][2];
    let copyArray = array.slice(start,end);

    copyArray.sort(function(a,b) {
      return a - b;
    });
    answer.push(copyArray[findIndex]);
  }
    return answer;
}

solution([1,5,2,6,3,7,4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]	);
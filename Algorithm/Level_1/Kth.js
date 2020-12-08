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
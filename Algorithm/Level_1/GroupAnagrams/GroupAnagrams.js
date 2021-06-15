// 매개변수로 받은 배열의 각 요소를 split한 후 정렬을 한다.
// 정렬한 요소를 객체에 추가한다.
// 해당 배열을 순회하면서 정렬된 값이 객체에 있다면 요소를 추가, 없다면 새로운 객체의 키를 생성한다.
// Object.keys를 이용해 key값을 받아온 후 map을 돌면서 해당 객체의 value를 return 한다.

const groupAnagrams = (lists) => {
  let answer = {};
  lists.forEach(list => {
    const letter = list.split('').sort();

    answer[letter] ? answer[letter].push(list) : answer[letter] = [list];
  })

  const value = Object.values(answer);

  return value;
}

const lists = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
groupAnagrams(lists)
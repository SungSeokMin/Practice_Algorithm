/*
지니레코드에서는 불세출의 가수 조영필의 라이브 동영상을 DVD로 만들어 판매하려 한다. 
DVD에는 총 N개의 곡이 들어가는데, DVD에 녹화할 때에는 라이브에서의 순서가 그대로 유지 되어야 한다. 
순서가 바뀌는 것을 우리의 가수 조영필씨가 매우 싫어한다. 
즉, 1번 노래와 5번 노래를 같은 DVD에 녹화하기 위해서는 1번과 5번 사이의 모든 노래도 같은 DVD에 녹화해야 한다. 
또한 한 노래를 쪼개서 두 개의 DVD에 녹화하면 안된다.
지니레코드 입장에서는 이 DVD가 팔릴 것인지 확신할 수 없기 때문에 이 사업에 낭비되는 DVD를 가급적 줄이려고 한다. 
고민 끝에 지니레코드는 M개의 DVD에 모든 동영상을 녹화하기 로 하였다. 이 때 DVD의 크기(녹화 가능한 길이)를 최소로 하려고 한다. 
그리고 M개의 DVD는 모두 같은 크기여야 제조원가가 적게 들기 때문에 꼭 같은 크기로 해야 한다.
*/

/*
입력예제
[1, 2, 3, 4, 5, 6, 7, 8, 9], 3

=> 17

3개의 DVD용량이 17분짜리이면 (1, 2, 3, 4, 5) (6, 7), (8, 9) 이렇게 3개의 DVD로 녹음을 할 수 있다. 
17분 용량보다 작은 용량으로는 3개의 DVD에 모든 영상을 녹화할 수 없다.
*/

function count(songs, capacity) {
  let cnt = 1;
  let sum = 0;

  for (let song of songs) {
    if (sum + song <= capacity) {
      sum += song;
    } else {
      cnt++;
      sum = song;
    }
  }
  return cnt;
}

function solution(m, songs) {
  let answer = 0;

  let lt = Math.max(...songs);
  let rt = songs.reduce((acc, cur) => acc + cur, 0);

  while (lt <= rt) {
    const mid = parseInt((lt + rt) / 2);

    if (count(songs, mid) <= m) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }
  return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
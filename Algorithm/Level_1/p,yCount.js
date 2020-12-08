/*
대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요.
'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
예를 들어 s가 pPoooyY면 true를 return하고 Pyy라면 false를 return합니다.
*/

function solution(s){
    // 1. 대문자와 소문자가 섞여있는 문자열 s(매개변수)
    
    // 2. 대문자와 소문자는 구별하지 않는다
    // 2.1 s = s.toLowerCase();
    
    // 3. s의 'p'의 개수와 'y'의 개수가 같으면 true
    // 3.1 배열 count 생성 => let count = [0,0]
    // 3.2 s의 길이만큼 반복문 돌면서 if(p와 같으면), if(y와 같으면) -> count++
    
    // 4. pCount와 yCount를 비교해서 같으면 true, 같지 않으면 false
    
    // 5. 'p','y'가 하나도 없는 경우 true 리턴
    s = s.toLowerCase();
    
    let count = [0, 0];
    
    if(!s.includes('p') && !s.includes('y')) {
        return true;
    }
    
    for(let i = 0; i < s.length; i++) {        
        if(s[i] === 'p') {
            count[0]++;
        } else if(s[i] === 'y') {
            count[1]++;
        }
    }
    
    if(count[0] === count[1]) {
        return true;
    }
    return false;
}
// 문제 설명

/*
→ 개발자가 되고 싶은 김코딩은 자료구조를 공부하고 있습니다.
인터넷 브라우저를 통해 스택에 대한 검색을 하면서 다양한 페이지에 접속하게 되었는데
"뒤로 가기", "앞으로 가기"를 반복하면서 여러 페이지를 참고하고 있었습니다.
그런데 새로운 페이지를 접속하게 되면 "앞으로 가기" 버튼이 비활성화돼서 다시 보고 싶던 페이지로 갈 수 없었습니다.
이러기를 반복하다가 김코딩은 스택 자료구조를 떠올리게 되었습니다.
*/

// 조건

/*
1. 새로운 페이지로 접속할 경우 prev 스택에 원래 있던 페이지를 넣고 next 스택을 비웁니다.
2. 뒤로 가기 버튼을 누를 경우 원래 있던 페이지를 next 스택에 넣고 prev 스택의 top에 있는 페이지로 이동한 뒤 prev 스택의 값을 pop 합니다.
3. 앞으로 가기 버튼을 누를 경우 원래 있던 페이지를 prev 스택에 넣고 next 스택의 top에 있는 페이지로 이동한 뒤 next 스택의 값을 pop 합니다.
4. 브라우저에서 뒤로 가기, 앞으로 가기 버튼이 비활성화일 경우(클릭이 되지 않을 경우)에는 스택에 push 하지 않습니다.
*/

// 수도코드

/*
1. 이전 stack, 이후 stack, 현재 페이지를 나타낼 변수 선언
2. 현재 actions의 i번째가 뒤로가기, 앞으로가기, 새로운 페이지 인지 확인 할 조건
  2.1 뒤로가기 => prevStack의 pop을 이용해 자료 추출, nextStack에 현재 페이지 push ,current는 추출한 자료로 초기화
  2.2 앞으로가기 => nextStack에 pop을 이용해 자료 추출, prevStack의 현재 페이지 push ,current는 추출한 자료로 초기화
  2.3 새로운 페이지 => prevStack에 현재페이지(current) push, current는 actions[i]로 초기화, nextStack = [];
*/

// 문제 해결

function browserStack(actions, start) {
  let prevStack = [];
  let nextStack = [];
  let current = start;

  for(let i = 0; i < actions.length; i++) {
    if(actions[i] === -1 && prevStack.length > 0) {

      let prevPage = prevStack.pop();
      nextStack.push(current);
      current = prevPage;

    } else if(actions[i] === 1 && nextStack.length > 0){
      let nextPage = nextStack.pop();
      prevStack.push(current);
      current = nextPage;

    } else {
      prevStack.push(current);
      current = actions[i];
      nextStack = [];

    }
  }
  return [prevStack, current, nextStack]
}
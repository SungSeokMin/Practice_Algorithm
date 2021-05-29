/* 
Stack(LIFO)
정해진 방향으로만 쌓을 수 있으면서 가장 위에 있는 자료가 처음으로 나온다.
*/

// 1. 자료를 저장할 객체, 상단을 가르키는 top 변수 선언
// 2. stack의 크기를 알 수 있는 size 함수
// 3. 자료를 집어 넣을 수 있는 push 함수
// 4. 자료를 뺄 수 있는 pop 함수

class Stack {
  constructor() {
    this.storage = {};
    this.front = 0;
  }

  size() {
    return this.front;
  }

  push(element) {
    this.storage[front] = element;
    
    this.front++;
  }
  pop() {
    // stack에 자료가 없으면 return
    if(this.size() <= 0) {
      return;
    }

    const topElement =  this.storage[top - 1];
    delete this.storage[top - 1];
    this.front--;

    return topElement;
  }
}
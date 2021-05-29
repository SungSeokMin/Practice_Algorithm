/*
Queue(FIFO)
정해진 방향으로만 쌓을 수 있으면서 먼저 저장된 자료가 처음으로 나온다.
*/

// 1. 자료를 저장할 객체, 앞단, 뒷단 변수 선언
// 2. 객체의 크기를 알 수 있는 size 함수
// 3. 자료를 집어넣기 위한 enqueue 함수
// 4. 자료를 꺼내기 위한 dequeue 함수

class Queue {
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }

  size(){
    return this.rear - this.front;
  }
  enqueue(element){
    this.storage[rear] = element;
    this.rear++;
  }
  dequeue(){
    if(this.size() <= 0) {
      return;
    }

    const firstElement = this.storage[front];
    delete this.storage[front];
    this.front++;
    
    return firstElement;
  }


}
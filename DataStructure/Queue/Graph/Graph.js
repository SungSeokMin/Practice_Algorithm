/*
Graph
- node와 node를 연결하는 간선을 하나로 모아 놓은 자료구조

정점(vertex) : === node
간선(edge) : node를 연결하는 선
진입 차수 : 외부에서 오는 간선의 개수
진출 차수 : 외부로 향하는 간선의 개수
*/

class Graph {
  constructor () {
    this.matirx = [];
  }

  // addVertex(): 그래프에 버텍스를 추가해야 합니다.
  addVertex() {
    const currentLength = this.matirx.length;

    for(let i = 0; i < currentLength; i++) {
      this.matirx[i].push(0);
    }

    this.matirx.push(new Array(currentLength + 1).fill('0'));
  }

  // contains(vertex): 그래프에 해당 버텍스가 존재하는지 여부를 Boolean으로 반환해야 합니다.
  contains(vertex) {
    // !! => Boolean 타입으로 형변환을 시켜준다.
    // this.matirx[vertex]의 값은 0 아니면 1이지만 !!을 이용해서 true, false 값으로 변환
    return !!this.matirx[vertex];
  }

  // addEdge(from, to): fromVertex와 toVertex 사이의 간선을 추가합니다.
  addEdge(from, to) {
    const currentLength = this.matirx.length - 1;

    if(from === undefined || to === undefined) {
      return;
    }

    // 범위를 벗어난 경우에는 그냥 return을 시킨다.
    if(from > currentLength || to > currentLength || from < 0 || to < 0) {
      return;
    }

    this.matirx[from][to] = 1;
  }

  // hasEdge(from, to): fromVertex와 toVertex 사이의 간선이 존재하는지 여부를 Boolean으로 반환해야 합니다.
  hasEdge(from, to) {
    return !!this.matirx[from][to];
  }

  // removeEdge(from, to): fromVertex와 toVertex 사이의 간선을 삭제해야 합니다.
  removeEdge (from, to) {
    const currentLength = this.matirx.length - 1;

    if(from === undefined || to === undefined) {
      return;
    }

    // 범위를 벗어난 경우에는 그냥 return을 시킨다.
    if(from > currentLength || to > currentLength || from < 0 || to < 0) {
      return;
    }

    this.matirx[from][to] = 0;
  }
}
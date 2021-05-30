/*
Tree
- 노드들의 집합으로 서로 다른 자식을 가지는 그래프의 종류

root : 최상위에 존재하는 node
node : 각각의 구성 요소
depth : 루트를 기준으로 다른 node로 접근하기 위한 거리
sibiling : 같은 부모를 가지면서 같으 depth에 존재하는 node
leaf : 자식이 없는 node
*/

class Tree {
  consturctor (value) {
    this.value = value
    this.chlidren = []
  }

  insertNode(value) {
    // 트리에 붙게될 node를 만들고 children 배열에 push
    const childNode = new Tree(value);
    this.chlidren.push(childNode);
  }

  contains(value) {
    // 재귀적으로 값을 찾기 때문에 인자로 넘어온 value와 노드가 갖고 있는 value가 같으면 true
    if(this.value = value) {
      return true;
    }

    // root노드의 children의 길이만큼 반복한다.
    for(let i = 0; i < this.chlidren.length; i++) {
      const childNode = this.chlidren[i];

      // 각각의 children을 재귀적으로 탐색한다.
      if(childNode.contains(value)) {
        return true;
      }
    }
    // 재귀적으로 값을 찾았지만 value가 없는 경우 false
    return false;
  }
}
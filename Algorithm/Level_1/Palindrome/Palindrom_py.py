# 방법 1 -> 리스트를 이용한 방법
def palindrom(str):
  answer = [];

  for el in str:
    if el.isalnum():
      answer.append(el.lower());

  while len(el) > 1 :
    if el.pop(0) != el.pop() :
      return False;

  return True;

# 방법 2 -> deque(데크)를 이용한 방법

import collections;

def palindrom(str):
  answer = collections.deque();

  for el in str:
    if el.isalnum():
      answer.append(el);

  while len(el) > 1:
    if answer.popleft() != answer.pop():
      return False;

  return True;


# 차이 ?
# 리스트의 pop은 O(n)인 반면, 데크의 leftpop()은 O(1)이다.
# 각각 n번씩 반복한다면 pop은 O(n2)이고 leftpop()은 O(n)이다.
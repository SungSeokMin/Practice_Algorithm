function palindrom(str) {
  let pattern_num = /[0-9]/;
  let pattern_eng = /[a-z]/;

  let answer = [];

  for(let i = 0; i < str.length; i++) {
    if(pattern_num.test(str[i]) || pattern_eng.test(str[i])) {
      answer.push(str[i].toLowerCase());
    }
  }

  while(answer.length > 1) {
    if(answer.shift() !== answer.pop()) {
      return false;
    }
  }

  return true;
}
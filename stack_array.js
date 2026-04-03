class Stack {
  constructor() {
    this.stackList = [];
  }

  push(value) {
    this.stackList[this.stackList.length] = value;
  }

  pop() {
    let temp = this.stackList[this.stackList.length - 1];
    this.stackList.length--;

    return temp;
  }
}

function reverseString(string) {
  let result = "";
  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }

  return result;
}

const list = new Stack();

list.push(1);
list.push(2);
list.pop();

console.log(reverseString("hello"));

console.log(list);

function isBalancedParentheses(parentheses) {
  const map = new Map([
    ["}", "{"],
    ["]", "["],
    [")", "("],
  ]);
  const stack = [];

  for (let p of parentheses) {
    if (!map.has(p)) {
      stack.push(p);
    } else {
      let temp = stack.pop();

      if (temp !== map.get(p)) {
        return false;
      }
    }
  }

  return stack.length === 0;
}



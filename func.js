let vals = [];

for (let i = 0; i < 101; i++) {
  vals.push(i);
}

function checkFilter() {
  let nums = vals.filter(divisibleFive);

  return nums;
}

function divisibleFive(x) {
  return x % 5 === 0;
}

function sum(array) {
  let sum = array.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  return sum;
}

console.log(checkFilter());
console.log(sum(checkFilter()));

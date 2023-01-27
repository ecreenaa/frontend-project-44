export const numbers = (min = 1, max = 100) => {
  const mini = Math.ceil(min);
  const maxi = Math.floor(max);
  const randomNamber = Math.floor(Math.random() * (maxi - mini + 1)) + mini;
  return randomNamber;
};

export const basicMath = (x, y, oper) => {
  let result = 0;
  if (oper === '+') result = x + y;
  if (oper === '-') result = x - y;
  if (oper === '*') result = x * y;
  return result;
};

export const getOperator = (array) => {
  const index = Math.floor(Math.random() * array.length);
  const operator = array[index];
  return operator;
};

export const Divisor = (a, b) => {
  let x = a;
  let y = b;
  while (x !== y) {
    if (x > y) {
      x -= y;
    } else {
      y -= x;
    }
  }
  return x;
};

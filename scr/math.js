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
export const prog = (n, a) => {
  let result = '';
  const length = numbers(5, 10);
  const hidden = numbers(1, length - 1);
  for (let i = 0; i < length; i += 1) {
    const current = (n + (a * i));
    result += (i !== hidden) ? `${current} ` : '.. ';
  }
  return result;
};

export const progression = (str) => {
  const sort = str.split(' ');
  const indexSearch = sort.indexOf('..');
  const prevNeighboor = parseInt(sort[indexSearch - 1], 10);
  const nextNeighboor = parseInt(sort[indexSearch + 1], 10);
  const solve = (prevNeighboor + nextNeighboor) / 2;
  return `${solve}`;
};
export const prime1 = (n, a) => {
  let result = '';
  const length = numbers(5, 10);
  const hidden = numbers(1, length - 2);
  for (let i = 0; i < length; i += 1) {
    const current = (n + (a * i));
    result += (i !== hidden) ? `${current} ` : '.. ';
  }
  return result;
};

export const prime2 = (str) => {
  const sort = str.split(' ');
  const index = sort.indexOf('..');
  const pastNumber = parseInt(sort[index - 1], 10);
  const nextNumber = parseInt(sort[index + 1], 10);
  const solve = (pastNumber + nextNumber) / 2;
  return `${solve}`;
};

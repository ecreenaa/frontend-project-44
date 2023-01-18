export const numbers = (min = 1, max = 100) => {
  const minimal = Math.ceil(min);
  const maximum = Math.floor(max);
  const randomNamber = Math.floor(Math.random() * (maximum - minimal)) + minimal;
  return randomNamber;
};

export const prog = (n, a) => {
  let result = '';
  const length = numbers(5, 10);
  const hidden = numbers(1, length - 1);
  for (let i = 0; i < length; i += 1) {
    const currentNum = (n + (a * i));
    result += (i !== hidden) ? `${currentNum} ` : '.. ';
  }
  return result;
};

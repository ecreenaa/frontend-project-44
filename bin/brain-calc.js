import start from '../scr/cli.js';
import { answer, checkAnswer } from '../scr/worlds.js';
import { getOperator, basicMath, numbers } from '../scr/math.js';

const calc = () => {
  const username = start('What is the result of the expression?');

  for (let attempts = 0; attempts < 3; attempts += 1) {
    const currentOperator = getOperator(['+', '-', '*']);
    const x = numbers(2, 20);
    const y = numbers(2, 20);
    const output = `${x} ${currentOperator} ${y}`;
    const userAnswer = answer(output);
    let correctAnswer = 0;
    switch (currentOperator) {
      case '+':
        correctAnswer = basicMath(x, y, '+');
        break;

      case '-':
        correctAnswer = basicMath(x, y, '-');
        break;

      case '*':
        correctAnswer = basicMath(x, y, '*');
        break;
      default:
    }

    if (!checkAnswer(userAnswer, correctAnswer, username, attempts)) break;
  }
};

calc();
export default calc;

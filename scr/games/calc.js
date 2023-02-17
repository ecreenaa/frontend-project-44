import start from '../cli.js';
import { answer, checkAnswer } from '../worlds.js';
import { getOperator, basicMath, numbers } from '../math.js';

const calc = () => {
  const username = start('What is the result of the expression?');

  for (let attempts = 0; attempts < 3; attempts += 1) {
    const currentOperator = getOperator(['+', '-', '*']);
    const x = numbers(2, 15);
    const y = numbers(2, 15);
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

export default calc;

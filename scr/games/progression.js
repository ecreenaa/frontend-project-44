import start from '../cli.js';
import { answer, checkAnswer } from '../worlds.js';
import { numbers, prog, progression } from '../math.js';

const get = () => {
  const username = start('What number is missing in the progression?');

  for (let attempts = 0; attempts < 3; attempts += 1) {
    const n = numbers();
    const a = numbers(2, 20);
    const problem = prog(n, a);
    const userAnswer = answer(problem, 'string');
    const correctAnswer = progression(problem);

    if (!checkAnswer(userAnswer, correctAnswer, username, attempts)) break;
  }
};

export default get;

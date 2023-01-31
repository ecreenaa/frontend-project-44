import start from '../scr/cli.js';
import { answer, checkAnswer } from '../scr/worlds.js';
import { numbers, prog, progressionS } from '../scr/math.js';

 const start = () => {
  const username = greeting('What number is missing in the progression?');

  for (let attempts = 0; attempts < 3; attempts += 1) {
    const n = numbers();
    const a = numbers(2, 25);
    const problem = prog(n, a);
    const userAnswer = answer(problem, 'string');
    const correctAnswer = progressionS(problem);

    if (!checkAnswer(userAnswer, correctAnswer, username, attempts)) break;
  }
};

start();
export default progression;

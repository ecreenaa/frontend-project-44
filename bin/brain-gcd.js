import start from '../scr/cli.js';
import { answer, checkAnswer } from '../scr/worlds.js';
import { Divisor, numbers } from '../scr/math.js';

const butterfly = () => {
  const username = start('Find the greatest common divisor of given numbers.');

  for (let attempts = 0; attempts < 3; attempts += 1) {
    const x = numbers();
    const y = numbers();
    const problem = `${x} ${y}`;
    const userAnswer = answer(problem);
    const correctAnswer = Divisor(x, y);

    if (!checkAnswer(userAnswer, correctAnswer, username, attempts)) break;
  }
};

butterfly();
export default butterfly;

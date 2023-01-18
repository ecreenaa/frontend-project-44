import start from '../scr/cli.js';
import { answer, checkAnswer } from '../scr/worlds.js';
import { numbers } from '../scr/math.js';

const gameEven = () => {
  const username = start('Answer "yes" if the number is even, otherwise answer "no".');

  for (let attempt = 0; attempt < 3; attempt += 1) {
    const randomNumber = numbers();
    const userAnswer = answer(randomNumber, 'string');
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    if (!checkAnswer(userAnswer, correctAnswer, username, attempt)) break;
  }
};

gameEven();
export default gameEven;

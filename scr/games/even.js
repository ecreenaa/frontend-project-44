import start from '../cli.js';
import { answer, checkAnswer } from '../worlds.js';
import { numbers } from '../math.js';

const gameEven = () => {
  const username = start('Answer "yes" if the number is even, otherwise answer "no".');

  for (let attempt = 0; attempt < 3; attempt += 1) {
    const randomNumber = numbers();
    const userAnswer = answer(randomNumber, 'string');
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    if (!checkAnswer(userAnswer, correctAnswer, username, attempt)) break;
  }
};

export default gameEven;

import start from '../cli.js';
import { answer, checkAnswer } from '../worlds.js';
import { numbers } from '../math.js';

const gamePrime = () => {
  const userName = start('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const x = numbers(2, 1000);
    const y = numbers();
    const z = y !== x;
    const examplePrime = `${x}`;
    const answerUser = answer(examplePrime, 'string');
    const answerCorrect = x % 2 === 0 && x % z === 0 ? 'no' : 'yes';
    if (!checkAnswer(answerUser, answerCorrect, userName, i)) break;
  }
};

export default gamePrime;

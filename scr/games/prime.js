import start from '../cli.js';
import { answer, checkAnswer } from '../worlds.js';
import { isPrime, numbers } from '../math.js';

const gamePrime = () => {
  const userName = start('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const x = numbers(1, 100);
    const answerUser = answer(x, 'string');
    const answerCorrect = (isPrime(x)) ? 'yes' : 'no';
    if (!checkAnswer(answerUser, answerCorrect, userName, i)) break;
  }
};

export default gamePrime;

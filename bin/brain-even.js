import greeting from '../src/cli.js';
import { answerForm, checkAnswer } from '../src/worlds.js';
import { numbers } from '../src/math.js';
const even = () => {
  const username = greeting('Answer "yes" if the number is even, otherwise answer "no".');

  for (let attempt = 0; attempt < 3; attempt += 1) {
    const randomNumber = numbers();
    const userAnswer = answerForm(randomNumber, 'string');
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    if (!checkAnswer(userAnswer, correctAnswer, username, attempt)) break;
  }
};

even();
export default even;

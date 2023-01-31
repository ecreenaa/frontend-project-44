import start from '../scr/cli.js';
import { } from '../scr/worlds.js';
import { numbers } from '../scr/math.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const get = (number) => {
  for (let attempts = 0; attempts < number; attempts += 1) {
    if (number % attempts === 0) {
      return false;
    }
  }
  return number > 1;
};

const str = () => {
  const number = numbers(0, 50);
  const question = String(number);
  const answer = get(number) ? 'yes' : 'no';
  return [question, String(answer)];
};

export default () => start(description, str);

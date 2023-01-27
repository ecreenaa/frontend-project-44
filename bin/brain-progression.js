import start from '../scr/cli.js';
import { answer, checkAnswer } from '../scr/worlds.js';
import { numbers, prog, progressionS } from '../scr/math.js';

const progression = () => {
  const name = start('What number is missing in the progression?');
  const numbers = (min, max) => {
    const rand = min - 1 + Math.random() * (max - min + 1);
    return Math.round(rand);
  };
  

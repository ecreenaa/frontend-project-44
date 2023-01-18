import readlineSync from 'readline-sync';

export const type = (str) => {
  console.log(str);
};

export const answer = (meanig, data) => {
  const result = readlineSync.question(`Question: ${meanig} \nYour answer: `);
  if (data === 'string') {
    return result;
  }
  return parseInt(result, 10);
};

export const checkAnswer = (userAnswer, correctAnswer, userName, attempt) => {
  if (userAnswer === correctAnswer) {
    type('Correct!');
  } else {
    type(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}' . \nLet's try again, ${userName}`);
    return false;
  }
  if (attempt === 2) type(`Congratulations, ${userName}!`);
  return true;
};

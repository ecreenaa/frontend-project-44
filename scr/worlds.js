import readlineSync from 'readline-sync';

export const answer = (meanig, data) => {
  const result = readlineSync.question(`Question:${meanig} \nYour answer: `);
  if (data === 'string') {
    return result;
  }
  return parseInt(result, 10);
};

export const checkAnswer = (userAnswer, correctAnswer, userName, attempt) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}' . \nLet's try again, ${userName}`);
    return false;
  }
  if (attempt === 2) console.log(`Congratulations, ${userName}!`);
  return true;
};

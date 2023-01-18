import readlineSync from 'readline-sync';

export const type = (str) => {
  console.log(str);
};

export const answerForm = (variable, dataTape) => {
  const result = readlineSync.question(`Question: ${variable} \nYour answer: `);
  if (dataTape === 'string') {
    return result;
  }
  return parseInt(result, 10);
};

export const checkAnswer = (userAnswer, correctAnswer, name, attempts) => {
  if (userAnswer === correctAnswer) {
    type('Correct!');
  } else {
    type(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}' . /nLet's try again, ${name}!`);
    return false;
  }
  if (attempts === 2) type(`Congratulations, ${name}!`);
  return true;
};

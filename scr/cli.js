import readlineSync from 'readline-sync';

const start = (text) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  if (text !== undefined) console.log(text);
  return userName;
};

export default start;

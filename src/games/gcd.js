import newGame from '../index.js';
import getRandomNumber from '../random.js';

const task = 'Find the greatest common divisor of given numbers.';

const generateQuestionAnswer = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  let maxDivisor = 0;
  let correctAnswer;

  const question = `${firstNumber} ${secondNumber}`;

  if (firstNumber < secondNumber) {
    maxDivisor = firstNumber;
  } else {
    maxDivisor = secondNumber;
  }

  for (let i = 1; i <= maxDivisor; i += 1) {

    if (firstNumber % i === 0 && secondNumber % i === 0) {
      correctAnswer = i.toString();
    }

  }

  return [question, correctAnswer];
};

const gcdGame = () => {
  newGame(task, generateQuestionAnswer);
};

export default gcdGame;

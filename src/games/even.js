import newGame from '../index.js';
import getRandomNumber from '../random.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const generateQuestionAnswer = () => {
  const question = getRandomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const evenGame = () => {
  newGame(task, generateQuestionAnswer);
};

export default evenGame;

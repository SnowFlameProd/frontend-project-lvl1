import newGame from '../index.js';
import getRandomNumber from '../random.js';

const task = 'What number is missing in the progression?';

const generateQuestionAnswer = () => {
  const progressionLength = getRandomNumber(5, 10);
  const progressionStep = getRandomNumber(1, 5);
  const progression = [];
  progression.push(getRandomNumber());

  for (let i = 1; i < progressionLength; i += 1) {
    progression[i] = progression[i - 1] + progressionStep;
  }

  const randomProgressionElemId = getRandomNumber(0, progressionLength - 1);
  const correctAnswer = progression[randomProgressionElemId].toString();
  progression[randomProgressionElemId] = '..';

  const question = progression.join(' ');

  return [question, correctAnswer];
};

const progressionGame = () => {
  newGame(task, generateQuestionAnswer);
};

export default progressionGame;

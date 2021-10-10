import newGame from '../index.js';
import getRandomNumber from '../random.js';

const task = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const getCorrectAnswer = (firstNumber, secondNumber, operator) => {
  let correctAnswer;
  
  switch (operator) {
    case '+':
      correctAnswer = firstNumber + secondNumber;
      break;
    
    case '-':
      correctAnswer = firstNumber - secondNumber;
      break;

    case '*':
      correctAnswer = firstNumber * secondNumber;
      break;

    default:
      correctAnswer = null;
  };

  return correctAnswer;
};

const generateQuestionAnswer = () => {
  const randomFirstNumber = getRandomNumber();
  const randomSecondNumber = getRandomNumber();
  const operator = operators[getRandomNumber(0, operators.length - 1)];

  const question = `${randomFirstNumber} ${operator} ${randomSecondNumber}`;
  const correctAnswer = getCorrectAnswer(randomFirstNumber, randomSecondNumber, operator).toString();

  return [question, correctAnswer];
};

const calcGame = () => {
  newGame(task, generateQuestionAnswer);
};

export default calcGame;

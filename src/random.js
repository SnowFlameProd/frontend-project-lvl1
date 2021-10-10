const getRandomNumber = (min = 1, max = 100) => Math.floor( min + Math.random() * (max - min + 1) );

export default getRandomNumber;

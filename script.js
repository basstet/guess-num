'use strict';

// игровой бот "Загадывание случайного числа от 1 до 100"

const isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const guessNum = function() {
  const randNum = Math.round(Math.random() * 100);
  console.log(randNum);
  let userNum = prompt(`Угадай число от 1 до 100`),
    userTries = 10;

  const checkNum = function() {
    if (userNum === null) {
      alert(`Игра окончена`);
    } else if (!isNumber(userNum)) {
      userNum = prompt(`Введи число!`);
      checkNum();
    } else if (userTries > 0) {
      userNum *= 1;
      userTries--;

      switch (true) {
        case userNum === randNum:
          let playAgain = confirm(`Поздравляю, Вы угадали!!! Хотели бы сыграть еще?`);
          if (playAgain) {
            guessNum();
          } else {
            alert(`Игра окончена`);
          }
          break;
        case userNum > randNum:
          alert(`Загаданное число меньше, осталось попыток ${userTries}`);
          if (userTries > 0) {
            userNum = prompt(`Попробуй ещё раз:`);
          }
          checkNum();
          break;
        case userNum < randNum:
          alert(`Загаданное число больше, осталось попыток ${userTries}`);
          if (userTries > 0) {
            userNum = prompt(`Попробуй ещё раз:`);
          }
          checkNum();
          break;
      }
    } else {
      let tryAgain = confirm(`Попытки закончились, хотите сыграть еще?`);
      if (tryAgain) {
        guessNum();
      } else {
        alert(`Игра окончена`);
      }
    }
  };
  checkNum();
};
guessNum();
'use strict';

// игровой бот "Загадывание случайного числа от 1 до 100"

const isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const guessNum = function() {
  const randNum = Math.round(Math.random() * 100);
  let userNum = prompt(`Угадай число от 1 до 100`);

  const checkNum = function() {
    if (userNum === null) {
      alert(`Игра окончена`);
    } else if (!isNumber(userNum)) {
      userNum = prompt(`Введи число!`);
      checkNum();
    } else {
      userNum *= 1;

      switch (true) {
        case userNum === randNum:
          alert(`Поздравляю, Вы угадали!!!`);
          break;
        case userNum > randNum:
          alert(`Загаданное число меньше`);
          userNum = prompt(`Попробуй ещё раз:`);
          checkNum();
          break;
        case userNum < randNum:
          alert(`Загаданное число больше`);
          userNum = prompt(`Попробуй ещё раз:`);
          checkNum();
          break;
      }
    }
  };
  checkNum();
};
guessNum();
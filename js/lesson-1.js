//~ У змінній min лежить число від 0 до 59. Визначте у котру чверть години
//~ Попадає це число (у першу, другу, третю або четверту).

function getQuater(min) {
  if (min >= 0 && min < 15) {
    console.log("Перша чверть години");
  } else if (min >= 15 && min < 30) {
    console.log("Друга чверть години");
  } else if (min >= 30 && min < 45) {
    console.log("Третя чверть години");
  } else if (min >= 45 && min < 60) {
    console.log("Черверта чверть години");
  } else console.log("Невірне значення");
  return min;
}

console.log(getQuater(30));

//TODO:===================================
//~Напишіть код, який запитуватиме
//логін за допомогою prompt і логувати результат
//в консоль браузера
//Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша Esc
//Вивести стороку "Скасовано"
// Інакше вивести рядок "Я вас не знаю"
//Пароль перевіряти так:
//Якщо введено пароль "Я головний",
//то вивести рядок "Добрий день!"
//інакше виводити рядок "Невірний пароль!"

// const userRule = prompt("Введіть логін");
// console.log("userRule: ", userRule);

// if (userRule === "Admin") {
//   const passRule = prompt("Введіть пароль");
//   if (passRule === "iAmTheBoss") {
//     console.log("Добрий день!");
//   } else console.log("Невірний пароль!");
// } else if (userRule === "" || userRule === null) {
//   console.log("Скасовано");
// } else console.log("Я вас не знаю");

//~ Створи функцію logNumbers яка приймає min і max
//~ і виводить у консоль
//~ числа від max до min за спаданням
//~ Додайте усі парні числа від max до min
const max = 50;
const min = 23;

function logNumbers(min, max) {
  let sum;
  for (let i = max; i >= min; i--) {
    console.log(i);
    if (i % 2 === 0) {
      sum += i;
    }
  }

  return sum;
}

console.log(logNumbers(5, 10));

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

// console.log(logNumbers(5, 10));

// Повторювати цикл, поки введення неправильне
// Напишіть цикл, який пропонує prompt ввести число більше 100.
// Якщо відвідувач ввів інше число - попросити ввести ще раз, і таке інше.
// Цикл повинен запитувати число поки що або відвідувач не введе число, більше 100,
// або натисне кнопку Скасувати (ESC).
// Передбачається, що відвідувач вводить лише числа. Передбачати обробку
// нечислових рядків у цій задачі необов'язково.

// let number = prompt("Введіть число більше 100")
// while (number !== null && Number(number)<=100){
//    number = prompt("Введіть число більше 100")
// if (number===null){
//    console.log("введення скасоване")
//    break;
// }
// }

//Якщо число ділитися на 3 повертати fizz
//якщо ділитися на 5 повертати buzz
//Якщо ділитися на 3 і на 5 повернути fizzbuzz

function checkMultiples(number) {
  if (number % 5 === 0 && number % 3 === 0) {
    return "fizzbuzz";
  } else if (number % 5 === 0) {
    return "buzz";
  } else if (number % 3 === 0) {
    return "fizz";
  } else {
    return "Це число не кратне 3 або 5";
  }
}

console.log(checkMultiples(6));

// Напишіть if..else, що відповідає наступному switch:
// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;
//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;
//   default:
//     alert( 'We hope that this page looks ok!' );
// }

// const browser = "Chrome";
// if (browser === "Edge") {
//   alert("You've got the Edge!");
// } else if (
//   browser === "Chrome" ||
//   browser === "Firefox" ||
//   browser === "Safari" ||
//   browser === "Opera"
// ) {
//   alert("Okay we support these browsers too");
// } else {
//   alert("We hope that this page looks ok!");
// }



//~ Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
//~ значення '1', то у змінну result запишемо 'зима', якщо має значення
//~ '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.
// const valueSeason = prompt("Введіть число від 1 до 4");


const valueSeason = prompt("Введіть число від 1 до 4")
let result = ""
switch (Number(valueSeason)) {
   case 1: 
   result = "зима"
      break;
   case 2: 
   result = "весна"
      break;
   case 3: 
   result = "літо"
      break;
   case 4: 
   result = "осінь"
      break;
   default:
      result = "це не пора року!"
      break;
}
console.log(`Пора року: ${result}`);
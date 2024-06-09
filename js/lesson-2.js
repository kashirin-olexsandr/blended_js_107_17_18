//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.
//['Джаз', 'Блюз', 'Рок-н-рол']

function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(`${i + 1} ${element}`);
  }
}

// logItems(['Джаз', 'Блюз', 'Рок-н-рол'])

//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
const numbers = [12, 5, 35, 56, 3, 24, 7, 80, 12, -1];

function findSmallerNumber(numbers) {
  let smallestNumber = numbers[0];

  for (const number of numbers) {
    if (number < smallestNumber) {
      smallestNumber = number;
    }
  }
  return smallestNumber;
}

// console.log(findSmallerNumber(numbers));

// Додати метод getInfo в об'єкт user, який повертатиме інфу про користувача у форматі
// Name: Peter. Surname: Parker. Age: 22. Position: spider-man.
// const user = {
//   name: "Piter",
//   surname: "Parker",
//   age: 22,
//   position: "spider-man",
//   getInfo() {
//     return `Name: ${this.name}. Surname: ${this.surname}. Age: ${this.age}. Position: ${this.position}`;
//   },
// };

// console.log(user.getInfo());

const user = {
  name: "Piter",
  surname: "Parker",
  age: 22,
  position: "spider-man",
};
const user2 = {
  name: "Alex",
  surname: "Park",
  age: 33,
  position: "man",
};
const user3 = {
  name: "Kate",
  surname: "Park",
  age: 33,
  position: "woman",
};
function getInfo() {
  return `Name: ${this.name}. Surname: ${this.surname}. Age: ${this.age}. Position: ${this.position}.`;
}
user.getInfo = getInfo;
user2.getInfo = getInfo;
user3.getInfo = getInfo;
console.log(user.getInfo());
console.log(user2.getInfo());
console.log(user3.getInfo());

console.log(user);
console.log(user2);
console.log(user3);

// Task-3
//Напишіть функцію getUniqueValues(arr), яка повертає масив,
//містить лише унікальні елементи arr.
const words = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "JS",
  "CSS",
  "JS",
  "Node.js",
  "JS",
  "React",
  "CSS",
  "React",
  "HTML",
  "Node.js",
];

function getUniqueValues(words) {
  const uniqueArray = [];
  for (const word of words) {
    if (!uniqueArray.includes(word)) {
      uniqueArray.push(word);
    }
  }
  return uniqueArray;
} //нашої команди //Напишіть код для сумування всіх зарплат і //збережіть його результат у змінній sum. //Якщо об'єкт salaries порожній, то результат має бути 0

//У нас є об'єкт, у якому зберігатимуться зарплати
const salaries = {
  Mango: 100,
  Poly: 160,
  Ajax: 1470,
};

function getSumSalaries(salaries) {
  const values = Object.values(salaries);

  let sum = 0;
  for (const value of values) {
    sum += value;
  }
  return sum;
}

console.log(getSumSalaries(salaries));

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

console.log(findSmallerNumber(numbers));

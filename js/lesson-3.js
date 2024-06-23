const users = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

function getEyeColor(users, color) {
  return users.filter((user) => user.eyeColor === color);
}

// console.log(getEyeColor(users, "brown"));
// console.log(getEyeColor(users, "blue"));
// console.log(getEyeColor(users, "green"));

function usersWithGender(users, gender) {
  //     return users.filter((user)=>user.gender === gender).map((user)=>user.name)
  return users.reduce((arrNames, user) => {
    if (user.gender === gender) {
      arrNames.push(user.name);
    }
    return arrNames;
  }, []);
}
// console.log(usersWithGender(users,"female"));
// console.log(usersWithGender(users,"male"));

// / Отримати користувача (не масив) по email (поле email, він унікальний).
// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {об'єкт користувача Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {об'єкт користувача Elma Head}

function getUserWithEmail(users, email) {
  return users.find((user) => user.email === email);
}

// console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
// console.log(getUserWithEmail(users, "elmahead@omatom.com"));

// Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не повинно бути
// Уміння, що повторюються, і вони повинні бути відсортовані в алфавітному порядку.
// console.log(getSortedUniqueSkills(users));
// ['adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit' , 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam']

function getSortedUniqueSkills(users) {
  // const allSkills = users.flatMap((user) => user.skills);

  // const uniqueSkills = allSkills.filter(
  //   (skill, index, array) => array.indexOf(skill) === index
  // );

  // const sortedSkills = uniqueSkills.toSorted();
  // return sortedSkills;

  return users
    .flatMap((user) => user.skills)
    .filter((skill, index, array) => array.indexOf(skill) === index)
    .toSorted();
}
// console.log(getSortedUniqueSkills(users));


// Отримати загальну суму балансу (поле balance) всіх користувачів.
// console.log(calculateTotalBalance(users)); // 20916

function calculateTotalBalance(users){
  return users.reduce((total, user) => total += user.balance, 0);
}
// console.log(calculateTotalBalance(users));


// Напиши клас User для створення користувача з наступними властивостями:
// a. userName - ім'я, рядок
// b. age - вік, число
// c. numbersOfPost - кількість публікацій, число
// d. клас очікує 1 параметр - об'єкт налаштувань з однойменними властивостями
// Додай метод getInfo(), який повертає рядок:
// `Користувачу ${} ${} років і у нього ${} публікацій.`

class User {
  constructor (param){
    this.name = param.userName;
    this.age = param.age;
    this.numbersOfPost = param.numbersOfPost;
  }

  getInfo(){
    return `Користувачу ${this.name} ${this.age} років і у нього ${this.numbersOfPost} публікацій.`
  }
}

const user = new User({ userName: 'Іван', age: 25, numbersOfPost: 10 }); 
console.log(user);
console.log(user.getInfo());
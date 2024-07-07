/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/
// const swapButton = document.querySelector("#swapButton");

// const leftInput = document.querySelector("#leftSwapInput");
// const rightInput = document.querySelector("#rightSwapInput");

// swapButton.addEventListener("click", (event) => {
//   const temp = leftInput.value;
//   leftInput.value = rightInput.value;
//   rightInput.value = temp;
// });

//  Завдання 3
//     Кнопка "Приховати" ховає текст і замінює назву кнопки на
//     "Розкрити", при повторному натисканні текст знову стає доступним
//     і кнопка набуває початкового вигляду.
//

const passwordButton = document.querySelector("#passwordButton");
const passwordInput = document.querySelector("#passwordInput");

passwordButton.addEventListener("click", (event) => {
  if (passwordInput.type === "text") {
    passwordInput.type = "password";
    passwordButton.textContent = "Розкрити";
  } else {
    passwordInput.type = "text";
    passwordButton.textContent = "Приховати";
  }
});

/*

Завдання 6

Натиснувши кнопку "Подвоювати", збільшити значення

у кожному елементі списку у 2 рази

*/

const listItems = document.querySelectorAll(".listItem")

console.log(listItems);

const btn = document.querySelector("#double");

function doubleCallClick() {

  listItems.forEach((item) => {

    console.log(item.textContent);

    const currentValue = parseInt(item.textContent);

    item.textContent = currentValue * 2;

}) 

}

btn.addEventListener ("click", doubleCallClick)

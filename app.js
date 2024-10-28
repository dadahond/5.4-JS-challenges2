// Misol-11! Bir nechta shahar nomlari ro'yxatini yarating va foydalanuvchi input orqali qidirganda faqat mos keladigan shaharlarni ko'rsating.

// Misol-11! Solution!
// const cityInput = document.getElementById("cityInput");
// const cityList = document.getElementById("cityList").children;

// cityInput.addEventListener("input", () => {
//     const inputVal = cityInput.value.toLowerCase();
//     Array.from(cityList).forEach((li) => {
// !li.textContent.toLowerCase().includes(inputVal) ?
//             (li.style.display = "none") :
//             (li.style.display = "block");
//     });
// });

// Misol-12! Slider (Karusel) Qurish
// Bir nechta rasmni o'z ichiga olgan slayder yarating. Foydalanuvchi "keyingi" va "oldingi" tugmalarni bosganda rasm o'zgarib tursin.

// Misol-12! Solution!
// const counter = document.querySelector("p");
// const backward = document.querySelector("#backward");
// const forward = document.querySelector("#forward");
// const image = document.querySelector("img");

// let currentImage = 1;
// counter.textContent = `Image - ${currentImage}/10`;

// backward.addEventListener("click", () => {
//     currentImage--;
//     counter.textContent = `Image - ${currentImage}/10`;
//     image.src = `http://picsum.photos/id/${currentImage}/1200`;

//     if (currentImage == 0) {
//         currentImage = 10;
//         counter.textContent = `Image - ${currentImage}/10`;
//     }
// });
// forward.addEventListener("click", () => {
//     currentImage++;
//     counter.textContent = `Image - ${currentImage}/10`;
//     image.src = `http://picsum.photos/id/${currentImage}/1200`;

//     if (currentImage >= 11) {
//         currentImage = 1;
//         counter.textContent = `Image - ${currentImage}/10`;
//     }
// });

// Misol-13! Sahifadagi matndan biror qismini tanlang va ustiga chiziq tortish yoki shrift hajmini o'zgartirish imkoniyatini qo'shing.

// const button = document.getElementById("boldButton");
// const paragraph = document.getElementById("paragraph");

// let text = paragraph.textContent;

// button.addEventListener("click", () => {
//     const selectedText = window.getSelection().toString();
//     text = text.replace(selectedText, `<b>${selectedText}</b>`);
//     paragraph.innerHTML = text;
// });

// Misol-15! Foydalanuvchi raqamlar kiritadi, tugmani bosganda kiritilgan raqamlar orasidan faqat juft raqamlar ekranga chiqariladi.

// const numbersInput = document.getElementById("numbersInput");
// const showEvens = document.getElementById("showEvens");
// const evensOutput = document.getElementById("evensOutput");

// showEvens.addEventListener("click", () => {
//     const numbers = numbersInput.value.split(",").map(Number);
//     const evenNumbers = numbers.filter((num) => num % 2 === 0);
//     evensOutput.textContent =
//         evenNumbers.length > 0 ?
//         "Even number(s): " + evenNumbers.join(", ") :
//         "No even number(s)";
// });

// Misol-16! JavaScript yordamida oddiy kalkulyator tuzing, foydalanuvchi ikki sonni kiritadi va +,-,*,/ amallarini bajaradi.

// const num1 = document.getElementById("num1");
// const num2 = document.getElementById("num2");
// const add = document.getElementById("add");
// const subtract = document.getElementById("subtract");
// const multiply = document.getElementById("multiply");
// const divide = document.getElementById("divide");
// let result = document.getElementById("result");

// add.addEventListener("click", () => {
//     result.textContent = Number(num1.value) + Number(num2.value);
// });
// subtract.addEventListener("click", () => {
//     result.textContent = Number(num1.value) - Number(num2.value);
// });
// multiply.addEventListener("click", () => {
//     result.textContent = Number(num1.value) * Number(num2.value);
// });
// divide.addEventListener("click", () => {
//     result.textContent = Number(num1.value) / Number(num2.value);
// });
// clean.addEventListener("click", () => {
//     result.textContent = "0";
//     num1.value = "";
//     num2.value = "";
// });

// Misol-17! Sahifada biror matn bo'lsin. Foydalanuvchi slayderni harakatlantirganida, matn hajmi o'zgaradi.

// Misol - 17!Solution!
// const resizableText = document.getElementById("resizableText");
// const fontSizeSlider = document.getElementById("fontSizeSlider");

// fontSizeSlider.addEventListener("input", () => {
//     resizableText.style.fontSize = fontSizeSlider.value + "px";
// });

// Misol-18! Ko'rsatmalar tugmasini bosganda ma'lumotlar paydo bo'lib, yana bosganda yashirinadi.

// const tugma = document.querySelector("#toggleInstructions");
// const matn = document.querySelector("#instructions");

// tugma.addEventListener("click", () => {
//     if (matn.style.display == "none") {
//         matn.style.display = "block";
//     } else {
//         matn.style.display = "none";
//     }
// });

// Misol-19! Bir nechta tab oynalari yarating. Foydalanuvchi har bir tabga bosganda tegishli mazmun ko'rsatilishi kerak.

// const buttons = document.querySelectorAll(".tabButton");
// const info1 = document.getElementById("tab1");
// const info2 = document.getElementById("tab2");
// const info3 = document.getElementById("tab3");
// buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//         info1.style.display = "none";
//         info2.style.display = "none";
//         info3.style.display = "none";
//         document.getElementById(button.dataset.target).style.display = "block";
//     });
// });

// Misol-20! Har bir tugma bosilganda matn rangi yoki fon rangi o'zgarib tursin.

// const coloredText = document.getElementById("coloredText");
// const changeTextColor = document.getElementById("changeTextColor");
// const changeBgColor = document.getElementById("changeBgColor");

// changeTextColor.addEventListener("click", () => {
//     coloredText.style.color = "red";
// });
// changeBgColor.addEventListener("click", () => {
//     coloredText.style.backgroundColor = "lightgreen";
// });

// Misol-21! Foydalanuvchi raqam kiritadi, va agar raqam musbat bo'lsa "Musbat raqam",
// manfiy bo'lsa "Manfiy raqam", 0 bo'lsa esa "Nol" deb chiqaradi.

// const numberInput = document.getElementById("numberInput");
// const checkNumber = document.getElementById("checkNumber");
// const numberOutput = document.getElementById("numberOutput");

// checkNumber.addEventListener("click", () => {
//     if (numberInput.value > 0) {
//         numberOutput.textContent = "Siz kiritgan raqam MUSBAT";
//     } else if (numberInput.value < 0) {
//         numberOutput.textContent = "Siz kiritgan raqam MANFIY";
//     } else {
//         numberOutput.textContent = "NOL kiritdingiz";
//     }
//     numberInput.value = "";
// });
const dropDown = document.getElementById("dropDown");
const dropDown2 = document.getElementById("dropDown2");

const modalFirstDropUp = document.getElementById("modalFirstDropUp");
const modalSecondDropUp = document.getElementById("modalSecondDropUp");
const navbar = document.getElementById("navbar");

function dropDownOpen() {
  dropDown.classList.toggle("dropDownStyle");
}

function dropDownOpen2() {
  dropDown2.classList.toggle("dropDownStyle2");
}

function navbarOpen() {
  navbar.style.display = "block";
}

function navbarClose() {
  navbar.style.display = "none";
}

function modalFirstDropUpOpen() {
  modalFirstDropUp.classList.toggle('first')
}

function modalFirstDropUpClose() {
  modalFirstDropUp.classList.toggle('first')
}

function modalSecondDropUpOpen() {
  modalSecondDropUp.classList.toggle('second')
  modalFirstDropUp.classList.toggle('first')
}

function modalSecondDropUpClose() {
  modalSecondDropUp.classList.toggle('second')
}

function modalGoBack() {
  modalSecondDropUp.classList.toggle('second')
  modalFirstDropUp.classList.toggle('first')
}
const dropDown = document.getElementById("dropDown");
const dropDown2 = document.getElementById("dropDown2");
const navbar = document.getElementById("navbar");

function dropDownOpen() {
  dropDown.classList.toggle("dropDownStyle");
  console.log(dropDown);
}

function dropDownOpen2() {
  dropDown2.classList.toggle("dropDownStyle2");
  console.log(dropDown2);
}

function navbarOpen() {
  navbar.style.display = "block";
}

function navbarClose() {
  navbar.style.display = "none";
}
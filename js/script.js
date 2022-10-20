const dropDown = document.getElementById('dropDown')
const navbar = document.getElementById('navbar')

function dropDownOpen() {
    dropDown.classList.toggle("dropDownStyle");
}

function navbarOpen() {
    navbar.style.display = 'block'
}

function navbarClose() {
    navbar.style.display= 'none'
}
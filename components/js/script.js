const openButton = document.getElementById("button_open_navbar");
const closeButton = document.getElementById("button_close_navbar");
const navBarMobile = document.getElementById("navbar");

openButton.addEventListener("click", openNavbar);
closeButton.addEventListener("click", closeNavbar);

function openNavbar(params) {
    
    navBarMobile.classList.add("open-navbar");
    openButton.classList.remove("open-button");

}

function closeNavbar(params) {
    
    navBarMobile.classList.remove("open-navbar");
    openButton.classList.add("open-button");

}
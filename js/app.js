// navigation toggle click-----------------------
function toggler_click() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('nav--expanded');
    const social = document.getElementById('social');
    social.classList.toggle('social--expanded');
}

const tabs = document.querySelectorAll(".tab__item");
const navs = document.querySelectorAll(".nav__item");

// tabs click------------------------------------
tabs.forEach((item) =>
    item.addEventListener("click", function () {
        removeActive(tabs, navs);
        setAction(this);
    }));

// nav click------------------------------------
navs.forEach((item) =>
    item.addEventListener("click", function () {
        removeActive(tabs, navs);
        setAction(this);
    }));

// Remove Active Navigation & Tabs    
function removeActive(tabs, navs) {

    //--------------Remove Active-----------------
    tabs.forEach((item) => {
        item.classList.remove("tab--active");
    });

    //--------------Remove Active-----------------
    navs.forEach((item) => {
        item.classList.remove("nav--active");
    });
}

// Set Active Navigation & Tabs    
function setAction(item) {
    const itemId = item.getAttribute("item_id");
    if (itemId == "1" || itemId == "11") {
        setClass(1, 11);
    }
    if (itemId == "2" || itemId == "22") {
        setClass(2, 22);
    }
    if (itemId == "3" || itemId == "33") {
        setClass(3, 33);
    }
    if (itemId == "4" || itemId == "44") {
        setClass(4, 44);
    }
    if (itemId == "5" || itemId == "55") {
        setClass(5, 55);
    }
}

function setClass(id, id2) {
    const element1 = document.querySelectorAll('[item_id="' + id + '"]');
    const element2 = document.querySelectorAll('[item_id="' + id2 + '"]');
    element1[0].classList.add('nav--active');
    element2[0].classList.add('tab--active');
    const nav = document.getElementById('nav');
    nav.classList.remove('nav--expanded');
    const social = document.getElementById('social');
    social.classList.remove('social--expanded');
}


/************************************ Formating ****************************** */
$(document).ready(function () {

    const numbers = document.querySelectorAll(".card__value");
    numbers.forEach((item) => {
        const number = currencyFormat(parseInt(item.innerHTML));
        if (number !== 'NaN') {
            item.innerHTML = number;
            // console.log(number);
        }
    });
});
function currencyFormat(num) {
    return num.toLocaleString();
}

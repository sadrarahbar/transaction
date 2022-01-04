//--------------------------------------- Show Page Function -----------------------------------------------
function showPage(pageId) {
    const page = pages[pageId];
    let pageElement = document.getElementById('page');

    //----------------------------------- Create page header ------------------------------------------------
    let pageHeader = `<div class="page__header animate__animated animate__flipInX" style="--animate-duration:0.5s;">
                            <svg class="icon icon--large">
                                <use xlink:href="images/sprite.svg#${page.pageIcon}"></use>
                            </svg>
                            <h2 class="page__title">${page.pageName}</h2>
                      </div>`;

    //-------------------------------------- Create plans ----------------------------------------------------
    let plans = '';
    let delay = 0.3;
    page.plans.forEach(plan => {

        //----------------------------------- plan header -------------------------------------------------
        let planHedaer = `<div class="plan__header">
                              <h3 class="plan__title">${plan.planName}</h3>
                          </div>`;

        //------------------------------------ plan body ----------------------------------------------------
        //-- add general cards
        const genCardData = plan.cards[0];
        let generalCard = `<div class="card">
                                <ul class="list card__list">
                                   <li class="list__item card__item">
                                       <span class="card__label">واریز:</span>
                                       <span class="card__value">${genCardData.cashDeposit}</span>
                                   </li>
                                   <li class="list__item card__item">
                                       <span class="card__label">برداشت:</span>
                                       <span class="card__value">${genCardData.cashWithdrawal}</span>
                                       </l i>
                                   <li class="list__item card__item">
                                       <span class="card__label">پرداخت تسهیلات:</span>
                                       <span class="card__value">${genCardData.paymentFacilities}</span>
                                   </li>
                                   <li class="list__item card__item">
                                       <span class="card__label">خرید شارژ و پرداخت قبض:</span>
                                       <span class="card__value">${genCardData.buyRecharges}</span>
                                   </li>
                                </ul>
                           </div>`;

        //-- add intra cards
        const intraCardData = plan.cards[1];
        let intraBankCard = `<div class="card card--tick card--red">
                                <h4 class="card__title">انتقال وجه درون بانکی</h4>
                                <ul class="list list--tick card__list">
                                    <li class="list__item card__item">
                                        <span class="card__label">از طریق شماره حساب:</span>
                                        <span class="card__value">${intraCardData.byAccountNumber}</span>
                                    </li>
                                    <li class="list__item card__item">
                                        <span class="card__label">کارت به کارت:</span>
                                        <span class="card__value">${intraCardData.cardToCard}</span>
                                    </li>
                                </ul>
                            </div>`;

        //-- add between cards
        const betCardData = plan.cards[2];
        let betweenBankCard = `<div class="card card--tick card--blue">
                                   <h4 class="card__title">انتقال وجه بین بانکی</h4>
                                   <ul class="list list--tick card__list">
                                       <li class="list__item card__item">
                                           <span class="card__label">کارت به کارت:</span>
                                           <span class="card__value">${betCardData.cardToCard}</span>
                                       </li>
                                       <li class="list__item card__item">
                                           <span class="card__label">پایا:</span>
                                           <span class="card__value">${betCardData.paya}</span>
                                       </li>
                                       <li class="list__item card__item">
                                           <span class="card__label">ساتنا:</span>
                                           <span class="card__value">${betCardData.paya}</span>
                                       </li>
                                   </ul>
                               </div>`;
        //--join all card
        let cards = generalCard + intraBankCard + betweenBankCard;
        let planBody = `<div class="plan__body">${cards}</div>`;

        //----------------------------------- plan footer ----------------------------------------------------
        //-- add help cards
        //-- add description
        let description = '';
        if (plan.cards[3].description.length !== 0) {
            let descriptions = '';
            plan.cards[3].description.forEach(des => {
                descriptions += `<li class="list__item card__item">
                                     <p class="card__value">${des}</p>
                                 </li>`;
            });
            description = `<div class="card card--tick card--green card--help">
                              <h4 class="card__title">توجه:</h4>
                              <ul class="list list--tick card__list">${descriptions}</ul>
                           </div>`;
        }

        //-- add notes
        let note = '';
        if (plan.cards[3].note.length !== 0) {
            let notes = '';
            plan.cards[3].note.forEach(note => {
                notes += `<li class="list__item card__item">
                             <p class="card__value">${note}</p>
                          </li>`;
            });
            note = `<div class="card card--tick card--green card--help">
                       <h4 class="card__title">تبصره:</h4>
                       <ul class="list list--tick card__list">${notes}</ul>
                    </div>`;
        }

        //--join all card
        let planFooter = `<div class="plan__footer">${description}${note}</div>`;
        //------------------------------------------------------------------------------------------------

        //--join all plans
        plans += `<div class="plan animate__animated animate__bounceInLeft" style="--animate-duration: ${delay += 0.5}s;">${planHedaer}${planBody}${planFooter}</div>`;
    });

    let pageBody = `<div class="page__body">${plans}</div>`;

    //--------------------------------- Create page Element ------------------------------------------------
    pageElement.innerHTML = pageHeader + pageBody;

    //-------------------------------- Format all number in page
    const numbers = document.querySelectorAll(".card__value");
    numbers.forEach((item) => {
        const number = currencyFormat(parseInt(item.innerHTML));
        if (number !== 'NaN') {
            item.innerHTML = number + `<span class='card__currency'>ریال</span>`;
        }
    });
};

function currencyFormat(num) {
    return num.toLocaleString();
}

//----------------------------------- Formating ----------------------------------
$(document).ready(function () {
    showPage(0);
    //-- Set Nice Scroll to Page Body
    // $('.page__body').niceScroll();
});


//---------------------------- navigation toggle click----------------------------
function toggler_click() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('nav--expanded');
    const social = document.getElementById('social');
    social.classList.toggle('social--expanded');
}

const tabs = document.querySelectorAll(".tab__item");
const navs = document.querySelectorAll(".nav__item");

//--------------------------------- tabs click------------------------------------
tabs.forEach((item) =>
    item.addEventListener("click", function () {
        removeActive(tabs, navs);
        setAction(this);
    }));

//--------------------------------- nav click------------------------------------
navs.forEach((item) =>
    item.addEventListener("click", function () {
        removeActive(tabs, navs);
        setAction(this);
    }));

//----------------------- Remove Active Navigation & Tabs ----------------------
function removeActive(tabs, navs) {

    //-- Remove Active-----------------
    tabs.forEach((item) => {
        item.classList.remove("tab--active");
    });

    //-- Remove Active-----------------
    navs.forEach((item) => {
        item.classList.remove("nav--active");
    });
}

//------------------------ Set Active Navigation & Tabs -------------------------
function setAction(item) {
    const itemId = item.getAttribute("item_id");
    if (itemId == "1" || itemId == "11") {
        setClass(1, 11);
        showPage(0);
    }
    if (itemId == "2" || itemId == "22") {
        setClass(2, 22);
        showPage(1);

    }
    if (itemId == "3" || itemId == "33") {
        setClass(3, 33);
        showPage(2);

    }
    if (itemId == "4" || itemId == "44") {
        setClass(4, 44);
        showPage(3);

    }
    if (itemId == "5" || itemId == "55") {
        setClass(5, 55);
        showPage(4);

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


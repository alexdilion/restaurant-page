import initialLoad from "./modules/initialLoad";
import pageLoad from "./modules/pageLoad";
import backgroundLoad from "./modules/backgroundLoad";

const PAGE_TABS = document.querySelectorAll(".page-tab a");
const BACKGROUND_WRAPPER = document.querySelector(".background-wrapper");
let currentTab = "home";

function styleTab(selected) {
    PAGE_TABS.forEach((tab) => {
        const tabParent = tab.parentElement;
        if (tab.getAttribute("data-tab") !== selected) {
            tabParent.classList.remove("selected-tab");
        } else {
            tabParent.classList.add("selected-tab");
        }
    });
}

function switchTab(e) {
    e.preventDefault();
    const tabElement = e.target;
    const tab = tabElement.getAttribute("data-tab");

    if (currentTab === tab) return;

    BACKGROUND_WRAPPER.classList.add("fade-out");
    styleTab(tab);
    pageLoad(tab);
    currentTab = tab;
}

PAGE_TABS.forEach((link) => {
    link.addEventListener("click", switchTab);
});

BACKGROUND_WRAPPER.addEventListener("transitionend", () => {
    backgroundLoad(currentTab);
    BACKGROUND_WRAPPER.classList.remove("fade-out");
});

initialLoad();

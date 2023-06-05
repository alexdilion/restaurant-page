import initialLoad from "./modules/initialLoad";
import pageLoad from "./modules/pageLoad";

const PAGE_TABS = document.querySelectorAll(".page-tab a");
const BACKGROUND_WRAPPER = document.querySelector(".background-wrapper")
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

    styleTab(tab)
    pageLoad(tab);
    currentTab = tab;
}

PAGE_TABS.forEach((link) => {
    link.addEventListener("click", switchTab);
});

initialLoad();

import initialLoad from "./modules/initialLoad";
import pageLoad from "./modules/pageLoad";
import backgroundLoad from "./modules/backgroundLoad";
import "./style/style.css";

let pageTabs = document.querySelectorAll(".page-tab a, .tab-button");
const BACKGROUND_WRAPPER = document.querySelector(".background-wrapper");

let currentTab = "home";

function styleTab(selected) {
    pageTabs.forEach((tab) => {
        const tabParent = tab.parentElement;
        if (tab.getAttribute("data-tab") !== selected) {
            tabParent.classList.remove("selected-tab");
        } else {
            tabParent.classList.add("selected-tab");
        }
    });
}

function setDotOffset() {
    const root = document.querySelector(":root");
    const homeTabPosition = document.querySelector(".page-tab a[data-tab='home']").getBoundingClientRect();
    const currentTabPosition = document.querySelector(`.page-tab a[data-tab="${currentTab}"]`).getBoundingClientRect();

    if (currentTab === "home") {
        root.style.setProperty("--dot-offset", "50%");
        return;
    }

    const offset = currentTabPosition.x + (currentTabPosition.width / 2) - homeTabPosition.x;
    root.style.setProperty("--dot-offset", `${offset}px`);
}

function switchTab(e) {
    if (e.target.nodeName === "A") e.preventDefault();

    const tabElement = e.target;
    const tab = tabElement.getAttribute("data-tab");

    if (currentTab === tab) return;

    BACKGROUND_WRAPPER.classList.add("fade-out");
    styleTab(tab);
    pageLoad(tab);

    if (tab === "home") {
        document.querySelectorAll(".tab-button").forEach((button) => {
            button.addEventListener("click", switchTab);
        });
    }

    currentTab = tab;
    setDotOffset();
}

initialLoad();
pageTabs = document.querySelectorAll(".page-tab a, .tab-button");

pageTabs.forEach((link) => {
    link.addEventListener("click", switchTab);
});

BACKGROUND_WRAPPER.addEventListener("transitionend", () => {
    backgroundLoad(currentTab);
    BACKGROUND_WRAPPER.classList.remove("fade-out");
});

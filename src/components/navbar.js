import logo from "../images/logo.png";

export default function loadNavBar() {
    const navContainer = document.querySelector(".navbar");

    const logoText = document.createElement("h1");
    logoText.classList.add("logo-text", "fancy-font");
    logoText.innerHTML = 'The <span class="accent-text">Coffee</span> Hut';
    navContainer.appendChild(logoText);

    const logoImage = document.createElement("img");
    logoImage.src = logo;
    logoImage.classList.add("logo-image");
    logoImage.setAttribute("alt", "The Coffee Hut logo; two coffee beans");
    navContainer.appendChild(logoImage);

    const tabContainer = document.createElement("ul");
    tabContainer.classList.add("nav-tabs");
    navContainer.appendChild(tabContainer);

    const homeTab = document.createElement("li");
    homeTab.innerHTML = '<a href="" data-tab="home">Home</a>';
    homeTab.classList.add("page-tab", "selected-tab");
    tabContainer.appendChild(homeTab);

    const menuTab = document.createElement("li");
    menuTab.innerHTML = '<a href="" data-tab="menu">Menu</a>';
    menuTab.classList.add("page-tab");
    tabContainer.appendChild(menuTab);

    const contactTab = document.createElement("li");
    contactTab.innerHTML = '<a href="" data-tab="contact">Contact</a>';
    contactTab.classList.add("page-tab");
    tabContainer.appendChild(contactTab);
}

export default function loadHome() {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    content.setAttribute("class", "home-container");

    const header = document.createElement("h2");
    header.classList.add("page-header");
    header.textContent = "Welcome to The Coffee Hut";
    content.appendChild(header);

    const introduction = document.createElement("p");
    introduction.classList.add("page-text");
    introduction.textContent =
        "Step into our cozy sanctuary and immerse yourself in the rich aromas, flavorful blends, and warm ambiance that make us your go-to coffee haven. Indulge in the perfect cup that will awaken your senses and leave you craving for more. Join us at Coffee Hut, where every sip is a delightful journey to coffee paradise.";
    content.appendChild(introduction);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    content.appendChild(buttonContainer);

    const menuButton = document.createElement("button");
    menuButton.setAttribute("type", "button");
    menuButton.classList.add("tab-button", "secondary-background");
    menuButton.setAttribute("data-tab", "menu");
    menuButton.textContent = "Our Menu";
    buttonContainer.appendChild(menuButton);

    const contactButton = document.createElement("button");
    contactButton.setAttribute("type", "button");
    contactButton.classList.add("tab-button", "accent-background");
    contactButton.setAttribute("data-tab", "contact");
    contactButton.textContent = "Contact Us";
    buttonContainer.appendChild(contactButton);
}

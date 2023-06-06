export default function loadHome() {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    content.setAttribute("class", "home-container");

    const header = document.createElement("h2");
    header.classList.add("page-header");
    header.textContent = "Welcome to The Coffee Hut!";
    content.appendChild(header);

    const introduction = document.createElement("p");
    introduction.classList.add("page-text");
    introduction.innerHTML =
        "Step into our cozy café and let the aroma of freshly brewed coffee embrace you. Our friendly team is here to serve you exceptional coffee, crafted with care and passion. Take a moment to unwind, savor the flavors, and create cherished memories in our welcoming space.";
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

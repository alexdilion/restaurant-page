import backgroundImage from "./background.jpg";

export default function loadHome() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const header = document.createElement("h2");
    header.classList.add("page-header");
    header.textContent = "Welcome to The Coffee Hut";
    content.appendChild(header);

    const introduction = document.createElement("p");
    introduction.classList.add("page-text");
    introduction.textContent =
        "Welcome to The Coffee Hut, your ultimate destination for a coffee experience like no other. Step into our cozy sanctuary and immerse yourself in the rich aromas, flavorful blends, and warm ambiance that make us your go-to coffee haven. Indulge in the perfect cup that will awaken your senses and leave you craving for more. Join us at Coffee Hut, where every sip is a delightful journey to coffee paradise.";
    content.appendChild(introduction);

    document.querySelector(".page-background").style.backgroundImage = `url(${backgroundImage})`;
}

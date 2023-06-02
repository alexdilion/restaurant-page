export default function pageLoad() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const logoText = document.createElement("h1");
    logoText.classList.add("logo-text");
    logoText.textContent = "The Coffee Hut";
    content.appendChild(logoText);

    const introduction = document.createElement("p");
    introduction.textContent =
        "Welcome to The Coffee Hut, your ultimate destination for a coffee experience like no other. Step into our cozy sanctuary and immerse yourself in the rich aromas, flavorful blends, and warm ambiance that make us your go-to coffee haven. Indulge in the perfect cup that will awaken your senses and leave you craving for more. Join us at Coffee Hut, where every sip is a delightful journey to coffee paradise.";
    content.appendChild(introduction);

    const shopImage = document.createElement("img");
    shopImage.setAttribute("src", "https://source.unsplash.com/pNIgH0y3upM/1920x1080");
    shopImage.setAttribute("height", "720px");
    shopImage.setAttribute("width", "1280px");
    shopImage.setAttribute("alt", "Coffee shop interior");
    content.appendChild(shopImage)
}
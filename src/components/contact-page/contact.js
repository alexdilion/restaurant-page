import backgroundImage from "./background.jpg";

export default function loadContact() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const header = document.createElement("h2");
    header.classList.add("page-header");
    header.textContent = "Contact us";
    content.appendChild(header);

    const contactText = document.createElement("p");
    contactText.textContent =
        "We'd love to hear from you! At Coffee Hut, your satisfaction is our top priority. If you have any questions, suggestions, or feedback, please reach out to us through the following channels:";
    content.append(contactText);

    const contactList = document.createElement("p");
    contactList.classList.add("contact-list");
    
    const emailInfo = document.createElement("li");
    emailInfo.textContent = "feedback@coffeehut.com";
    contactList.appendChild(emailInfo)

    const phoneInfo = document.createElement("li");
    phoneInfo.textContent = "012 345 6789";
    contactList.appendChild(phoneInfo)

    const addressInfo = document.createElement("li");
    addressInfo.textContent = "123, A Random Street, Randomville, Randomland";
    contactList.appendChild(addressInfo)

    content.appendChild(contactList)

    const background = new Image();
    background.src = backgroundImage;
    background.classList.add("page-background");
    background.setAttribute("alt", "Background");
    content.appendChild(background);
}

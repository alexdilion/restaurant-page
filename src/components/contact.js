export default function loadContact() {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    content.setAttribute("class", "contact-container")

    const header = document.createElement("h2");
    header.classList.add("page-header");
    header.textContent = "Contact us";
    content.appendChild(header);

    const contactText = document.createElement("p");
    contactText.textContent =
        "We'd love to hear from you! At Coffee Hut, your satisfaction is our top priority. If you have any questions, suggestions, or feedback, please reach out to us through the following channels:";
    content.append(contactText);

    const contactList = document.createElement("ul");
    contactList.classList.add("contact-list");
    
    const emailInfo = document.createElement("li");
    emailInfo.textContent = "Email: feedback@coffeehut.com";
    contactList.appendChild(emailInfo)

    const phoneInfo = document.createElement("li");
    phoneInfo.textContent = "Phone: 012 345 6789";
    contactList.appendChild(phoneInfo)

    const addressInfo = document.createElement("li");
    addressInfo.textContent = "Address: 123, Random Street, Randomville, Randomland";
    contactList.appendChild(addressInfo)

    content.appendChild(contactList)
}

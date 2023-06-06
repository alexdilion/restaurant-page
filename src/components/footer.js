import logo from "../images/inverted-github-mark.png";

export default function loadFooter() {
    const footer = document.querySelector("footer");

    const credit = document.createElement("a");
    credit.classList.add("background-credit");
    credit.setAttribute("href", "https://pastebin.com/AWmNbmJE");
    credit.textContent = "Credit for images";
    footer.appendChild(credit);

    const source = document.createElement("a");
    source.setAttribute("href", "https://github.com/alexdilion/restaurant-page");
    source.innerHTML = `<img src="${logo}" alt="GitHub Logo"/>\nSource Code`;
    source.classList.add("repo-link");
    footer.appendChild(source);
}

import homeBackground from "../images/homeBackground.jpg";
import menuBackground from "../images/menuBackground.jpg";
import contactBackground from "../images/contactBackground.jpg";

const PAGE_BACKGROUND = document.querySelector(".page-background");

export default function backgroundLoad(page) {
    console.log("Working");
    switch (page) {
        case "home":
            PAGE_BACKGROUND.style.backgroundImage = `url(${homeBackground})`;
            break;
        case "menu":
            PAGE_BACKGROUND.style.backgroundImage = `url(${menuBackground})`;
            break;
        case "contact":
            PAGE_BACKGROUND.style.backgroundImage = `url(${contactBackground})`;
            break;
        default:
            break;
    }
}

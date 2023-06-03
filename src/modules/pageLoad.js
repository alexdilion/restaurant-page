import loadHome from "../components/home-page/home";
import loadMenu from "../components/menu-page/menu";
import loadContact from "../components/contact-page/contact";

export default function pageLoad(page) {
    if (page === "home") {
        loadHome();
    } else if (page === "menu") {
        loadMenu();
    } else if (page === "contact") {
        loadContact();
    }
}

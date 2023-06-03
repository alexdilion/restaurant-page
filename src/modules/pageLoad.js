import loadHome from "../pages/home";
import loadMenu from "../pages/menu";
import loadContact from "../pages/contact";

export default function pageLoad(page) {
    if (page === "home") {
        loadHome();
    } else if (page === "menu") {
        loadMenu();
    } else if (page === "contact") {
        loadContact();
    }
}

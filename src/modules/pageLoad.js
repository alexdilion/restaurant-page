import loadHome from "../components/home";
import loadMenu from "../components/menu";
import loadContact from "../components/contact";

export default function pageLoad(page) {
    if (page === "home") {
        loadHome();
    } else if (page === "menu") {
        loadMenu();
    } else if (page === "contact") {
        loadContact();
    }
}

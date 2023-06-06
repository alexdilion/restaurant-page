import pageLoad from "./pageLoad";
import backgroundLoad from "./backgroundLoad";
import loadNavBar from "../components/navbar";
import loadFooter from "../components/footer";

export default function initialLoad() {
    loadNavBar();
    pageLoad("home");
    loadFooter();
    backgroundLoad("home");
}


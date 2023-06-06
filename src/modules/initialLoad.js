import pageLoad from "./pageLoad";
import backgroundLoad from "./backgroundLoad";
import loadNavBar from "../components/navbar";

export default function initialLoad() {
    loadNavBar();
    pageLoad("home");
    backgroundLoad("home");
}


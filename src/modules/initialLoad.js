import pageLoad from "./pageLoad";
import backgroundLoad from "./backgroundLoad";

export default function initialLoad() {
    backgroundLoad("home");
    pageLoad("home");
}


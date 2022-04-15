import { newDialog } from "./dialog";

newDialog("#offcanvas-menu", "#show-offcanvas-menu");

window.addEventListener("load", () => {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/sw.js");
    }
});

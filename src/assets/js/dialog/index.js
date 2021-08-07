// Fylgja (getfylgja.com)
// Licensed under MIT Open Source

import dialogPolyfill from "dialog-polyfill";
import tabLock from "../tablock";

function newDialog(id, button, backdrop = true) {
    const dialog = document.querySelector(id);
    const btn = document.querySelector(button);

    if (!dialog) return;
    if (!btn) return;

    if (typeof HTMLDialogElement !== "function") {
        dialogPolyfill.registerDialog(dialog);
    }

    const dialogScrollLock = (use = true) => {
        document.body.style.overflow = use ? "hidden" : "";
    };

    const dialogClose = (target, e, dialog) => {
        if (!e.target.closest(target)) return;
        dialog.close();
        btn.setAttribute("aria-expanded", "false");
    };

    const dialogCloseOnBackdrop = (e, dialog) => {
        const rect = dialog.getBoundingClientRect();
        const isInDialog =
            rect.top <= e.clientY &&
            e.clientY <= rect.top + rect.height &&
            rect.left <= e.clientX &&
            e.clientX <= rect.left + rect.width;

        if (!isInDialog) {
            dialog.close();
        }
    };

    btn.addEventListener("click", () => {
        if (backdrop) {
            dialog.showModal();
            dialogScrollLock();
            tabLock(dialog);
            btn.setAttribute("aria-expanded", "true");
        } else {
            dialog.show();
            btn.setAttribute("aria-expanded", "true");
        }
    });

    dialog.addEventListener("click", (e) => {
        dialogClose(".close", e, dialog);
        dialogCloseOnBackdrop(e, dialog);
    });

    if (backdrop) {
        dialog.addEventListener("close", () => dialogScrollLock(false));
        dialog.addEventListener("cancel", () => dialogScrollLock(false));
    }
}

export default newDialog;

// Source https://gist.github.com/GrimLink/1b9383b51d7317969397aa8b634ad6f4

import dialogPolyfill from "dialog-polyfill/dist/dialog-polyfill.js";

export function newDialog(id, button, backdrop = true) {
    const dialog = document.querySelector(id);
    const btn = document.querySelector(button);
    if (!dialog || !btn) return;
    if (typeof HTMLDialogElement !== "function") {
        dialogPolyfill.registerDialog(dialog);
    }

    /**
     * Lock the screen when the dialog is open
     * Can be dropped when `:has` is fully supported in all browsers
     *
     * @param {boolean} use
     */
    const dialogScrollLock = (use = true) => {
        document.body.style.overflow = use ? "hidden" : "";
    };

    /**
     * Handles the close of the dialog and the button state
     *
     * @param {string} target
     * @param {Event} event
     * @param {HTMLDialogElement} dialog
     */
    const dialogClose = (target, event, dialog) => {
        if (!event.target.closest(target)) return;
        dialog.close();
        btn.setAttribute("aria-expanded", "false");
    };

    /**
     * check if clicked outside of the dialog
     *
     * @param {Event} event
     * @param {HTMLDialogElement} dialog
     */
    const dialogCloseOnBackdrop = (event, dialog) => {
        const rect = dialog.getBoundingClientRect();
        const isInDialog =
            rect.top <= event.clientY &&
            event.clientY <= rect.top + rect.height &&
            rect.left <= event.clientX &&
            event.clientX <= rect.left + rect.width;

        if (!isInDialog) {
            dialog.close("dismiss");
        }
    };

    btn.addEventListener("click", () => {
        btn.setAttribute("aria-expanded", "true");

        if (backdrop) {
            dialog.showModal();
            dialogScrollLock();
        } else {
            dialog.show();
        }
    });

    dialog.addEventListener("click", (event) => {
        dialogClose(".close", event, dialog);
    });

    dialog.addEventListener("mouseup", (event) => {
        dialogCloseOnBackdrop(event, dialog);
    });

    if (backdrop) {
        dialog.addEventListener("close", () => dialogScrollLock(false));
        dialog.addEventListener("cancel", () => dialogScrollLock(false));
    }
}

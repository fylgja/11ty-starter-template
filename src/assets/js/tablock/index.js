// Fylgja (getfylgja.com)
// Licensed under MIT Open Source

/**
 * JS helper util that locks the tab action to a specific element area.
 * E.g. Modals and Offcanvas components
 *
 * @param {String} target
 */
const tabLock = (target) => {
    // Find all focusable children
    const tabItems =
        'button, [href], [tabindex]:not([tabindex="-1"]), input, select, textarea';
    let targetItems = target.querySelectorAll(tabItems);

    // Convert NodeList to Array
    targetItems = Array.prototype.slice.call(targetItems);
    const firstFocusable = targetItems[0];
    const lastFocusable = targetItems[targetItems.length - 1];

    // Set focus to first element
    setTimeout(() => firstFocusable.focus(), 100);

    // Listen for and trap the keyboard
    target.addEventListener("keydown", (e) => {
        // Check for TAB key press
        if (e.keyCode === 9) {
            // SHIFT + TAB
            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    e.preventDefault();
                    lastFocusable.focus();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    e.preventDefault();
                    firstFocusable.focus();
                }
            }
        }
    });
};

export default tabLock;

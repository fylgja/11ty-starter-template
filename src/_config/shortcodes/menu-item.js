module.exports = function menuItem(
    content,
    url,
    className = "",
    pageUrl,
    isExternal = false
) {
    const isActive = pageUrl === url;
    const current = isActive ? 'aria-current="page"' : "";
    const external = isExternal
        ? 'rel="noopener noreferrer" target="_blank"'
        : "";
    let classes = className;
    if (isActive) classes += " is-active";

    return `<a href="${url}" class="${classes}" ${current} ${external}>${content}</a>`;
};

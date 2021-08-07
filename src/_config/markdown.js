const slugify = require("slugify");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItExternalAnchor = require("markdown-it-external-anchor");
const { url } = require("../_data/meta");

const slugifyStr = (str) => {
    if (str instanceof String) {
        str = str.toString();
    } else if (typeof str !== "string") {
        return "";
    }

    return slugify(str, {
        replacement: "-",
        lower: true,
    });
};

const markdownItOptions = { html: true };
const markdownItAnchorOptions = {
    level: [2, 3],
    permalink: true,
    permalinkClass: "hashlink",
    permalinkSymbol: "",
    permalinkAttrs: () => ({
        "aria-hidden": true,
        tabindex: "-1",
    }),
    slugify: slugifyStr,
};

const markdownConfig = markdownIt(markdownItOptions)
    .use(markdownItExternalAnchor, {
        domain: url,
        class: "external",
    })
    .use(markdownItAnchor, markdownItAnchorOptions);

module.exports = markdownConfig;

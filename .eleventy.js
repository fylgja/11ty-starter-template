const { input, output, url } = require("./src/_data/meta");

const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const embedYouTube = require("eleventy-plugin-youtube-embed");
const sitemap = require("@quasibit/eleventy-plugin-sitemap");

const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginTOC = require("eleventy-plugin-nesting-toc");
const markdownConfig = require("./src/_config/markdown");
const svgContents = require("eleventy-plugin-svg-contents");

const browserSyncConfig = require("./src/_config/browserSync");
const minifyHtml = require("./src/_config/minifyHtml");
const CleanCSS = require("clean-css");

const imageShortcode = require("./src/_config/shortcodes/image");
const menuitem = require("./src/_config/shortcodes/menu-item");
const { sortByName, sortByOrder } = require("./src/_config/filters/sortby");
const {
    isArray,
    isBoolean,
    isNumber,
    isObject,
    isString,
} = require("./src/_config/filters/types");

const isProd = process.env.ELEVENTY_ENV === "prod";

module.exports = function (config) {
    config.setLibrary("md", markdownConfig);
    config.setBrowserSyncConfig(browserSyncConfig);
    config.addWatchTarget("./src/assets/sass/");
    config.addWatchTarget("./src/assets/js/");

    // Copy
    config.addPassthroughCopy({ "src/assets/images": "images" });
    config.addPassthroughCopy({ "src/assets/icons": "images" });
    config.addPassthroughCopy({ "src/assets/webapp": "./" });
    config.addPassthroughCopy({ "src/assets/fonts": "fonts" });
    if (isProd) config.addPassthroughCopy({ "src/assets/css/*.map": "css" });

    // Plugins
    config.addPlugin(syntaxHighlight, { preAttributes: { tabindex: 0 } });
    config.addPlugin(embedYouTube, {
        lite: {
            css: { inline: true },
            js: { inline: true },
        },
    });
    config.addPlugin(sitemap, { sitemap: { hostname: url } });
    config.addPlugin(pluginRss);
    config.addPlugin(pluginTOC, { tags: ["h2", "h3"] });
    config.addPlugin(svgContents);

    // Shortcodes
    config.addNunjucksAsyncShortcode("image", imageShortcode);
    config.addShortcode("year", () => `${new Date().getFullYear()}`);
    config.addPairedShortcode("menuItem", menuitem);

    // Filters
    config.addFilter("isArray", isArray);
    config.addFilter("isBoolean", isBoolean);
    config.addFilter("isNumber", isNumber);
    config.addFilter("isObject", isObject);
    config.addFilter("isString", isString);
    config.addFilter("cssmin", (code) => new CleanCSS({}).minify(code).styles);
    config.addFilter("sortByName", sortByName);
    config.addFilter("sortByOrder", sortByOrder);

    // Collections

    // Transform
    // These transforms should always go last
    // Because they look at the final HTML.
    if (isProd) config.addTransform("minify", minifyHtml);

    return {
        dir: {
            output,
            input,
            includes: "_includes",
            layouts: `_layouts`,
            data: "_data",
        },
        templateFormats: ["md", "njk", "11ty.js"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        passthroughFileCopy: true,
    };
};

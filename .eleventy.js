const { EleventyRenderPlugin } = require("@11ty/eleventy");

// Build tools
const eleventySass = require("@grimlink/eleventy-plugin-sass");
const sass = require("sass");
const CleanCSS = require("clean-css");
const minifyHtml = require("./src/_config/minifyHtml");
const imageShortcode = require("./src/_config/image");
const dayjs = require("dayjs");

// Generators
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const mdIt = require("markdown-it");
const mdItExternalAnchor = require("markdown-it-external-anchor");
const sitemap = require("@quasibit/eleventy-plugin-sitemap");

// Config
const isProd = process.env.ELEVENTY_ENV === "prod";
const env = require("./src/_data/env.js");

module.exports = function (eleventyConfig) {
    eleventyConfig.setQuietMode(!isProd);
    eleventyConfig.setLibrary(
        "md",
        mdIt({
            html: true,
        }).use(mdItExternalAnchor, {
            domain: env.url,
            class: "external",
        })
    );

    // Copy
    eleventyConfig.addPassthroughCopy({
        "src/**/*.{jpg,png,svg,webp}": "images",
    });

    // Plugins
    eleventyConfig.addPlugin(EleventyRenderPlugin);
    eleventyConfig.addPlugin(eleventySass, { sass, outputPath: "css" });
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(sitemap, { sitemap: { hostname: env.url } });

    // Filters
    eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
    eleventyConfig.addLiquidShortcode("image", imageShortcode);
    eleventyConfig.addJavaScriptFunction("image", imageShortcode);
    eleventyConfig.addFilter(
        "cssmin",
        (code) => new CleanCSS({}).minify(code).styles
    );
    eleventyConfig.addFilter("assetUrl", (url) => url + env.hash);
    eleventyConfig.addFilter("toISOString", (dateString) =>
        new Date(dateString).toISOString()
    );
    eleventyConfig.addFilter("formatDate", (date, format) =>
        dayjs(date).format(format)
    );

    // Minify
    if (isProd) {
        eleventyConfig.addTransform("minify", minifyHtml);
    }

    return {
        dir: {
            input: "src",
            output: "_site",
            layouts: "_layouts",
        },
    };
};

const { EleventyRenderPlugin } = require("@11ty/eleventy");

// Build tools
const eleventySass = require("@grimlink/eleventy-plugin-sass");
const sass = require("sass");
const CleanCSS = require("clean-css");
const minifyHtml = require("./src/_config/minifyHtml");
const imageShortcode = require("./src/_config/image");

// Generators
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const sitemap = require("@quasibit/eleventy-plugin-sitemap");

// Config
const isProd = process.env.ELEVENTY_ENV === "prod";
const baseUrl = isProd ? "https://site.dev" : "http://localhost:8080";
const { version } = require("./package.json");

module.exports = function (eleventyConfig) {
    eleventyConfig.setQuietMode(!isProd);

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
    eleventyConfig.addPlugin(sitemap, { sitemap: { hostname: baseUrl } });

    // Filters
    eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
    eleventyConfig.addLiquidShortcode("image", imageShortcode);
    eleventyConfig.addJavaScriptFunction("image", imageShortcode);
    eleventyConfig.addFilter(
        "cssmin",
        (code) => new CleanCSS({}).minify(code).styles
    );
    eleventyConfig.addFilter("assetUrl", (url) =>
        isProd ? url + "?=v" + version : url
    );
    eleventyConfig.addFilter("readableDate", (dateObj) =>
        dateObj.toISOString()
    );
    eleventyConfig.addFilter("htmlDateString", (dateObj) =>
        dateObj.toISOString()
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

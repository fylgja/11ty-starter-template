const Image = require("@11ty/eleventy-img");
const path = require("path");

async function imageShortcode(src, alt = "", options = {}) {
    const { widths = [320, 640], sizes = "100vw", lazy = true } = options;
    const originalFormat = path.extname(src).replace(/\./g, "");
    const metadata = await Image(src, {
        widths,
        formats:
            originalFormat === "svg"
                ? [originalFormat]
                : ["avif", "webp", originalFormat],
        urlPath: "/images/gen",
        outputDir: "_site/images/gen",
    });

    const imageAttributes = {
        alt,
        sizes,
        loading: lazy ? "lazy" : "eager",
        decoding: lazy ? "async" : "sync",
    };

    return Image.generateHTML(metadata, imageAttributes, {
        whitespaceMode: "inline",
    });
}

module.exports = imageShortcode;

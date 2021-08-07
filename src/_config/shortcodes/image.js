const { output } = require("../../_data/meta");
const path = require("path");
const Image = require("@11ty/eleventy-img");

module.exports = async function imageShortcode(
    src,
    alt = "",
    widths = false,
    sizes = "100vw"
) {
    const originalFormat = path.extname(src).replace(/\./g, "");
    let imgSizes = [null];
    let imgName = "";
    switch (widths) {
        case "thumbnail":
            imgSizes = [150, 300];
            imgName = "thumbnail";
            break;

        case "small":
            imgSizes = [350, 620];
            imgName = "small";
            break;

        case "medium":
            imgSizes = [500, 620, 920];
            imgName = "medium";
            break;

        case "large":
            imgSizes = [1200, 1600];
            imgName = "large";
            break;

        case "screen":
            imgSizes = [null, 350, 620, 920, 1200, 1920];
            break;

        default:
            imgSizes = widths;
            break;
    }

    let metadata = await Image(src, {
        widths: [imgSizes],
        formats:
            originalFormat === "svg"
                ? [originalFormat]
                : ["webp", originalFormat],
        urlPath: "/images/gen",
        outputDir: `${output}/images/gen`,
        duration: "1d",
        useCache: true,
        filenameFormat: function (_id, src, width, format, _options) {
            const extension = path.extname(src);
            const name = path.basename(src, extension);
            let suffix = `${width}w`;
            return `${name}-${suffix}.${format}`;
        },
    });

    let imageAttributes = {
        alt,
        sizes,
        loading: "lazy",
        decoding: "async",
    };

    return Image.generateHTML(metadata, imageAttributes, {
        whitespaceMode: "inline",
    });
};

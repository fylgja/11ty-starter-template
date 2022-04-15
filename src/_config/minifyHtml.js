const htmlmin = require("html-minifier");

function minifyHtml(content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
        let minified = htmlmin.minify(content, {
            removeAttributeQuotes: true,
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            removeComments: true,
            sortClassName: true,
            sortAttributes: true,
            useShortDoctype: true,
        });
        return minified;
    }

    return content;
}

module.exports = minifyHtml;

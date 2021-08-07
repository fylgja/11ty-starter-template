const htmlmin = require("html-minifier");

function minifyHtml(content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
        // Disable if you use styles in SVG's that are inline
        let minified = htmlmin.minify(content, {
            removeAttributeQuotes: true,
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            removeComments: true,
            sortClassName: true,
            sortAttributes: true,
            useShortDoctype: true,
            minifyCSS: true, // *1
            minifyJS: true,
        });
        return minified;
    }

    return content;
}

module.exports = minifyHtml;

/**
 * Strips filename from a string
 * Useful is you want to use the layout as a class
 *
 * @source https://11ty.rocks/eleventyjs/content/#stripfilename-filter
 * @param {string} file
 * @return {string} string of filename without extension
 */
module.exports = (file) => {
    return file.replace(/\.[^/.]+$/, "");
};

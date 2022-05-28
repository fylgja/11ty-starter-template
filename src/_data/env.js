// You can use the package.json version or the date for cache busting
// isProd ? new Date().toISOString() : "dev";

const { version } = require("../../package.json");
const isProd = process.env.ELEVENTY_ENV === "prod";
const cacheHash = isProd ? version : "dev";

module.exports = {
    url: isProd ? "https://11ty-fylgja.netlify.app" : "http://localhost:8080",
    hash: "?=v" + cacheHash,
};

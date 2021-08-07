const { siteName, siteDescription, themeColor } = require("./_data/meta");

const webmanifest = {
    name: siteName,
    short_name: siteName,
    description: siteDescription,
    start_url: "/",
    icons: [
        {
            src: "/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
        },
        {
            src: "/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
        },
        {
            src: "/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
        },
        {
            src: "/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
        },
    ],
    theme_color: themeColor,
    background_color: themeColor,
    display: "standalone",
    orientation: "any",
};

exports.data = {
    permalink: "/site.webmanifest",
    layout: null,
    eleventyExcludeFromCollections: true,
};

exports.render = function () {
    return JSON.stringify(webmanifest);
};

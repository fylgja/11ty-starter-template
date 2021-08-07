const { socials } = require("./meta");
const TwitterUrl = `https://twitter.com/${socials.twitter}`;
const YoutubeUrl = `https://youtube.com/${socials.youtube}`;

module.exports = {
    main: [
        {
            text: "About us",
            url: "/about/",
        },
        {
            text: "Blog",
            url: "/blog/",
        },
    ],
    offcanvas: [
        {
            text: "About us",
            url: "/about/",
        },
        {
            text: "Blog",
            url: "/blog/",
        },
        {
            text: "Contact",
            url: "/contact/",
        },
    ],
    about: [
        {
            text: "About us",
            url: "/about/",
        },
        {
            text: "Blog",
            url: "/blog/",
        },
        {
            text: "Contact",
            url: "/contact/",
        },
    ],
    socials: [
        {
            icon: "twitter",
            text: "Twitter",
            url: TwitterUrl,
            external: true,
        },
        {
            icon: "youtube",
            text: "Youtube",
            url: YoutubeUrl,
            external: true,
        },
    ],
};

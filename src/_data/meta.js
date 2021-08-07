const url =
    process.env.ELEVENTY_ENV === "prod"
        ? "https://site.dev"
        : "http://localhost:8080";

module.exports = {
    env: process.env.ELEVENTY_ENV,
    output: "_site",
    input: "src",
    url,
    themeColor: "#fff",
    themeColorDark: "#111",
    siteName: "11ty Fylgja",
    siteDescription: "My cool new site",
    author: "You",
    email: "",
    phone: "",
    address: "",
    socials: {
        facebook: "",
        instagram: "",
        twitter: "",
        youtube: "",
        linkedin: "",
        github: "",
    },
};

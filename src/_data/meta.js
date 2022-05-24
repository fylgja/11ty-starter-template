const isProd = process.env.ELEVENTY_ENV === "prod";

module.exports = {
    url: isProd ? "https://11ty-fylgja.netlify.app" : "http://localhost:8080",
    author: "Your Name",
    siteName: "New 11ty Fylgja Blog",
    siteDescription: "Your cool new blog, built with Eleventy and Fylgja CSS.",
    themeColor: "#6001ff",
    email: "info@site.dev",
    phone: "+47 988 988 988",
    address: {
        name: "Build with Fylgja",
        street: "Fylgja 11",
        postcode: "00-000",
        city: "Zwollywood",
        region: "Overijsel",
        country: "Netherlands",
    },
    socials: {
        twitter: "FylgjaDev",
        github: "fylgja",
    },
};

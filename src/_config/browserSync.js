const fs = require("fs");
const { output } = require("../_data/meta");

module.exports = {
    callbacks: {
        ready: function (err, bs) {
            bs.addMiddleware("*", (req, res) => {
                const content_404 = fs.readFileSync(`${output}/404.html`);
                // Add 404 http status code in request header.
                res.writeHead(404, {
                    "Content-Type": "text/html; charset=UTF-8",
                });
                // Provides the 404 content without redirect.
                res.write(content_404);
                res.end();
            });
        },
    },
};

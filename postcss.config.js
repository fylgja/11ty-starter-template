const postcssPresetEnv = require("postcss-preset-env");
const cssnano = require("cssnano");
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
    plugins: [
        postcssPresetEnv({
            stage: 3,
            features: { "custom-properties": false },
        }),
        cssnano({
            preset: ["default", { calc: false }],
        }),
        purgecss({
            content: ["_site/**/*.html"],
            safelist: [/^\:/],
        }),
    ],
};

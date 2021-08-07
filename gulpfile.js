const { src, dest, series, watch } = require("gulp");
const { input, output } = require("./src/_data/meta.js");
const isProduction = process.env.NODE_ENV === "production";

const Fiber = require("fibers");
const sass = require("gulp-sass");
sass.compiler = require("sass");

const postcss = require("gulp-postcss");
const postcssPresetEnv = require("postcss-preset-env");
const cssnano = require("cssnano");
const purgecss = require("@fullhuman/postcss-purgecss");

const sassTask = () => {
    const sourcemaps = !isProduction;
    const sassConfig = {
        fiber: Fiber,
        includePaths: ["node_modules"],
    };

    return src(`${input}/assets/sass/**/*.scss`, { sourcemaps })
        .pipe(sass(sassConfig).on("error", sass.logError))
        .pipe(dest(`${output}/css`, { sourcemaps: "." }));
};

const minifyCss = () => {
    const presetEnvConfig = {
        stage: 3,
        features: { "custom-properties": false },
    };

    const cssnanoConfig = {
        preset: ["default", { calc: false }],
    };

    const purgecssConfig = {
        content: [`${output}/**/*.html`],
        safelist: [/^\:/, /lite-youtube/, /backdrop/],
    };

    const plugins = [
        postcssPresetEnv(presetEnvConfig),
        cssnano(cssnanoConfig),
        purgecss(purgecssConfig),
    ];

    return src(`${output}/css/*.css`)
        .pipe(postcss(plugins))
        .pipe(dest(`${output}/css`));
};

const watcher = () => {
    watch(`${input}/assets/sass/`, { ignoreInitial: true }, sassTask);
};

exports.default = series(sassTask, minifyCss);
exports.dev = series(sassTask, watcher);

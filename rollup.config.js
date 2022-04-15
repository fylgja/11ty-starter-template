import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const isProd = process.env.NODE_ENV === "production";

// *1: Force to false to avoid minification errors with the dialogPolyfill
const terserOptions = { toplevel: false }; // *1

const pluginsProd = [nodeResolve(), commonjs(), terser(terserOptions)];
const pluginsDev = [nodeResolve(), commonjs()];
const plugins = isProd ? pluginsProd : pluginsDev;

const sourcemap = isProd ? false : true;
const watch = isProd ? { clearScreen: false } : {};

export default () => {
    return [
        {
            input: "src/assets/js/main.js",
            output: { dir: "_site/js", format: "iife", sourcemap },
            watch,
            plugins,
        },
        {
            input: "src/assets/js/sw.js",
            output: { file: "_site/sw.js", format: "cjs" },
            watch,
            plugins,
        },
    ];
};

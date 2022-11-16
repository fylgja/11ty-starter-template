import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { minify } from "rollup-plugin-esbuild";

const isProd = process.env.NODE_ENV === "production";
const pluginsProd = [nodeResolve(), commonjs(), minify()];
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

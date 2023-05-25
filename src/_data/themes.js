const colors = require("@fylgja/colors");
const colorsHsl = require("@fylgja/colors/hsl");

module.exports = {
    default: {
        name: "Default",
        theme: "#1565c1",
        colors: false,
    },
    dark: {
        name: "Night",
        theme: "#1565c1",
        colors: {
            "--color-bg": "#111",
            "--color-text": "#fff",
            "--color-text-alt": "hsl(0 0% 100% / 82%)",
            "--color-text-muted": "hsl(0 0% 100% / 56%)",
            "--code-bg": "hsl(0 0% 20%)",
            "--code-color": "#fff",
            "--shadow-weight": "25%",
            "--shadow-color": "220 40% 2%",
        },
    },
    forest: {
        name: "Forest",
        theme: colors.green[8],
        colors: {
            "--color-theme": colors.green[8],
            "--color-theme-fade": `hsl(${colorsHsl.green[8]} / 20%)`,
            "--color-on-theme": colors.green[0],
            "--btn-theme-focus-bg": colors.green[6],
            "--btn-theme-active-bg": colors.green[9],
            "--selection-bg": `hsl(${colorsHsl.green[8]} / 20%)`,
        },
    },
    sand: {
        name: "Sand",
        theme: colors.yellow[5],
        colors: {
            "--color-theme": colors.yellow[5],
            "--color-theme-fade": `hsl(${colorsHsl.yellow[5]} / 20%)`,
            "--color-on-theme": "#111",
            "--link-color": colors.yellow[9],
            "--btn-theme-focus-bg": colors.yellow[7],
            "--btn-theme-active-bg": colors.yellow[9],
            "--selection-bg": `hsl(${colorsHsl.yellow[5]} / 20%)`,
        },
    },
    lava: {
        name: "Lava",
        theme: colors.red[7],
        colors: {
            "--color-theme": colors.red[5],
            "--color-theme-fade": `hsl(${colorsHsl.red[9]} / 20%)`,
            "--color-on-theme": "#111",
            "--btn-theme-focus-bg": colors.red[7],
            "--btn-theme-active-bg": colors.red[9],
            "--selection-bg": `hsl(${colorsHsl.red[8]} / 20%)`,
        },
    },
};

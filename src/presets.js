export const defaultThemeConfig = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                primary: {
                    light: "#BBE5ED",
                    main: "#2F9CB1",
                    dark: "#1A5561",
                    contrastText: "#fff"
                },
                secondary: {
                    light: "#BFBCCB",
                    main: "#B399A2",
                    dark: "#986C6A",
                    contrastText: "#fff"
                },
            }
            : {
                primary: {
                    light: "#BBE5ED",
                    main: "#2F9CB1",
                    dark: "#1A5561",
                    contrastText: "#000"
                },
                secondary: {
                    light: "#BFBCCB",
                    main: "#B399A2",
                    dark: "#986C6A",
                    contrastText: "#000"
                },
            }),
    }
});
export const ATATCThemeConfig = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                primary: {
                    light: "#B0BFBD",
                    main: "#7DA198",
                    dark: "#4D6A63",
                    contrastText: "#fff"
                },
                secondary: {
                    light: "#E7CFCD",
                    main: "#CA9691",
                    dark: "#B66E68",
                    contrastText: "#fff"
                },
            }
            : {
                primary: {
                    light: "#B0BFBD",
                    main: "#7DA198",
                    dark: "#4D6A63",
                    contrastText: "#000"
                },
                secondary: {
                    light: "#E7CFCD",
                    main: "#CA9691",
                    dark: "#B66E68",
                    contrastText: "#000"
                },
            }),
    }
});
export const cambridgeBlueThemeConfig = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                primary: {
                    light: "#A0ECD0",
                    main: "#88BB92",
                    dark: "#7B886B",
                    contrastText: "#fff"
                },
                secondary: {
                    light: "#CEB6BC",
                    main: "#AD858F",
                    dark: "#93626E",
                    contrastText: "#fff"
                },
            }
            : {
                primary: {
                    light: "#A0ECD0",
                    main: "#88BB92",
                    dark: "#7B886B",
                    contrastText: "#000"
                },
                secondary: {
                    light: "#CEB6BC",
                    main: "#AD858F",
                    dark: "#93626E",
                    contrastText: "#000"
                },
            }),
    }
});
//# sourceMappingURL=presets.js.map
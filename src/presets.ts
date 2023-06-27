import {StrictThemeMode, ThemeConfig} from "./types";

export const defaultThemeConfig: ThemeConfig = (mode: StrictThemeMode) => ({
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

export const ATATCThemeConfig: ThemeConfig = (mode: StrictThemeMode) => ({
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

export const cambridgeThemeConfig: ThemeConfig = (mode: StrictThemeMode) => ({
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

export const winterThemeConfig: ThemeConfig = (mode: StrictThemeMode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                primary: {
                    light: "#749ace",
                    main: "#4F709C",
                    dark: "#213555",
                    contrastText: "#fff"
                },
                secondary: {
                    light: "#F5EFE7",
                    main: "#D8C4B6",
                    dark: "#cca185",
                    contrastText: "#fff"
                },
            }
            : {
                primary: {
                    light: "#749ace",
                    main: "#4F709C",
                    dark: "#213555",
                    contrastText: "#000"
                },
                secondary: {
                    light: "#F5EFE7",
                    main: "#D8C4B6",
                    dark: "#cca185",
                    contrastText: "#000"
                },
            }),
    }
});

export const retroThemeConfig: ThemeConfig = (mode: StrictThemeMode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                primary: {
                    light: "#FFD0D0",
                    main: "#FF9EAA",
                    dark: "#bd5c68",
                    contrastText: "#fff"
                },
                secondary: {
                    light: "#C1ECE4",
                    main: "#3AA6B9",
                    dark: "#2d778a",
                    contrastText: "#fff"
                },
            }
            : {
                primary: {
                    light: "#FFD0D0",
                    main: "#FF9EAA",
                    dark: "#bd5c68",
                    contrastText: "#000"
                },
                secondary: {
                    light: "#C1ECE4",
                    main: "#3AA6B9",
                    dark: "#2d778a",
                    contrastText: "#000"
                },
            }),
    }
});

export const earthThemeConfig: ThemeConfig = (mode: StrictThemeMode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                primary: {
                    light: "#cff3da",
                    main: "#A2CDB0",
                    dark: "#85A389",
                    contrastText: "#fff"
                },
                secondary: {
                    light: "#FFD89C",
                    main: "#F1C27B",
                    dark: "#c79f5e",
                    contrastText: "#fff"
                },
            }
            : {
                primary: {
                    light: "#cff3da",
                    main: "#A2CDB0",
                    dark: "#85A389",
                    contrastText: "#000"
                },
                secondary: {
                    light: "#FFD89C",
                    main: "#F1C27B",
                    dark: "#c79f5e",
                    contrastText: "#000"
                },
            }),
    }
});

export function themeConfigMapping(id: string): ThemeConfig {
    switch (id) {
        case "atatc":
            return ATATCThemeConfig;
        case "cambridge":
            return cambridgeThemeConfig;
        case "winter":
            return winterThemeConfig;
        case "retro":
            return retroThemeConfig;
        case "earth":
            return earthThemeConfig;
        default:
            return defaultThemeConfig;
    }
}
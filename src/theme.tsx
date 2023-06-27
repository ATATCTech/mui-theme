import {StrictThemeMode, ThemeConfig} from "./types";
import {requireStrictThemeMode, useSystemThemeMode} from "./mode";
import {ReactNode, useMemo} from "react";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {defaultThemeConfig} from "./presets";

export function Theme(props: {readonly themeMode?: StrictThemeMode, readonly themeConfig?: ThemeConfig, readonly children: ReactNode}): ReactNode {
    const systemThemeMode = useSystemThemeMode();
    const themeMode = props.themeMode == null ? systemThemeMode : requireStrictThemeMode(props.themeMode, systemThemeMode);
    const themeConfig = props.themeConfig == null ? defaultThemeConfig : props.themeConfig;
    const theme = useMemo(() => createTheme(themeConfig(themeMode)), [themeConfig]);
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {props.children}
        </ThemeProvider>
    );
}
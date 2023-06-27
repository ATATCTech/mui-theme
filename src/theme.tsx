import {StrictThemeMode, ThemeConfig} from "./types";
import {requireStrictThemeMode, useSystemThemeMode, useThemeMode} from "./mode";
import {ReactNode, useMemo} from "react";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {defaultThemeConfig} from "./presets";

export function Theme(props: {readonly themeMode?: StrictThemeMode, readonly themeConfig?: ThemeConfig, readonly children: ReactNode}): ReactNode {
    const systemThemeConfig = useSystemThemeMode();
    const themeMode = props.themeMode == null ? useThemeMode()[0] : requireStrictThemeMode(props.themeMode, systemThemeConfig);
    const themeConfig = props.themeConfig == null ? defaultThemeConfig : props.themeConfig;
    const theme = useMemo(() => createTheme(themeConfig(themeMode)), [themeConfig]);
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {props.children}
        </ThemeProvider>
    );
}
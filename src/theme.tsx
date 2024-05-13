import {StrictThemeMode, ThemeConfig, ThemeConfigMapping} from "./types";
import {requireStrictThemeMode, useSystemThemeMode} from "./mode";
import {ReactNode, useMemo} from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {defaultThemeConfig, themeConfigMapping} from "./presets";

export function Theme(props: {themeMode?: StrictThemeMode, themeConfig?: ThemeConfig, children: ReactNode}): ReactNode {
    const systemThemeMode = useSystemThemeMode();
    const themeMode = props.themeMode == null ? systemThemeMode : requireStrictThemeMode(props.themeMode, systemThemeMode);
    const themeConfig = props.themeConfig == null ? defaultThemeConfig : props.themeConfig;
    const theme = useMemo(() => createTheme(themeConfig(themeMode)), [themeMode, themeConfig]);
    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    );
}

export function DynamicTheme(props: {themeMode?: StrictThemeMode, themeConfigID?: string, themeConfigMapping: ThemeConfigMapping, children: ReactNode}) {
    const systemThemeMode = useSystemThemeMode();
    const themeMode = props.themeMode == null ? systemThemeMode : requireStrictThemeMode(props.themeMode, systemThemeMode);
    const themeConfig = props.themeConfigID == null ? defaultThemeConfig : themeConfigMapping(props.themeConfigID);
    const theme = useMemo(() => createTheme(themeConfig(themeMode)), [themeMode, themeConfig]);
    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    );
}
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { requireStrictThemeMode, useSystemThemeMode } from "./mode";
import { useMemo } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { defaultThemeConfig } from "./presets";
export function Theme(props) {
    const systemThemeMode = useSystemThemeMode();
    const themeMode = props.themeMode == null ? systemThemeMode : requireStrictThemeMode(props.themeMode, systemThemeMode);
    const themeConfig = props.themeConfig == null ? defaultThemeConfig : props.themeConfig;
    const theme = useMemo(() => createTheme(themeConfig(themeMode)), [themeMode, themeConfig]);
    return (_jsxs(ThemeProvider, { theme: theme, children: [_jsx(CssBaseline, {}), props.children] }));
}
//# sourceMappingURL=theme.js.map
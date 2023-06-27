import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { requireStrictThemeMode, useSystemThemeMode, useThemeMode } from "./mode";
import { useMemo } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { defaultThemeConfig } from "./presets";
export function Theme(props) {
    const systemThemeConfig = useSystemThemeMode();
    const themeMode = props.themeMode == null ? useThemeMode()[0] : requireStrictThemeMode(props.themeMode, systemThemeConfig);
    const themeConfig = props.themeConfig == null ? defaultThemeConfig : props.themeConfig;
    const theme = useMemo(() => createTheme(themeConfig(themeMode)), [themeConfig]);
    return (_jsxs(ThemeProvider, { theme: theme, children: [_jsx(CssBaseline, {}), props.children] }));
}
//# sourceMappingURL=theme.js.map
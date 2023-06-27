import { useMediaQuery } from "@mui/material";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { defaultThemeConfig } from "./presets";
export function requireThemeMode(themeMode, defaultMode = "fs") {
    return ["light", "dark"].includes(themeMode) ? themeMode : defaultMode;
}
export function requireStrictThemeMode(themeMode, defaultMode) {
    return ["light", "dark"].includes(themeMode) ? themeMode : defaultMode;
}
export function useSystemThemeMode() {
    return useMediaQuery("(prefers-color-scheme: light)") ? "light" : "dark";
}
export function useThemeModeCookie() {
    const [cookies, setCookie, removeCookie] = useCookies(["themeMode"]);
    return [
        () => {
            const tm = cookies["themeMode"];
            return tm == null ? "fs" : requireThemeMode(tm);
        },
        (themeMode) => setCookie("themeMode", themeMode),
        () => removeCookie("themeMode")
    ];
}
export function useThemeMode() {
    const systemThemeMode = useSystemThemeMode();
    const [getTMC] = useThemeModeCookie();
    const [themeMode, setThemeMode] = useState(systemThemeMode);
    useEffect(() => setThemeMode(requireStrictThemeMode(getTMC(), systemThemeMode)), [getTMC, systemThemeMode]);
    return [themeMode, (themeMode) => setThemeMode(requireStrictThemeMode(themeMode, systemThemeMode)), systemThemeMode];
}
export function useThemeConfigCookie(themeConfigMapping) {
    const [cookies, setCookie, removeCookie] = useCookies(["themeConfigID"]);
    return [
        () => {
            const tcID = cookies["themeConfigID"];
            return tcID == null ? defaultThemeConfig : themeConfigMapping(tcID);
        },
        (themeConfigID) => setCookie("themeConfigID", themeConfigID),
        () => removeCookie("themeConfigID")
    ];
}
export function useThemeConfig(themeConfigMapping) {
    const [getTCC] = useThemeConfigCookie(themeConfigMapping);
    const [themeConfig, setThemeConfig] = useState(defaultThemeConfig);
    useEffect(() => setThemeConfig(getTCC()), [getTCC]);
    return [themeConfig, (themeConfigID) => setThemeConfig(themeConfigMapping(themeConfigID))];
}
//# sourceMappingURL=mode.js.map
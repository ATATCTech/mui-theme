import { useMediaQuery } from "@mui/material";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
export function requireThemeMode(themeMode, defaultMode = "fs") {
    return ["light", "dark"].includes(themeMode) ? themeMode : defaultMode;
}
export function requireStrictThemeMode(themeMode, defaultMode) {
    return ["light", "dark"].includes(themeMode) ? themeMode : defaultMode;
}
export function useSystemThemeMode() {
    return useMediaQuery("(prefers-color-scheme: light)") ? "light" : "dark";
}
export function useThemeModeCookies() {
    const [cookies, setCookie, removeCookie] = useCookies(["themeMode"]);
    return [
        () => {
            const tm = cookies["themeMode"];
            return requireThemeMode(tm);
        },
        (themeMode) => setCookie("themeMode", themeMode),
        () => removeCookie("themeMode")
    ];
}
export function useThemeMode() {
    const systemThemeMode = useSystemThemeMode();
    const [getTMC] = useThemeModeCookies();
    const [themeMode, setThemeMode] = useState(systemThemeMode);
    useEffect(() => {
        setThemeMode(requireStrictThemeMode(getTMC(), systemThemeMode));
    }, [getTMC, systemThemeMode]);
    return [themeMode, setThemeMode, systemThemeMode];
}
//# sourceMappingURL=mode.js.map
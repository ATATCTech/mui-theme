import useMediaQuery from "@mui/material/useMediaQuery";
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
export function useThemeMode(ignoreCookie = false) {
    const systemThemeMode = useSystemThemeMode();
    const [getTMC] = useThemeModeCookie();
    const [themeMode, setThemeMode] = useState(systemThemeMode);
    if (ignoreCookie)
        useEffect(() => setThemeMode(systemThemeMode), [systemThemeMode]);
    else
        useEffect(() => setThemeMode(requireStrictThemeMode(getTMC(), systemThemeMode)), [systemThemeMode]);
    return [themeMode, (themeMode) => setThemeMode(requireStrictThemeMode(themeMode, systemThemeMode)), systemThemeMode];
}
export function useThemeConfigIDCookie() {
    const [cookies, setCookie, removeCookie] = useCookies(["themeConfigID"]);
    return [
        () => {
            const tcID = cookies["themeConfigID"];
            return tcID == null ? "default" : tcID;
        },
        (themeConfigID) => setCookie("themeConfigID", themeConfigID),
        () => removeCookie("themeConfigID")
    ];
}
export function useThemeConfigID() {
    const [getTCC] = useThemeConfigIDCookie();
    const [themeConfigID, setThemeConfigID] = useState("default");
    useEffect(() => setThemeConfigID(getTCC()), []);
    return [themeConfigID, (themeConfigID) => setThemeConfigID(themeConfigID)];
}
//# sourceMappingURL=mode.js.map
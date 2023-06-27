import {useMediaQuery} from "@mui/material";
import {useCookies} from "react-cookie";
import {useEffect, useState} from "react";
import {StrictThemeMode, ThemeMode} from "./types";

export function requireThemeMode(themeMode: string, defaultMode: ThemeMode = "fs"): ThemeMode {
    return ["light", "dark"].includes(themeMode) ? themeMode as StrictThemeMode : defaultMode;
}

export function requireStrictThemeMode(themeMode: string, defaultMode: StrictThemeMode): StrictThemeMode {
    return ["light", "dark"].includes(themeMode) ? themeMode as StrictThemeMode : defaultMode;
}

export function useSystemThemeMode(): StrictThemeMode {
    return useMediaQuery("(prefers-color-scheme: light)") ? "light" : "dark";
}

export function useThemeModeCookie(): [() => ThemeMode, (themeMode: ThemeMode) => void, () => void] {
    const [cookies, setCookie, removeCookie] = useCookies(["themeMode"]);
    return [
        () => {
            const tm = cookies["themeMode"];
            return tm == null ? "fs" : requireThemeMode(tm);
        },
        (themeMode: ThemeMode) => setCookie("themeMode", themeMode),
        () => removeCookie("themeMode")
    ];
}

export function useThemeMode(): [StrictThemeMode, (themeMode: ThemeMode) => void, StrictThemeMode] {
    const systemThemeMode = useSystemThemeMode();
    const [getTMC] = useThemeModeCookie();
    const [themeMode, setThemeMode] = useState<StrictThemeMode>(systemThemeMode);
    useEffect(() => setThemeMode(requireStrictThemeMode(getTMC(), systemThemeMode)), [getTMC, systemThemeMode]);
    return [themeMode, (themeMode: ThemeMode) => setThemeMode(requireStrictThemeMode(themeMode, systemThemeMode)), systemThemeMode];
}

export function useThemeConfigIDCookie(): [() => string, (themeConfigID: string) => void, () => void] {
    const [cookies, setCookie, removeCookie] = useCookies(["themeConfigID"]);
    return [
        () => {
            const tcID = cookies["themeConfigID"];
            return tcID == null ? "default" : tcID;
        },
        (themeConfigID: string) => setCookie("themeConfigID", themeConfigID),
        () => removeCookie("themeConfigID")
    ];
}

export function useThemeConfigID(): [string, (themeConfigID: string) => void] {
    const [getTCC] = useThemeConfigIDCookie();
    const [themeConfigID, setThemeConfigID] = useState<string>("default");
    useEffect(() => setThemeConfigID(getTCC()), [getTCC]);
    return [themeConfigID, (themeConfigID: string) => setThemeConfigID(themeConfigID)];
}
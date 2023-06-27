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
            return requireThemeMode(tm);
        },
        (themeMode: ThemeMode) => setCookie("themeMode", themeMode),
        () => removeCookie("themeMode")
    ];
}

export function useThemeMode(): [StrictThemeMode, (themeMode: ThemeMode) => void, StrictThemeMode] {
    const systemThemeMode = useSystemThemeMode();
    const [getTMC] = useThemeModeCookie();
    const [themeMode, setThemeMode] = useState(systemThemeMode);
    useEffect(() => {
        setThemeMode(requireStrictThemeMode(getTMC(), systemThemeMode));
    }, [getTMC, systemThemeMode]);
    return [themeMode, setThemeMode as (themeMode: ThemeMode) => void, systemThemeMode];
}
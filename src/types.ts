import {ThemeOptions} from "@mui/material/styles";

export type StrictThemeMode = "light" | "dark";
export type ThemeMode = StrictThemeMode | "fs";
export type ThemeConfig = (mode: StrictThemeMode) => ThemeOptions;
export type ThemeConfigMapping = (id: string) => ThemeConfig;
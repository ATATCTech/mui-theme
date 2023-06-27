# mui-theme

The ultimate dynamic theme-switching solution for MUI that adapts to SSR.

## Installation

```shell
npm i @atatctech/mui-theme
```

## Usage

### Quick Start

```tsx
function App(): ReactNode {
    return (
        <Theme>
            {/*Your Application*/}
        </Theme>
    );
}
```

Note that by default the component ignores cookie settings. You will have to use `useThemeMode()`
or `useThemeConfigID()` which load settings from cookies automatically. Using cookie hooks is also applicable.

### Dynamic Control

```tsx
function App(): ReactNode {
    const [themeMode, setThemeMode, systemThemeMode] = useThemeMode();
    return (
        <Theme themeMode={themeMode}>
            {/*Your Application*/}
        </Theme>
    );
}
```

### Cookies

```tsx
import {useThemeConfigIDCookie} from "./mode";

const [getTMC, setTMC, removeTMC] = useThemeModeCookie();
const [getTCC, setTCC, removeTCC] = useThemeConfigIDCookie();
```

### Source Level

1. Prop `themeMode`
2. Cookie
3. System Setting

### Theme Config

```tsx
function App(): ReactNode {
    const [themeMode, setThemeMode, systemThemeMode] = useThemeMode();
    return (
        <Theme themeMode={themeMode} themeConfig={cambridgeBlueThemeConfig}>
            {/*Your Application*/}
        </Theme>
    );
}
```

#### Dynamic Theme Config

There are two ways to implement dynamic theme config switching.

```tsx
function App(): ReactNode {
    const [themeConfig, setThemeConfig] = useState(defaultThemeConfig);
    return (
        <Theme themeConfig={themeConfig}>
            {/*Your Application*/}
        </Theme>
    );
}
```

```tsx
function App(): ReactNode {
    const [themeConfigID, setThemeConfigID] = useThemeConfigID();
    const themeConfigMapping = (id: string) => {
        switch (id) {
            case "winter":
                return winterThemeConfig;
            default:
                return defaultThemeConfig;
        }
    };
    return (
        <DynamicTheme themeConfigID={themeConfigID} themeConfigMapping={themeConfigMapping}>
            {/*Your Application*/}
        </DynamicTheme>
    );
}
```

The second one is more convenient when it comes to `Select`-controlled theme switching.

### Custom Theme Config

To make it capable with Material-UI, you will have to define at least the following:

- Primary and secondary color under light mode
- Primary and secondary color under dark mode

For each color mentioned, you will have to define three variants that are `light`, `main`, `dark`, and `contrastText`,
where `contrastText` means the opposite of normal text color under that mode. For instance, as normally texts are black
under light mode, the `contrastText` would be white.

The following example shows how to define a theme config in TypeScript.

```tsx
const defaultThemeConfig: ThemeConfig = (mode: StrictThemeMode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                primary: {
                    light: "#BBE5ED",
                    main: "#2F9CB1",
                    dark: "#1A5561",
                    contrastText: "#fff"
                },
                secondary: {
                    light: "#BFBCCB",
                    main: "#B399A2",
                    dark: "#986C6A",
                    contrastText: "#fff"
                },
            }
            : {
                primary: {
                    light: "#BBE5ED",
                    main: "#2F9CB1",
                    dark: "#1A5561",
                    contrastText: "#000"
                },
                secondary: {
                    light: "#BFBCCB",
                    main: "#B399A2",
                    dark: "#986C6A",
                    contrastText: "#000"
                },
            }),
    }
});
```

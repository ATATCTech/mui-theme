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
const [getTMC, setTMC, removeTMC] = useThemeModeCookies();
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


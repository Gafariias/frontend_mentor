import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --background: hsl(218, 23%, 16%);
        --container_bg: hsl(217, 19%, 24%);
        --font_color: hsl(193, 38%, 86%);
        --font_color_highlight: hsl(217, 19%, 38%);
        --neon: hsl(150, 100%, 66%);

        --font: font-family: 'Manrope', sans-serif;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }

    body {
        background-color: var(--background);
        font-family: var(--font);
        height: 100vh;
        width: 100vw;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
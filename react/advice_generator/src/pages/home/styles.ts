import styled from "styled-components";

export const Container = styled.main`
    background-color: var(--container_bg);
    border-radius: 1rem;
    height: 21rem;
    width: 31rem;
    padding: 2rem 2rem 4rem 2rem;

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        width: 3.5rem;
        height: 3.5rem;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        background-color: var(--neon);
        transition: all 50ms linear;

        display: flex;
        align-items: center;
        justify-content: center;
        
        transform: translate(-50%, -50%);
        top: 100%;
        left: 50%;
        position: absolute;

        :hover {
            box-shadow: 5px 5px 8px var(--shadow),
            -5px -5px 8px var(--shadow),
            5px -5px 8px var(--shadow),
            -5px 5px 8px var(--shadow);
        }
    }
`;

export const Content = styled.section`
    width: 100%;
    height: 100%;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    h1 {
        color: var(--font_color);    
        font-size: 1.5rem;
    }

    h2 {
        font-size: 1rem;
        color: var(--neon);
        letter-spacing: .2rem;
    }

    img {
        width: 100%;
    }

    
`;
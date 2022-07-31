import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 2px ${props => props.theme["green-500"]};
    }

    body{
        background-color: #333;
        color: #fff;
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`;
import { createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
max-width: 1120px;
:root {
    --background: #F26457;
    --white: #fff;
    --blue: #273A73;
    --purple: #F99D94;
}
* {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
    body {
        background-color: var(--background);
        color: var(--white);
        font-size: 1rem;
        text-align: center;
    }
    input {
        background: var(--purple);
        color: var(--blue);
        padding: 0.7rem 2.25rem;
        border: none;
        outline: none;
    }
    button {
        background: var(--blue);
        color: var(--white);
        padding: 0.7rem;
        border: none;
        outline: none;
        cursor: pointer;
    }
    
`;
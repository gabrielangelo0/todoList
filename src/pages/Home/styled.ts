import styled from "styled-components";

export const ContainerHome = styled.form`
        margin-top: 6.9rem;
    .titleContainer {
        max-width: 700px;
        margin: 0 auto;
        margin-bottom: 3.875rem;
        h1 {
            font-weight: 400;
            font-size: 3.25rem;
        }
        span {
            font-weight: 600;
        }
    }
    .InputArea {
        margin: 0 auto;
        max-width: 625px;
        display: grid;
        grid-template-columns: 1fr 75px;
        margin-bottom:3rem;
        input {
            border-radius: 5px 0px 0px 5px;
            &::placeholder {
                color: var(--blue);
            }
        }
        button {
            border-radius: 0px 5px 5px 0px;
        }
    }
.checkbox {
        background: transparent;
        border: 2px solid var(--white);
    }
    @media (max-width: 768px) {
        margin-top: 2.56rem;
        .titleContainer {
            margin-bottom: 1.875rem;
            h1 {
            font-size: 1.625rem;
        }
        }
        .InputArea {
            padding: 0 1rem;
            margin-bottom: 1.125rem;
        }
    }
 `;
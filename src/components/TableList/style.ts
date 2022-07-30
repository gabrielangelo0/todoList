import styled from "styled-components";

export const TableStyles = styled.div`
    .ListTodo {
        margin-top: 0.5rem;
    }
    .list {
        margin: 0 auto;
        display: grid;
        grid-template-columns: 50px 1fr 100px;

        background: var(--blue);
        color: var(--white);

        max-width: 625px;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        text-align: left;

        /* display: flex; */
        /* justify-content: space-between; */
        align-items: center;
        
        span {
            cursor: pointer;
        }

        .options {
            display: flex;
            justify-content: flex-end;
            gap: 1rem;
        }
}
@media (max-width: 768px) {
            padding: 0 1rem;
    }
`;
 
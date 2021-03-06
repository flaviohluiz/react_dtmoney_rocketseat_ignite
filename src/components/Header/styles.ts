import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 8rem; //1 rem - tamanho do font size do root
    display: flex;
    align-items: center; // itens alinhado ao meio
    justify-content: space-between; // espaço entre a logo e o botão

    button {
        font-size: 1rem;
        color: #fff;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9)
        }

    }

    h1 {
        color: #fff;
        font-size: 2.5rem;
    }

`;


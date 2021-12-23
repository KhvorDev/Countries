import styled from "styled-components";

const Button = styled.button`
    padding: 0 1rem;
    background-color: var(--colors-ui-base);
    box-shadow: var(--shadow);
    line-height: 2.5rem;
    border-radius: var(--b-radius);

    border: none;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    color: var(--color-text);
    cursor: pointer;
    font-weight: var(--fw-normal);
`

export default Button;
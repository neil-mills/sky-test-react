import { blue, white } from '../utilities/colors';
import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

const BUTTON_MODIFIERS = {
    white: () => `
        border-color: ${white};
        color: ${white};
    `
}
export const Button = styled.button`
    padding: 0 20px;
    margin: 0;
    height: 2.2rem;
    line-height: 2.2rem;
    font-size: 18px;
    border-radius: 4px;
    border: 1px solid ${blue};
    color: ${blue};
    background-color: transparent;
    cursor: pointer;
    outline: none;
    ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;
import React from 'react'
import styled from 'styled-components';
import Search from './Search';
import { white, darkBlue } from '../utilities/colors';

const Header = ({className}) => {
    return (
        <header className={className}>
            <h1>How can we help?</h1>
            <Search />
        </header>
    )
}

export default styled(Header)`
    background-color: ${darkBlue};
    padding: 30px;
    text-align: center;
    h1 {
        color: ${white};
        margin: 0 0 30px;
        line-height: 1;
    }
`;

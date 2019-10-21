import React, { useContext } from 'react';
import Header from './Header';
import SearchResults from './SearchResults';
import AppContext from '../context/AppContext';
import styled from 'styled-components';

const SearchScreen = ({className}) => {
    const { isLoading } = useContext(AppContext);
    return (
        <div className={className}>
            <Header />
            <main>
            {isLoading ?
                <div>Loading</div>
            :
            <SearchResults />
                }
            </main>
        </div>
    )
}

export default styled(SearchScreen)`
    main {
        padding: 30px;
    }
    `

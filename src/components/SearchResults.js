import React, { useContext, Fragment } from 'react';
import AppContext from '../context/AppContext';
import SearchItem from './SearchItem';
import Pagination from './Pagination';
import styled from 'styled-components';

const SearchResults = ({className}) => {
    const { paginatedResults, response } = useContext(AppContext);
    
    return (
        <div className={className}>
            {response &&
                <Fragment>
                {paginatedResults.length > 0 ?
                    <Fragment>
                    <h2>Search results</h2>
                    <ul>
                        {paginatedResults.map((result, i) => (
                            <SearchItem key={i} item={result} />
                        ))
                        }
                        </ul>
                    </Fragment>
                    :
                    <h2>No results found.</h2> 
                    }
                    <Pagination />
                </Fragment>
            }
        </div>
    )
}

export default styled(SearchResults)`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    ul {
        text-align: left;
        margin-bottom: 30px;
    }
`

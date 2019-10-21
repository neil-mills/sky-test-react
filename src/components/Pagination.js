import React, { useContext, useState, useEffect, Fragment } from 'react'
import AppContext from '../context/AppContext';
import { withRouter } from "react-router";
import styled from 'styled-components';
import { Button } from '../elements/Buttons';

const Pagination = props => {
    const { className } = props;
    const { isLoading, page, totalPages, response, results } = useContext(AppContext);
    const [loadMore, setLoadMore] = useState(false);

    useEffect(() => {
        setLoadMore(results.length > 0 && page !== totalPages);
    }, [page, response, results, totalPages]);

    const handleLoadMore = e => {
        e.preventDefault();
        const nextPage = Number(page) + 1;
        props.history.push(`/?page=${nextPage}`)
    }

    return (
        <div className={className}>
            {loadMore &&
                <Button className="pagination__btn" onClick={handleLoadMore}>
                { isLoading ?
                    <Fragment>Loading</Fragment>
                    :
                    <Fragment>Show More</Fragment>
               } 
                </Button>
            }
        </div>
    )
}

export default withRouter(styled(Pagination)`

`);

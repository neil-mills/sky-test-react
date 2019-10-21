import React from 'react'
import styled from 'styled-components';
import { h3 } from '../utilities/typography';

const SearchItem = props => {
    const { className, item } = props;
    const { title, url, description } = item;
   
    const handleClick = () => {
        window.location.href = url;
    }

    return (
        <li className={className}>
            <a href={url}>{title}</a>
            <p>{description}</p>
        </li>
    )
}

export default styled(SearchItem)`
    margin-bottom: 20px;
    a {
        font-size: ${h3};
    }
    p {
        margin: 4px 0 0;
    }
`

import React, { useContext, useRef } from 'react';
import AppContext from '../context/AppContext';
import { Button } from '../elements/Buttons';
import styled from 'styled-components';

const Search = ({className}) => {
    const { query, isLoading, handleSubmit, handleChange } = useContext(
        AppContext
    );
    const inputRef = useRef();
    const handleKeyPress = e => {
        if (e.keyCode === 13) {
            handleSubmit(e);
       }
    }
    const handleFocus = e => {
        inputRef.current.value = "";
        handleChange(e);
    };
    
    return (
        <div className={className}>
        <form>
            <input
                type="text"
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                onFocus={handleFocus}
                placeholder="Search"
                disabled={isLoading}
                value={query} 
                ref={inputRef}
             />
            <Button
                type="submit"
                onClick={handleSubmit}
                disabled={isLoading}
                modifiers="white"
            >
                Search
            </Button>
            </form>
            </div>
    )
}

export default styled(Search)`
    display:flex;
    justify-content: center;
    form {
        width: 100%;
        max-width: 400px;
        display:grid;
        grid-template-columns: 1fr 92px;
    }
    input {
        margin-right: 10px;
    }
`

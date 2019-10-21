import React, { Component } from 'react';
import AppContext from './AppContext';
import { withRouter } from "react-router";
import { api } from '../api/config';

class AppContextProvider extends Component {
    state = {
        query: "",
        page: 1,
        totalPages: 0,
        results: [],
        paginatedResults: [],
        resultsPerPage: 10,
        isLoading: false,
    };

    componentDidMount() {
        if (this.props.location.search) {
            this.props.history.push('/');
        };
    };

    componentDidUpdate(prevProps) {
        if (prevProps.location.search !== this.props.location.search) {
            const page = this.props.location.search ? this.props.location.search.split('=')[1] : 1;
            this.paginateResults(this.state.results, page);
        };
    };

    getResults = () => {
        const { query } = this.state;
        const page = 1;
        this.setState({ response: false }, () => {
            fetch(`${api.url}search/?query=${query}`)
            .then(response => response.json())
            .then(data => {
                const { results } = data;
                this.paginateResults(results, page);
            });
        });
    };
  
    paginateResults = (results, page) => {
        const { resultsPerPage } = this.state;
        const totalPages = Math.ceil(results.length / resultsPerPage);
        const end = page < totalPages ? resultsPerPage * page : -1;
        const paginatedResults = totalPages ? results.slice(0, end) : results;
        this.setState({ page, results, totalPages, paginatedResults, isLoading: false, response: true });
    };

    handleChange = e => {
        const { value } = e.currentTarget;
        const query = value.trim().toLowerCase();
        this.setState({ query });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { query } = this.state;
        if (query) {
            this.setState({ isLoading: true, query }, this.getResults());  
        };
    };

    render() {
        const { handleChange, handleSubmit } = this;
        return (
        <AppContext.Provider
            value={{
                ...this.state,
                handleChange,
                handleSubmit
            }}
        >
            {this.props.children}
        </AppContext.Provider>
    );
  }
}

export default withRouter(AppContextProvider);

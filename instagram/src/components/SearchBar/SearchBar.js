import React from 'react';
import './Navigation.css';
import PropTypes from 'prop-types';

const SearchBar = props => {
    
    return (
        <div className="searchContainer">
            <form onSubmit={props.searchSubmit}>
                <input className="searchBox" type="text" value={props.searchValue} onChange={props.searchChange} />
            </form>
        </div>
    )
};

SearchBar.propTypes = {
    searchValue: PropTypes.string.isRequired,
    searchChange: PropTypes.func.isRequired,
    searchSubmit: PropTypes.func.isRequired
};


export default SearchBar;
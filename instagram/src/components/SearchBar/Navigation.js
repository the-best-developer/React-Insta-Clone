import React from 'react';
import './Navigation.css';
import logo from '../../img/insta-logo.png';
import SearchBar from './SearchBar.js';
import PropTypes from 'prop-types';

const Navigation = props => {
    
    return (
        <div className="navContainer">
            {/* Logo */}
            <img src={logo} alt=""></img>

            {/* Search bar */}
            <SearchBar searchValue={props.searchValue} searchChange={props.searchChange} searchSubmit={props.searchSubmit}/>

            {/* Links */}
            <div className="navLinks">
                <a href={"index.html"}>icon</a>
                <a href={"index.html"}>icon</a>
                <a href={"index.html"}>icon</a>
            </div>
        </div>
    )
};

Navigation.propTypes = {
    searchValue: PropTypes.string.isRequired,
    searchChange: PropTypes.func.isRequired,
    searchSubmit: PropTypes.func.isRequired
};
  


export default Navigation;
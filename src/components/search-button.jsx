import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const propTypes = {
    onClickClearSearchResults: PropTypes.func.isRequired
};


const SearchButton = ({ onClickClearSearchResults }) => {
    return (
        <div className="open-search">
            <Link
                to="/search-books"
                onClick={onClickClearSearchResults}
            >
                Add a book
            </Link>
        </div>
    );
};

SearchButton.propTypes = propTypes;

export default SearchButton;
